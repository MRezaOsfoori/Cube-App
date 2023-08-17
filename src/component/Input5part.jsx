
import React, { useRef, useEffect,useState } from 'react';
import style from "../style/ImageHeader.module.css"

const FivePartInput = () => {
  const inputRefs = {
    part1: useRef(null),
    part2: useRef(null),
    part3: useRef(null),
    part4: useRef(null),
    part5: useRef(null),
  };

  const [inputValues, setInputValues] = useState({
    part1: '',
    part2: '',
    part3: '',
    part4: '',
    part5: '',
  });

  useEffect(() => {
    // When the component mounts, focus on the first input element.
    inputRefs.part1.current.focus();
  }, []);

  const handleChange = (e, part) => {
    const value = e.target.value;
    if (value.length <= 1) {
      setInputValues((prevValues) => ({
        ...prevValues,
        [part]: value,
      }));
      if (value.length === 1) {
        focusNextInput(part);
      }
    }
  };

  const focusNextInput = (part) => {
    switch (part) {
      case 'part1':
        inputRefs.part2.current.focus();
        break;
      case 'part2':
        inputRefs.part3.current.focus();
        break;
      case 'part3':
        inputRefs.part4.current.focus();
        break;
      case 'part4':
        inputRefs.part5.current.focus();
        break;
      case 'part5':
        // The fifth input is already the last one, so we can choose what to do here.
        // For example, you might want to submit the form at this point.
        break;
      default:
        break;
    }
  };

  const handleSelect = (part) => {
    inputRefs[part].current.select();
  };

  return (
    <div className="flex justify-around  w-full h-10 mb-6">

      <input
        type="text"
        name="part5"
        value={inputValues.part5}
        onChange={(e) => handleChange(e, 'part5')}
        onClick={() => handleSelect('part5')}
        maxLength={1}
        ref={inputRefs.part5}
        className={style.Input5}
        
        
      />
      <input
        type="text"
        name="part4"
        value={inputValues.part4}
        onChange={(e) => handleChange(e, 'part4')}
        onClick={() => handleSelect('part4')}
        maxLength={1}
        ref={inputRefs.part4}
        className={style.Input5}
      />
      <input
        type="text"
        name="part3"
        value={inputValues.part3}
        className={style.Input5}
        onChange={(e) => handleChange(e, 'part3')}
        onClick={() => handleSelect('part3')}
        maxLength={1}
        ref={inputRefs.part3}
      />
      <input
        type="text"
        name="part2"
        value={inputValues.part2}
        className={style.Input5}
        onChange={(e) => handleChange(e, 'part2')}
        onClick={() => handleSelect('part2')}
        maxLength={1}
        ref={inputRefs.part2}
      />
      <input
        type="text"
        name="part1"
        className={style.Input5}
        value={inputValues.part1}
        onChange={(e) => handleChange(e, 'part1')}
        onClick={() => handleSelect('part1')}
        maxLength={1}
        ref={inputRefs.part1}
      />
    </div>
  );
};

export default FivePartInput;

