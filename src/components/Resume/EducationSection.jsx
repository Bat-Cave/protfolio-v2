import { Calendar, GraduationCap, PinAlt } from "iconoir-react";

const EducationSection = ({ school, ...props }) => {
  const { logo, title, dates, name, link, location } = school;
  return (
    <div className="mb-5 flex md:flex-row flex-col" {...props}>
      <div>
        <img src={logo} className="w-12 rounded" />
      </div>

      <div className="w-full space-y-5 md:ml-5">
        <div className="space-y-1.5">
          <div className="font-medium flex justify-between">{title}</div>
          <div className="flex justify-between md:space-x-5 md:flex-row flex-col">
            <div className="flex gap-2 md:gap-5 justify-between md:justify-start">
              <a
                href={link}
                alt={name}
                className="flex gap-2 link-secondary md:text-base text-sm"
              >
                <GraduationCap className="min-w-[20px]" />
                <span>{name}</span>
              </a>
              <div className="flex gap-2 md:text-base text-sm">
                <PinAlt width={20} className="min-w-[20px]" />
                <span>{location}</span>
              </div>
            </div>
            <div className="flex gap-2 md:text-base text-sm mt-3 md:mt-0">
              <Calendar width={20} className="min-w-[20px]" />
              <span>{dates}</span>
            </div>
          </div>
          <div className="space-y-2 sm:text-right"></div>
        </div>
        <div className="border-b border-gray-200"></div>
      </div>
    </div>
  );
};

export default EducationSection;
