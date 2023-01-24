const TechnologyTable = ({ header, technologies }) => {
  return (
    <div>
      <h2 className="text-2xl mb-4 stat-value">{header}</h2>
      <table
        className="w-full table table-zebra table-compact border-secondary-focus border-2 rounded-xl border-separate shadow-md shadow-secondary-focus overflow-hidden"
        cellSpacing={0}
      >
        <thead>
          <tr>
            <th className="bg-secondary-focus">Name</th>
            <th className="bg-secondary-focus hidden md:table-cell">Useage</th>
            <th className="bg-secondary-focus">Version</th>
          </tr>
        </thead>
        <tbody>
          {technologies.map((t, i) => {
            return (
              <tr key={`core-technology-${i}`}>
                <td className="w-4/12 pl-3 md:pl-4">
                  <a
                    href={t.url}
                    target="_blank"
                    className="flex items-center space-x-3"
                  >
                    {t.logo && (
                      <div
                        className="tooltip tooltip-right tooltip-secondary"
                        data-tip={`${t.name}`}
                      >
                        <img
                          src={t.logo}
                          alt={`${t.name} Logo`}
                          className="w-7 lg:max-w-[3rem] lg:min-w-[3rem] md:w-9 md:min-w-[2.25rem]"
                          width={48}
                          height={48}
                        />
                      </div>
                    )}
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-sm opacity-50 hidden xs:table-cell whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
                        <svg
                          width="20px"
                          height="20px"
                          strokeWidth="1.98"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#f8f8f2"
                          className="mr-2 inline"
                        >
                          <path
                            d="M14 11.998C14 9.506 11.683 7 8.857 7H7.143C4.303 7 2 9.238 2 11.998c0 2.378 1.71 4.368 4 4.873a5.3 5.3 0 001.143.124"
                            stroke="#f8f8f2"
                            strokeWidth="1.98"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10 11.998c0 2.491 2.317 4.997 5.143 4.997h1.714c2.84 0 5.143-2.237 5.143-4.997 0-2.379-1.71-4.37-4-4.874A5.304 5.304 0 0016.857 7"
                            stroke="#f8f8f2"
                            strokeWidth="1.98"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        {t.url}
                      </div>
                    </div>
                  </a>
                </td>
                <td className="w-full lg:w-7/12 text-sm lg:text-base hidden md:table-cell">
                  <p className="break-all">{t.description}</p>
                </td>
                <td className="w-1/12">
                  <code>{t.version}</code>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TechnologyTable;
