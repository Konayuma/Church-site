import { FacebookIcon, InstagramIcon } from "lucide-react";
import React from "react";

export const JoinUsByAnima = (): JSX.Element => {
  // Footer navigation data organized by sections
  const footerNavigation = {
    discover: {
      title: "Discover",
      links: [
        { name: "About", href: "#" },
        { name: "Beliefs", href: "#" },
        { name: "History", href: "#" },
      ],
    },
    join: {
      title: "Join",
      links: [
        { name: "Services", href: "#" },
        { name: "Events", href: "#" },
        { name: "Connect", href: "#" },
      ],
    },
    grow: {
      title: "Grow",
      links: [
        { name: "Sermons", href: "#" },
        { name: "Ministries", href: "#" },
        { name: "Give", href: "#" },
      ],
    },
    leaders: {
      title: "Leaders",
      links: [
        { name: "Pastors", href: "#" },
        { name: "Elders", href: "#" },
      ],
    },
  };

  return (
    <footer className="w-full bg-white">
      <div className="relative py-16 bg-[url(/zion.png)] bg-cover bg-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Discover Section */}
            <div>
              <h3 className="font-normal text-xl text-black mb-6 font-['TAN_-_PEARL-Regular',Helvetica]">
                {footerNavigation.discover.title}
              </h3>
              <ul className="space-y-8">
                {footerNavigation.discover.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-['Inter',Helvetica] font-normal text-black text-xl"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Join Section */}
            <div>
              <h3 className="font-normal text-xl text-black mb-6 font-['TAN_-_PEARL-Regular',Helvetica]">
                {footerNavigation.join.title}
              </h3>
              <ul className="space-y-8">
                {footerNavigation.join.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-['Inter',Helvetica] font-normal text-black text-xl"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Grow Section */}
            <div>
              <h3 className="font-normal text-xl text-black mb-6 font-['TAN_-_PEARL-Regular',Helvetica]">
                {footerNavigation.grow.title}
              </h3>
              <ul className="space-y-8">
                {footerNavigation.grow.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-['Inter',Helvetica] font-normal text-black text-xl"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leaders Section */}
            <div>
              <h3 className="font-normal text-xl text-black mb-6 font-['TAN_-_PEARL-Regular',Helvetica]">
                {footerNavigation.leaders.title}
              </h3>
              <ul className="space-y-8">
                {footerNavigation.leaders.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-['Inter',Helvetica] font-normal text-black text-xl"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-8 mt-16 mb-8">
            <a href="#" aria-label="Facebook">
              <FacebookIcon className="w-[52px] h-[52px]" />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon className="w-[52px] h-[52px]" />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                className="w-[51px] h-[51px]"
                alt="Twitter"
                src="/clip-path-group.png"
              />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8">
            <p className="font-['Satoshi-Regular',Helvetica] font-normal text-black text-xl tracking-[0.20px] leading-[26px]">
              © 2025 Zion Church. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
