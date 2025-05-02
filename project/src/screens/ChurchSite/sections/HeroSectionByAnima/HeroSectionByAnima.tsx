import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSectionByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1024px] bg-white overflow-hidden">
      <div className="w-full h-full bg-[url(/image-1.png)] bg-cover bg-center flex flex-col items-center">
        <h1 className="mt-[66px] max-w-[1046px] [font-family:'TAN_-_PEARL-Regular',Helvetica] font-normal text-[40px] text-center tracking-[3.20px] leading-[60px]">
          <span className="text-[#464d2b] tracking-[1.28px]">
            We Are the City on a Hill – Shining God&apos;s Love{" "}
          </span>
          <span className="text-[#f59773] tracking-[1.28px]">
            for All to See{" "}
          </span>
        </h1>

        <p className="mt-[76px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#464d2b] text-xl tracking-[1.60px] leading-[35px]">
          JOIN US EVERY SUNDAY AT 10:00 AM
        </p>

        <Button
          variant="outline"
          className="mt-[17px] w-[204px] h-14 rounded-[20px] [font-family:'Inter',Helvetica] font-normal text-[#ce7957] text-xl border-[#f59773] hover:text-[#ce7957] hover:bg-[#f5977310]"
        >
          Watch a sermon
        </Button>

        <div className="mt-auto h-[219px] w-full [background:linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(153,153,153,0)_100%)]" />
      </div>
    </section>
  );
};
