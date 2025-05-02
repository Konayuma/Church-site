import React from "react";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

interface TestimonialCardProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
}

export const TestimonialsWrapperByAnima = (): JSX.Element => {
  const testimonialCards: TestimonialCardProps[] = [
    {
      image: "/rectangle-3.png",
      title: "I'm New",
      description:
        "We're glad to have you here and look forward to connecting with you.",
      linkText: "Schedule a visit",
    },
    {
      image: "/rectangle-4.png",
      title: "Connect with a Pastor",
      description:
        "Our pastors are available to provide answers to your questions.",
      linkText: "Get Connected",
    },
    {
      image: "/rectangle-5.png",
      title: "Fellowship",
      description: "Join a community that will help you grow spiritually.",
      linkText: "View Groups",
    },
  ];

  return (
    <section className="w-full py-16 [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.23)_13%,rgba(255,255,255,0.8)_23%,rgba(255,255,255,0.8)_26%,rgba(255,255,255,0.9)_28%,rgba(255,255,255,0.8)_32%,rgba(255,255,255,1)_69%,rgba(255,255,255,1)_94%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-[906px] mx-auto mb-16 relative">
          <div className="absolute w-[120px] h-[59px] bottom-0 left-[211px] bg-[#ffe30f]" />
          <div className="absolute w-[123px] h-[58px] bottom-[60px] right-[156px] bg-[#f59773]" />

          <h2 className="relative [font-family:'Satoshi-Regular',Helvetica] font-normal text-black text-[50px] text-center tracking-[4.00px] leading-[65px]">
            Discover a welcoming community at Zion Church, where faith and love
            light the way.
          </h2>
        </div>

        <p className="max-w-[906px] mx-auto mb-16 [font-family:'Satoshi-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[1.60px] leading-[26px]">
          Whether you're new to faith or seeking a church home, we invite you to
          join us in worship and community."
        </p>

        <div className="flex flex-wrap justify-center gap-16">
          {testimonialCards.map((card, index) => (
            <Card key={index} className="w-[290px] border-none shadow-none">
              <CardContent className="p-0">
                <img
                  className="w-[284px] h-[387px] object-cover mb-6"
                  alt={card.title}
                  src={card.image}
                />
                <h3 className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[1.60px] leading-[26px] mb-4">
                  {card.title}
                </h3>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-black text-[15px] text-center tracking-[1.20px] leading-[26px] px-4">
                  {card.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-center pt-8 pb-0">
                <a
                  href="#"
                  className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-black text-xl text-center tracking-[1.60px] leading-[26px] underline"
                >
                  {card.linkText}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
