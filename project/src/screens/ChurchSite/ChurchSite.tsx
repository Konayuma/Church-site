import React from "react";
import { FrameByAnima } from "./sections/FrameByAnima/FrameByAnima";
import { HeroSectionByAnima } from "./sections/HeroSectionByAnima";
import { JoinUsByAnima } from "./sections/JoinUsByAnima";
import { TestimonialsByAnima } from "./sections/TestimonialsByAnima/TestimonialsByAnima";
import { TestimonialsWrapperByAnima } from "./sections/TestimonialsWrapperByAnima";

export const ChurchSite = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px]">
        <FrameByAnima />
        <HeroSectionByAnima />
        <TestimonialsWrapperByAnima />
        <TestimonialsByAnima />
        <JoinUsByAnima />
      </div>
    </div>
  );
};
