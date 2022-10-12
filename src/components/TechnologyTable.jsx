import { Link } from "iconoir-react";

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
                        <Link width={24} height={24} className="inline mr-2" />
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
