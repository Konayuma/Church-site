import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const FrameByAnima = (): JSX.Element => {
  const navItems = [
    { label: "About", href: "#" },
    { label: "Programmes", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <header className="w-full py-10 flex items-center justify-between px-16">
      <div className="flex items-center gap-2">
        <img
          className="w-[99px] h-[74px] object-cover"
          alt="Zion Church Logo"
          src="/image--12--removebg-preview-1.png"
        />
        <div className="[font-family:'TAN_-_PEARL-Regular',Helvetica] font-normal text-black text-3xl tracking-[2.40px] leading-[35px]">
          Zion Church
        </div>
      </div>

      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex gap-12">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                href={item.href}
                className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-black text-2xl tracking-[1.92px] leading-[35px]"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button
        variant="outline"
        className="rounded-[20px] border-[#f59773] text-[#ce7957] h-14 px-6 [font-family:'Inter',Helvetica] font-normal text-xl tracking-[0] leading-5"
      >
        Get Connected
      </Button>
    </header>
  );
};
