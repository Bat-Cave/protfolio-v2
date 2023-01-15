import { Calendar, LargeSuitcase, PinAlt } from "iconoir-react";

const ExperienceSection = ({ company, ...props }) => {
  const { logo, title, status, dates, name, link, location, description } =
    company;
  return (
    <div className="mb-5 flex" {...props}>
      <div>
        <img src={logo} className="w-12 rounded" />
      </div>

      <div className="w-full space-y-5 ml-5">
        <div className="space-y-1.5">
          <div className="font-medium flex justify-between">
            {title}
            <div className="badge badge-secondary">{status}</div>
          </div>
          <div className="flex justify-between space-x-5">
            <div className="flex gap-5">
              <a href={link} alt={name} className="flex gap-2 link-secondary">
                <LargeSuitcase width={20} />
                <span>{name}</span>
              </a>
              <div className="flex gap-2">
                <PinAlt width={20} />
                <span>{location}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Calendar width={20} />
              <span>{dates}</span>
            </div>
          </div>
          <div className="space-y-2 sm:text-right"></div>
        </div>
        <p className="text-neutral-content">{description}</p>
        <div className="border-b border-gray-200"></div>
      </div>
    </div>
  );
};

export default ExperienceSection;
