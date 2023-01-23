import { Calendar, LargeSuitcase, PinAlt } from "iconoir-react";

const ExperienceSection = ({ company, ...props }) => {
  const { logo, title, status, dates, name, link, location, description } =
    company;
  return (
    <div className="mb-5 flex md:flex-row flex-col" {...props}>
      <div>
        <img src={logo} className="w-12 rounded" />
      </div>

      <div className="w-full space-y-5 md:ml-5">
        <div className="space-y-1.5">
          <div className="font-medium flex justify-between">
            {title}
            <div className="badge badge-secondary min-w-[max-content]">
              {status}
            </div>
          </div>
          <div className="flex justify-between md:space-x-5 md:flex-row flex-col">
            <div className="flex gap-2 md:gap-5 justify-between md:justify-start">
              <a
                href={link}
                alt={name}
                className="flex gap-2 link-secondary md:text-base text-sm"
              >
                <LargeSuitcase width={20} className="min-w-[20px]" />
                <span>{name}</span>
              </a>
              <div className="flex gap-2 md:text-base text-sm">
                <PinAlt width={20} className="min-w-[20px]" />
                <span>{location}</span>
              </div>
            </div>
            <div className="flex gap-2 md:text-base text-sm mt-3 md:mt-0">
              <svg
                width="20px"
                height="20px"
                stroke-width="1.98"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#fff"
              >
                <path
                  d="M15 4V2m0 2v2m0-2h-4.5M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9H3zM3 10V6a2 2 0 012-2h2M7 2v4M21 10V6a2 2 0 00-2-2h-.5"
                  stroke="#fff"
                  stroke-width="1.98"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span>{dates}</span>
            </div>
          </div>
          <div className="space-y-2 sm:text-right"></div>
        </div>
        <p className="text-neutral-content text-sm md:text-base">
          {description}
        </p>
        <div className="border-b border-gray-200"></div>
      </div>
    </div>
  );
};

export default ExperienceSection;
