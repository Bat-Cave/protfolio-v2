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
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  strokeWidth="1.98"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#fff"
                >
                  <path
                    d="M2.573 8.463l8.659-4.329a.6.6 0 01.536 0l8.659 4.33a.6.6 0 010 1.073l-8.659 4.329a.6.6 0 01-.536 0l-8.659-4.33a.6.6 0 010-1.073z"
                    stroke="#fff"
                    strokeWidth="1.98"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M22.5 13V9.5l-2-1M4.5 10.5v5.412a2 2 0 001.142 1.807l5 2.374a2 2 0 001.716 0l5-2.374a2 2 0 001.142-1.807V10.5"
                    stroke="#fff"
                    strokeWidth="1.98"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>{name}</span>
              </a>
              <div className="flex gap-2 md:text-base text-sm">
                <svg
                  width="20px"
                  height="20px"
                  strokeWidth="1.98"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#fff"
                >
                  <path
                    d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1116 0z"
                    stroke="#fff"
                    strokeWidth="1.98"
                  ></path>
                  <path
                    d="M12 11a1 1 0 100-2 1 1 0 000 2z"
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth="1.98"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span>{location}</span>
              </div>
            </div>
            <div className="flex gap-2 md:text-base text-sm mt-3 md:mt-0">
              <svg
                width="20px"
                height="20px"
                strokeWidth="1.98"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#fff"
              >
                <path
                  d="M15 4V2m0 2v2m0-2h-4.5M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9H3zM3 10V6a2 2 0 012-2h2M7 2v4M21 10V6a2 2 0 00-2-2h-.5"
                  stroke="#fff"
                  strokeWidth="1.98"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
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
