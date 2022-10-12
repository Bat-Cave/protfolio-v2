import SectionWrapper from "../components/SectionWrapper";
import vite from "../assets/vitejs.svg";
import react from "../assets/react-2.svg";
import tailwind from "../assets/tailwindcss.svg";
import framer from "../assets/framer-motion.svg";
import netlify from "../assets/netlify.svg";
import daisyui from "../assets/daisyui.webp";
import iconoir from "../assets/iconoir.webp";

const SiteTechnology = () => {
  const technologies = [
    {
      name: "Vite",
      logo: vite,
      url: "https://vitejs.dev/",
      description:
        "An incredibly fast tool for developing and bundling projects",
      version: "3.1.0",
    },
    {
      name: "React",
      logo: react,
      url: "https://reactjs.org/",
      description: "A JavaScript library for building user interfaces",
      version: "18.2.0",
    },
    {
      name: "Tailwindcss",
      logo: tailwind,
      url: "https://tailwindcss.com/",
      description: "A utility-first CSS framework",
      version: "3.1.8",
    },
    {
      name: "Framer Motion",
      logo: framer,
      url: "https://www.framer.com/motion/",
      description: "A production-ready motion library for React.",
      version: "7.5.3",
    },
    {
      name: "Netlify",
      logo: netlify,
      url: "https://www.netlify.com/",
      description:
        "A hosting platform for building, testing, and deploying websites.",
      version: "n/a",
    },
    {
      name: "DaisyUI",
      logo: daisyui,
      url: "https://daisyui.com/",
      description: "A Tailwind CSS component library",
      version: "2.31.0",
    },
    {
      name: "Iconoir",
      logo: iconoir,
      url: "https://iconoir.com/",
      description: "One of the biggest open source icons libraries.",
      version: "5.3.1",
    },
  ];

  return (
    <SectionWrapper>
      <h1 className="text-center text-4xl mb-12">
        This site was build with these{" "}
        <span className="gradient-text font-extrabold">AWESOME</span>{" "}
        technologies:
      </h1>
      <div>
        <h2 className="text-2xl mb-4 stat-value">Core Technologies</h2>
        <table
          className="w-full table table-zebra table-compact border-secondary-focus border-2 rounded-xl border-separate shadow-md shadow-secondary-focus overflow-hidden"
          cellSpacing={0}
        >
          <thead>
            <tr>
              <th className="bg-secondary-focus">Name</th>
              <th className="bg-secondary-focus hidden md:table-cell">
                Useage
              </th>
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
                      <div>
                        <div className="font-bold">{t.name}</div>
                        <div className="text-sm opacity-50 hidden xs:table-cell">
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
    </SectionWrapper>
  );
};

export default SiteTechnology;
