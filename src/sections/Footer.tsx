import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Linkedin",
    href: "#",
  },
  {
    title: "GitHub",
    href: "#",
  },
  {
    title: "Mail",
    href: "#",
  },
  {
    title: "WhatsApp",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      {/* Background Gradient */}
      <div className="absolute h-[200px] sm:h-[300px] md:h-[400px] w-full max-w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      {/* Footer Content */}
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
          {/* Copyright Text */}
          <div className="text-white/40 text-center">&copy; 2025 All rights reserved</div>

          {/* Footer Links */}
          <nav className="flex flex-col items-center gap-2 sm:gap-4 md:flex-row md:gap-6 lg:gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-2 hover:text-emerald-300 transition-colors duration-300"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};