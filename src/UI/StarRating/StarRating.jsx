import React, { useState } from "react";
import { Star,HalfStar,FillStar } from "../../dummy";


const StarRating = () => {
  const [rating, setRating] = useState(2.5);
  const star = () => {
    switch (rating) {
      case 0:
        return (
          <>
            {Star}
            {Star}
            {Star}
            {Star}
            {Star}
           
          </>
        );
      case 0.5:
        return (
          <>
            {HalfStar}
            {Star}
            {Star}
            {Star}
            {Star}
           
          </>
        );
      case 1:
        return (
          <>
            {FillStar}
            {Star}
            {Star}
            {Star}
            {Star}
           
          </>
        );
      case 1.5:
        return (
          <>
            {FillStar}
            {HalfStar}
            {Star}
            {Star}
            {Star}
           
          </>
        );
      case 2:
        return (
          <>
            {FillStar}
            {FillStar}
            {Star}
            {Star}
            {Star}
           
          </>
        );
    
      case 2.5:
        return (
          <>
            {FillStar}
            {FillStar}
            {HalfStar}
            {Star}
            {Star}
           
          </>
        );
    
      case 3:
        return (
          <>
            {FillStar}
            {FillStar}
            {FillStar}
            {Star}
            {Star}
           
          </>
        );
      case 3.5:
        return (
          <>
            {FillStar}
            {FillStar}
            {FillStar}
            {HalfStar}
            {Star}
           
          </>
        );
      case 4:
        return (
          <>
            {FillStar}
            {FillStar}
            {FillStar}
            {FillStar}
            {Star}
           
          </>
        );
      case 4.5:
        return (
          <>
            {FillStar}
            {FillStar}
            {FillStar}
            {HalfStar}
            {Star}
           
          </>
        );
      case 5:
        return (
          <>
            {FillStar}
            {FillStar}
            {FillStar}
            {FillStar}
            {FillStar}
           
          </>
        );
    
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex justify-center items-center flex-row-reverse  ">
        {star()}
      </div>
    </>
  );
};

export default StarRating;
