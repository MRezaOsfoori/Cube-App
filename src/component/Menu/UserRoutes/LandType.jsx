import React, { useState, useEffect } from "react";
import Maskooni from "./Maskooni";
import Edari from "./Edari";
import MogheiatEdari from "./MogheiatEdari";
import Tejari from "./Tejari";
import Sanati from "./Sanati";
import Keshavarzi from "./Keshavarzi";

const LandType = ({ landuse }) => {
  console.log(landuse, "type");
  let landtype = "";

  if (landuse == 1) {
    landtype = <Maskooni />;
  } else {
    if (landuse == 2) {
      landtype = <Edari />;
    } else {
      if (landuse == 3) {
        landtype = <MogheiatEdari />;
      } else {
        if (landuse == 4) {
          landtype = <Tejari />;
        } else {
          if (landuse == 5) {
            landtype = <Sanati />;
          } else {
            if (landuse == 6) {
              landtype = <Keshavarzi />;
            }
          }
        }
      }
    }
  }

  return <>{landtype}</>;
};

export default LandType;
