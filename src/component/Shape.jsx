import React, { useRef, useState, useEffect } from 'react';

const LineDrawer = () => {
  const canvasRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);
  const [selectedLine, setSelectedLine] = useState(null);
  const [resizingHandle, setResizingHandle] = useState(null);
  const [originalLine, setOriginalLine] = useState(null);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);
  const [inputLength, setInputLength] = useState('');

  const threshold = 10; // Adjust the threshold value as needed
  const screenDPI = 96; // Set the screen DPI for the approximate conversion (adjust as needed)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    lines.forEach((line) => {
      drawLine(ctx, line);
      if (line === selectedLine) {
        drawHandles(ctx, line);
      }
    });

    if (currentLine) {
      drawLine(ctx, currentLine);
      drawHandles(ctx, currentLine);
    }
  }, [lines, currentLine, selectedLine]);

  const drawLine = (ctx, line) => {
    ctx.beginPath();
    ctx.moveTo(line.startX, line.startY);
    ctx.lineTo(line.endX, line.endY);
    ctx.stroke();
  };

  const drawHandles = (ctx, line) => {
    // Omit drawing handles for the selected line
    if (line !== selectedLine) {
      ctx.beginPath();
      ctx.arc(line.startX, line.startY, 5, 0, 2 * Math.PI);
      ctx.fillStyle = 'red';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(line.endX, line.endY, 5, 0, 2 * Math.PI);
      ctx.fillStyle = 'red';
      ctx.fill();
    }
  };

  const calculateDistance = (point1, point2) => {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const snapToLine = (point) => {
    for (const line of lines) {
      const [start, end] = line;
      if (calculateDistance(start, point) <= threshold) {
        return start;
      } else if (calculateDistance(end, point) <= threshold) {
        return end;
      }
    }
    return point;
  };

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (const line of lines) {
      if (calculateDistance({ x, y }, { x: line.startX, y: line.startY }) < threshold) {
        setResizingHandle('start');
        setOriginalLine(line);
        setCurrentLine(line);
        return;
      } else if (calculateDistance({ x, y }, { x: line.endX, y: line.endY }) < threshold) {
        setResizingHandle('end');
        setOriginalLine(line);
        setCurrentLine(line);
        return;
      }
    }

    setCurrentLine({ startX: x, startY: y, endX: x, endY: y });
  };

  const handleMouseMove = (e) => {
    if (!currentLine) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (resizingHandle) {
      setCurrentLine((prevLine) => ({
        ...prevLine,
        [resizingHandle + 'X']: x,
        [resizingHandle + 'Y']: y,
      }));
    } else {
      setCurrentLine((prevLine) => ({ ...prevLine, endX: x, endY: y }));
    }
  };

  const handleMouseUp = () => {
    if (!currentLine) return;

    if (resizingHandle) {
      setResizingHandle(null);

      if (originalLine) {
        setLines((prevLines) =>
          prevLines.map((line) => {
            if (line === originalLine) {
              return currentLine;
            }
            return line;
          })
        );
      }
    } else {
      // Check if the current line's end is close to the start or end of any existing lines
      let connectedLine = null;

      for (const line of lines) {
        if (
          calculateDistance(currentLine, { x: line.startX, y: line.startY }) < threshold ||
          calculateDistance(currentLine, { x: line.endX, y: line.endY }) < threshold
        ) {
          connectedLine = line;
          break;
        }
      }

      if (connectedLine) {
        // If the current line is close to an existing line, connect them together
        setLines((prevLines) =>
          prevLines.map((line) => {
            if (line === connectedLine) {
              const snapStart = calculateDistance(currentLine, { x: line.startX, y: line.startY }) < threshold;
              const snapEnd = calculateDistance(currentLine, { x: line.endX, y: line.endY }) < threshold;

              const newX = snapStart ? currentLine.startX : currentLine.endX;
              const newY = snapStart ? currentLine.startY : currentLine.endY;

              return { ...line, [snapStart ? 'startX' : 'endX']: newX, [snapStart ? 'startY' : 'endY']: newY };
            }
            return line;
          })
        );
      } else {
        // If not connected to any existing line, add the current line to the lines array
        setLines([...lines, currentLine]);
      }
    }

    setCurrentLine(null);
    setOriginalLine(null);
  };

  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Find the line closest to the click point
    let closestLine = null;
    let closestDistance = Infinity;

    for (const line of lines) {
      const distanceToStart = calculateDistance({ x: clickX, y: clickY }, { x: line.startX, y: line.startY });
      const distanceToEnd = calculateDistance({ x: clickX, y: clickY }, { x: line.endX, y: line.endY });

      if (distanceToStart < closestDistance) {
        closestDistance = distanceToStart;
        closestLine = line;
      }

      if (distanceToEnd < closestDistance) {
        closestDistance = distanceToEnd;
        closestLine = line;
      }
    }

    if (closestLine && closestDistance < threshold) {
      setSelectedLine(closestLine);
    } else {
      setSelectedLine(null);
    }
  };

  const handleInputBlur = () => {
    if (selectedLine) {
      setLines((prevLines) =>
        prevLines.map((line) => {
          if (line === selectedLine) {
            // Parse the input length and update the line's end coordinates accordingly
            const length = parseFloat(inputLength);
            if (!isNaN(length)) {
              const dx = line.endX - line.startX;
              const dy = line.endY - line.startY;
              const currentLengthInCm = pixelToCm(Math.sqrt(dx * dx + dy * dy));
              const scaleFactor = length / currentLengthInCm;
              const newEndX = line.startX + dx * scaleFactor;
              const newEndY = line.startY + dy * scaleFactor;
              return { ...line, endX: newEndX, endY: newEndY };
            }
          }
          return line;
        })
      );
    }
  };

  const handleInputChange = (e) => {
    setInputLength(e.target.value);
  };

  const cmToPixel = (cm) => {
    // Convert centimeters to pixels based on the screen DPI
    return cm * (screenDPI / 2.54);
  };

  const pixelToCm = (pixel) => {
    // Convert pixels to centimeters based on the screen DPI
    return pixel / (screenDPI / 2.54);
  };

  const calculateLineLength = (line) => {
    // Calculate the length of the line using the Pythagorean theorem
    const dx = line.endX - line.startX;
    const dy = line.endY - line.startY;
    const lengthInPixels = Math.sqrt(dx * dx + dy * dy);
    const lengthInCm = pixelToCm(lengthInPixels);
    return lengthInCm.toFixed(2);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        style={{ border: '1px solid black' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={handleCanvasClick}
      ></canvas>
      {selectedLine && (
        <div>
          <p>Length: {calculateLineLength(selectedLine)} cm</p>
          <label>
            Resize Length (cm):
            <input
              type="number"
              value={inputLength}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              style={{ marginLeft: '5px' }}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default LineDrawer;
