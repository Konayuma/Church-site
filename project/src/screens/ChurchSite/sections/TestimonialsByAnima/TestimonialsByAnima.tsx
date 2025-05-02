import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsByAnima = (): JSX.Element => {
  // Service information data
  const inPersonServices = [
    "In-Person Services:",
    "Sunday Worship: 9:00 AM & 11:00 AM",
    "Wednesday Bible Study: 7:00 PM",
  ];

  const onlineServices = [
    "Online Services:",
    "Live Stream: Sundays at 11:00 AM",
    "Watch on YouTube",
  ];

  return (
    <Card className="w-full bg-[#dbe5e6] rounded-[150px_150px_0px_0px] overflow-hidden opacity-70">
      <CardContent className="p-0 relative">
        <div className="flex flex-col px-32 pt-40 pb-20">
          <h1 className="[font-family:'TAN_-_PEARL-Regular',Helvetica] font-normal text-[#2a2a27] text-[50px] tracking-[0.50px] leading-[26px] mb-24">
            Join Us for Worship
          </h1>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-16 max-w-[744px]">
              <div className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#2a2a27] text-3xl tracking-[2.40px] leading-[45px]">
                {inPersonServices.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < inPersonServices.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>

              <div className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#2a2a27] text-3xl tracking-[2.40px] leading-[45px]">
                {onlineServices.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < onlineServices.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-[188px] h-16 rounded-[20px] border-[#f59773] text-[#ce7957] mt-16 p-3"
              >
                <span className="[font-family:'Inter',Helvetica] font-normal text-xl leading-5">
                  Get Directions
                </span>
              </Button>
            </div>

            <img
              className="w-[405px] h-[555px] object-cover"
              alt="Church building"
              src="/rectangle-6.png"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
