import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div className="flex overflow-x-clip relative">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
      {/* Toolbox items container */}
      <div
        className={twMerge(
          "flex [mask-image: linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
          className
        )}
      >
        <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
          {[...new Array(2)].map((_, index) => (
            <Fragment key={index}>
              {items.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-2 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                >
                  <TechIcon component={item.iconType} />
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </Fragment>
          ))}

        </div>
      </div>
    </div>
  );
};