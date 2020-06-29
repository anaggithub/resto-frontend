import React from "react";
import Lottie from "react-lottie";
import dogAnimation from "../../data/dog.json";
import catAnimation from "../../data/cat.json";
import { useSelector } from "react-redux";

const Pet = ({ classes, animation, handleOnClick }) => {
  const pet = useSelector((state) => state.pet);

  const animationData = () => {
    if (animation) return animation;
    else if (pet === "dog") {
      return dogAnimation;
    } else return catAnimation;
  };

  const defaultOptions = {
    loop: true,
    autoPlay: true,
    animationData: animationData(),
  };

  return (
    <div className={`${classes}`} onClick={handleOnClick}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default Pet;
