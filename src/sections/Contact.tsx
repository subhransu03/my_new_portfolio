import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-6 md:px-10 rounded-3xl text-center">
          {/* Responsive Heading */}
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl">
            Let&apos;s create something amazing
          </p>

          {/* Responsive Paragraph */}
          <p className="text-sm md:text-base lg:text-lg mt-2">
            Ready to bring you an amazing experience about web apps
          </p>

          {/* Responsive Button */}
          <button className="text-white border border-gray-900 bg-gray-900 inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl text-sm md:text-base lg:text-lg">
            <span>Contact me</span>
            <ArrowUpRightIcon className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};