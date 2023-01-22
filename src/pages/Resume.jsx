import profile from "../assets/rico_profile.webp";
import orchard from "../assets/orchard_photo.webp";
import { GitHub, LinkedIn, MailOut } from "iconoir-react";
import ExperienceSection from "../src/components/Resume/ExperienceSection";
import EducationSection from "../src/components/Resume/EducationSection";

const Resume = () => {
  const companies = [
    {
      logo: "https://www.datocms-assets.com/10154/1556724983-cove-icon.png?auto=format&ar=225%3A225&fit=max&ixlib=react-9.0.1&w=1246",
      title: "Front End Developer",
      status: "Full time",
      dates: "August 2021 – Present",
      name: "Cove Security",
      link: "https://www.covesmart.com/",
      location: "Orem, UT",
      description: `As a front-end developer on a small team, I utilized the JAM stack and Gatsby framework to create a seamless user experience. I worked alongside a senior front-end developer, our lead developer, and a backend developer to deliver the best possible outcome. I conducted split testing to understand and determine the preferences of customers and optimize the site's performance. Additionally, I used Storybook to create a component library that made it easy for the design team to review and provide feedback. I was quick to respond to any bugs that arose and worked diligently to resolve them. Furthermore, I ensured that the site was compliant with accessibility standards and helped in improving site performance to provide the best customer experience.`,
    },
    {
      logo: "https://media.glassdoor.com/sqll/653478/crandall-corporate-dietitians-squarelogo-1540365552857.png",
      title: "Junior Developer",
      status: "Part time",
      dates: "May 2021 – August 2021",
      name: "Crandall Corporate Dietitians",
      link: "https://www.consultingrd.com/",
      location: "Mesa, AZ",
      description: `I developed a recipe request system for communities using a variety of technologies including PHP, MySQL, HTML, CSS, and Javascript. Throughout the process, I actively incorporated feedback from the Menus team to ensure the final product met their specific needs and requirements.`,
    },
    {
      logo: "https://play-lh.googleusercontent.com/EoFBFos5OpCmn3kYJj2lMLGaKYVjltgTAPSz1j2X9V-XopBZ_f7K1opruJb_x2blGw",
      title: "Tier I Client Success Advocate/Trainer",
      status: "Full time",
      dates: "June 2020 – March 2021",
      name: "Omadi",
      link: "https://www.omadi.com/",
      location: "Lehi, UT",
      description: `During my time at the company, I assisted customers through both inbound and outbound calls, tracking customer issues through a ticketing system. I also trained new customers on the software, conducting approximately 3-4 training calls per customer. I also developed a web extension to assist with my responsibilities and generated PDF templates for customers using HTML, CSS, and Javascript.`,
    },
    {
      logo: "https://play-lh.googleusercontent.com/rRrkoPQWMdvbHraWLiYxYnimGilcTcTZdwI7HvQZ2Yv7wM9VsKU2J7WmV8zH5wFFimuJ",
      title: "Technical Support Manager",
      status: "Full time",
      dates: "January 2018 - December 2019",
      name: "Alder Security",
      link: "https://www.alder.com/",
      location: "Orem, UT",
      description: `As a Technical Support representative, I assisted customers through both inbound and outbound calls, and trained over 30 new employees. I also improved training material for new employees and was assigned to help struggling employees improve their KPI statistics. Later on, I was promoted to Technical Support Supervisor, where I supervised a team of 6-8 agents and trained them through weekly call reviews. Additionally, I developed a troubleshooting web app that guides agents through troubleshooting alarm system equipment. The app was in use until February of 2022, with an average of 6,000 uses per month in Utah and the Philippines. My last role in the company was Technical Support Manager, where I produced department policies, procedures, reporting systems, and equipment troubleshooting material. I also conducted weekly meetings with company executives and other managers to discuss the state of the call center and identify ways to improve it.`,
    },
  ];

  const schools = [
    {
      logo: "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/devmountain/original.png?1568083750",
      title: "Student Full Stack Web Developer",
      dates: "December 2019 – March 2020",
      name: "Devmountain",
      link: "https://devmountain.com/",
      location: "Lehi, UT",
    },
    {
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAABKVBMVEX///8VN1+DMBoMmtb8uRf+/v/8tgAAl9X8twAJmtYWN18AldSCLhcAmNYAK1cAKlcAL1oAJVR+IgAAJFR8GwAKM1wAktSBKxP4+v3//PYAKFf09Pbw9fv/9+mmqbnh7Pipzuybx+n8vTB/Jgn/8t0oQ2cAH1GYnK/n5+yOlKf/+vH69/V6FQD8uyT9w0u9v8uaVjvL4PO21e7+7tJ8uePLzdX9yWT+04T+4rBEVXU5TXCdX0qJv+WtfG3+2ZbFpJhNp9zu4txxepLc3ONXZIFbrd6wtMH+3qb+z3d8g5qPQyXj08z+5Lj/68m6koSIMxGlcGDUu7D9zGsAFk1fbYb9xVSNRDHFoJHQs6fdyMCSRSadZFWlc2b9z32tg3v91Y2HMQCNPRuNRznMtZ4ZAAAYrUlEQVR4nO1diV/ayNtHMUAIgRCJKCioCIKgiIIWvLgrWo92vfi523b3//8j3pnJPTM50Ljtft58P1vblSP55jnnmWdmAgEfPnz48OHDhw8fPnz48OHDhw8fPnz48OHDhw8f/1FkW63xeLwNkAN/twa/+n7eC0b9x6A+3h52hFJpMZnJZBLxeDwB/l4s/SEUhxWNKGP4xH8GzKBVGRbn4om4JM3RIMUTwlznITco/+pbnR3L2fpkGM3E6cx0ROckKZHo9HPl7K+4TQb72y3KuQdp0UpuNFEKicxw+98yy3wDIr/61s8PcsVSwjU3g76WOrmP19Xl9W4wHA5zfDDYbW7MTjNbH0bfwE7hmIg+tD7W1yx3OZ4PskGWBX/CHIdYri67/Xh23M68lZ0MITMcVz+QYDMchPSCGiBLrts8yLv59LiT1OhF30pRShbHH8Yvzxm46SQhy3Cz4UCy1Vl8n/R0isL4g+LiBkfhpyDMBUfreaSttEuXJ1ZOU5IkQYgjCIIgOftWIPx4G9mi5xybYd6SIM+yPMePNlaJq8KnPY4KFLUEIU6KFtvDfn8bYdJ/aHeK0XhGcJRiov8RHhUQpOko4ocsk+XD3OiAoFgeLhJ3GM+UpGGu3iLuszyo1/vFUtIhCRAy24znIoQ+xg4yRy68YTbHnGCWCEhOFtuVsTE3YfB/MPXtYSYj2JHMdFoe8wucOhDU7DF4uqzdbrmfMdPLRB+23WRe2WzuISqHFbrPlaRtj53Nuo2TMYuS66opQKuTMN5hXGqPZ8i5BuOOYGOQyaG3KWp+ibf2Mibw3Lr8kW0QGzR2UjIuZ5SzPPVWZdE6OxCidS8JLndZupMBvgXGQvBfmEcIc6uQRbaf1DVMWByOdWYYx7XDw5ubm8OttRXjb4EbgUqYayctKEaleMVLhqc0HWVBBGxubBwcbGxsNJsjiKbsZgbtuG4wwrBlkdOtHB4/bi5EQqHIwsLm3tH5zRr+DpDjWWawyYqHappfwkUH/1u3yGFauvlImbalLn3aC4VCCyoigOjC0Wec4/K4mLBi+OAhwy6PE+Q1d4IbVq6kPfRM0dKjr+1BwWEAJPc+7ahvkV1lNrcYp9CDeU3HK4ZMoBHGjFD1JnogU3OoifbE48Uc9QnI/Eh6Csfd4y3ze8sTi+AvFb2T4cgkQpYPchvavZsI9FX1lOITm6zqR4jODyK0cKxoqvrNrTZdT4W2Z4lbg2N503iJ71Jdx4N6J/GinSNf27Tmhyh+Mr9/eZKRaFFfaEMZehLzYcJtUtOlA+wd0F5kftE5qVSxveohXT0RoG2GQjfYV1sIUfBCS9GtrgYNsZBFIlzFHx0zVNyB4JQu3pAaGgqBUHF5eXn0+LgJQIaMCjUoyjL0guHBkkmAbJA7xd/3oNhfHIxpSOs0EcRdTGTz/HBN9p8rK2trazuUD9WLWPYGlTaa6LsunThgxJkJBrlGwMRiImfX0h/OtQVcRUOXNEY4Bh2ami5WPLLCVTm8G83QVFyryIO/RKfsfD3MyUQuXd7DJEkMMaJzi7k38cEA7rmBR/tw18CwjvRHSkyybp7no0lHQ1vOn5CxTY4xonOCVwPEDc5IEQbDpsYl24EuQBJclr7McXBvxfkTypVyFE8jdbwzQ95IkGe5pvpSHRpgouh2zHdoJBg5nuEeWn9gAgQqm5jMxsMSTDcMvIuRpOZKKxlJKFVcP8kVo46GPuMv965fzk6uIPZfb6fXSs1XFmI9SXE0XtVM811Y4TYw5LlTuQY0aEcfZjGFzwYRmqN6oPr19UlMFdIxiHRaTN39c//SU15kYK2HVNJi2SNX2sAIsqyclMKqmHJ9d9ixIli9uKql0/NGxNKF1N3ZtfaWCREtosKDF+zQuGKJN8cKHmrpGx7eD11HQ1/0X0+vUrF5CmKF2olKkRmSMlyse1WGOuCwaKHa4Yzfv0axQSZwXUvT6CGkxTPFGMvkCNHDodN6mDeHfKCl9okZHceakupxvnpizQ9AfFKEOCYZZrwr0mygAobJ0zTfUKg0ZDObahzspez4QSF+DaArPRBKKkW9K+pv4GVElhu9IdTqjlTzMs+iPcH5WOoCvbFcJEQo9D0jiKU0EBw5eHLEila20HT0rOBAcD4mTtE7c3g09DBjQwxZs5YGw11Xk6EQ1d7L7UsVPA99VLi75ZbgfPoKeZpsm8jZhKF3BBU7NCIczAcYxlmK1YuTVEpMXcHIfakyDP1wTXBeUdI6MXM1Vxp4OGNxsASHhKaQv9Rw/tj1fU1EjjL9EwhiR/MzEVmEt042CD95IgeLIlalATrqVUoqMwxik4Z8MLxu/Xb4aKvTk4ImIvEW/OaLZoVH6F0vmBcFOUxBxCPHnZy21eOmoSH8d6YccKFDrgCHh0Esp2GDYaKKYfzA9FVM61lKDNnSXyGTI+0ZJRgTxaeT+9vne4xgTSYoD9BMSGzPyMEeeTSzbRQjCBeWn+rdp8wGVoPuUFPSCBoT6oG+INb+dzGVqdynaQQD2xmcoPSmWvfaFgC1ZLIKRk9BY0hkQbigO9PeWQ33H4Uz+MKWJkI0KJzWkJmJ4v2L3heDRUeVYDkq4fWL5KwZ6c6Xy73NXYDNvUdi9ocJrI7wBhM2HKS4murFPOkeC/fotXMtVtzAmztLFUTx9bln/LgFwcBEwIvBsw4qPm3qMySRUGj36JNRkuB2lptYyAfDYR6vCAeuT2gjhPSr/OqRcokIStiYl/vbHtbUhAWPlEqQHPrOmK99w8uzkVDkGFPWU3O5FDZELW2Y3rFym6Jm0IVX2c7XNiNGJcUA34Fl4D9VglVy1JRwP7RnAke0CZLQAqao6xzLmyeA2SVjZtp7sohtsg0CHKpago3sVVSfTPKPPWkVjAqZcrddEwx8ok8AEXdBhAtz3nZmFbtTU+JKm9Ty4dT8DYU/tVfqhB+dK7l3MrtUeiGyRpsPmttMWFiXUl1N74k6QAfDgjPd0tRoGDoivpwh0hvxWXtpmUzXkq67EyjzI4De3hfKW1e7xqo+K6upaoj3tPQynbp6QfeoPG/VGiiPLxAQzY+oNtVfImO9++aEH8T8SGjz+JD+XuBMWXPIBwMoxRCva4QI06mTr+Yv2FGriKFz4sux9C0maq8wgW2i/OQ+1v+FEzy6sZ4gYbCGRBY1BcmGOMViYEE8eSGaW3c0V4rXSPEqhhI+ZbTixLRoxm2gwAjuKr7FyoYPwqZRPmuI+b0zUdOytJi6n9I+v7agaGkEY/gVy79FTfjgVgZFQkddG6FZRUM029OBcm+io41Xa6a927uaWAADg9r+BQpilJxfD4cmLa0+4TVSg/SZAGXYOwm4qw9hUcJ5/gdkpng/FEi+1fmn6+fv378bMjDyFraoWoqPEA0aCr+iT0RC19namolgyMK96ABOm9I4y3UbdDq0K+6FCIa9AuaiRLOCV4j6oeR6TvvRyFCtKdhjg2PxqrCspu6i74oWLbSk7RULMul/jBrKBFqLhJeJDlxez6yjmw5TeLJVNfC2RBDzdTV1xudIxMTwooZFGKUgo2FA5jIZt8W1FVMqgzs3C+RJQ+SpIygLbO3J/WuyU7u+wxRULgNoYNCY8K1uFDxOk5txMQsLsNokOxP58KnrDHHl0ybslEEmQRbyUSHHCEr10H0us2LqJ6MOZmhAFUVTXxRvOdCnXvbmx+PmI/TaZJ5e62Fvzg7JOOG+wn1odqT2oVAHERF5FBJnqyWAdz8TExWEAOGonnCjM9R/za0Cu46hQkEer2RAcXIj90JEmIp4EhtL4wIMvHNIuGJqZ4m4aYZAWD41VTKQawWZG1HLsEPviqgDiGfk2yiBsDPDVcxKGtlz/UFimtSc1zij+kQMs2LzpABp44mi64sEjDUvZIbf3MoQxAsOb4wCQgyvM9RE1ASGzo+IgQi5BB7pZyOoz48oDN30lCGsNsk1azwrW6Kjv6niGQxA+om2gjD3TgmCJN/M0LUdBgLrxGoLHoREft3FDNQ9Zaa39pX21hxpg7MR1EvPih2SnZyWAGpKjC+0/NsCiD2tUFU4ob7/3RIkxk2RXXpxj3q3p3jTCcpOw81VdfEHDdUTCr/YHcXDUAnOzUoQczQLkQV3aSnCQZAYQrGwrHhA7ctA/199pRUaKTHeguDMEsQdjduxkwwi6KNpUxtnQ+cHZz2pAveEoD6LpzJ8dG+IgXU8JKL/DS+dko0ZDIzv1Fns1DXlmy0IzpDJaMBlGNl1m5gGZF9Dru5iueAB2V1zfUedx6CGQC8JEgwXIufu48XqaRg1YRKrZ4j0tErnl963/G4yVRMe3tSKQCxVCT267kOGI31K6gZX552ak7cLaqcTLcnWCRJzhG9sRfhMzqWRVWhLwIlEYqUzCCHc0rrRFK/xEoWsoNQQL2NCSHC2iXoDPi3gte7ZhEgGDFlPu8bl27SZjJRFhJAJEsOlxdZbu2VuNonpit0ZhLjaDLMsHvZlioopMlQjVPtiqKCN6N9MEM9LkRD3tgLuqnSo+M1RCILh4lJT8za9O7xQeGe3SwfZSyJF37MBDTGpDScM3cdEYko/qLjWsEqRCfTMiVp63ioCIpTJbRZg4fft3UDnlGWbu5/cRQx41Qalvo9+hoOnihSrZ4aWhXSaOlWjE0zgnSTv7aq8iZAUQ4/u8+/VDY5nSX7QFIMbSsx4ialqGhNtHChEq4RL8N3Ls7UZBFPEOHLvTxtduiXC3GZDjhmwbQhKMZayl18gsE1EicU3r7DX9Jq2PDUS+sslRUYeYtC2/wADfn59VaF4VxNT8078iNml6FzCg+b0L0RERKYIW2hcWDcDIwZPjvbRL1iuqyhqdfr8Yp3AqN9ERAn3k0tmVE3X2nqktZiEds9dV2waXbLCL8uU1W3RAYBfmYgSwttMsLpfuzBJ55yyCh5QjBy7jhnrYepGSlBRw2E1RXVSiBaRx2TGb9ov8EzEE/otiq9BFC9d1b+hnp5yFvvwAFsMN13VwclOoNKbNLRXm4/dYb/bOaZZIuz1OrpxjIvyE0ajfZqzAX+44KjhLAdiBlsua2+crufVjQtc4Vacj/0kbvCGzNwUj/roVLVRr34AiBBjYZ6VC4y0XZQwEKsn4nC568ESx4VH7iclA9WfsfnY/ygv/KBaImq9tOoZMpMMMOs8ud2QwpjlnfxNmWjlQmsnGkD32bB9edIE2GtEH1RvUTsSEcfI3idXDmf1NMjJIYIS/YFLbaqaSpHmGK9XSB30rlEYFRBkii70FDakWlQNVj7vWuy6AVu/Lp2tESCPdv1iqQzhxm2jAyufShRkEnKQyCuPK8w3aUuOlrEvQr04lmWRtUsLPZU5HtPS1OrFxfeLiwstT2mMlmz2VAKaekr3qeWSMGdYdy4tqltbNNEKOVYVIv4xzNOiXn+bus/hozVFMJwKXX7B5Pi1lhIharWTr0oCkR8tWW79BbhzS13qPorlfmYRbqwHt9hLljpau2+eQzoBV6tyzv0BqN3PhiDa3MeSIZTjnlG7mFt96jYtzt/L4z2mMeJk90kLHEiMzQZUVex2s/XtyqTfn0y26wbBLI+0KQPzan8C8OtQT3jsb7tnsPN5wZbiof511VfT1HSsIJ71FIrdMEpRWfoeYCBudE/zuk3ZCmadUxfmsKj/2PbNqJnDHAdJrP0IWVM07HQw/RsvK8UKIA2UZ2Ia3SXegh66Vxao6im2g4ZhDsfAorGk+ywHGQYC/6A6UM2eIJDiuZUUQ3+p7zGN1nXUXtW6C1DUsIWSKiTDS7ysq0YQAlrWVsfx6I8dQ6XpnWhRIbH2g5rb6BPfvX2LDnW9vYBpNOn1RZk1MlF5y0/DpllkWrasrXZAiZLF/kXKXc0jgnbVV50iCItECfx4Rbn8C70wP4/VrvPNIGcVFdWbDssb1DJ6EqDtWSkrO2fUA9rmNwRB0XL+w4wvjyZj1Ldn6r3SV8jLIjQ9vvwGh1oYLM2RlZPVJX50ekDbUZlpYrUtu8WN17JXKHx3RxDkb8fqiiAgzR+KelYviHWAJkeDGQCz3uVs98RUXCTcfDAM91Q+aDTy+fzqKvjROIBajs/0jCzvtxdDDz69736b5J2bb5twrdOePMQHOnP9SvQtGfndvRjJoZ/LjRFvMSSW7xj+4VGzP6TJyYbbhb/FHw0LO+fCliJUVHRe7M0yUF47vLnZUp1L9Va0W5yb/kkvLuVhHm7DEWMh/6COMOG0eZN6jYC+dEi8nb0SIH/g69+2S3MLFv0FAMsHoyXOaqgxG9ig5V3KcRB1Us3EUPFr1/t22gke3L2V7qOP50+7DqHRHXjW8kbVtlRaL5wDQ7RownZ7iph4W3Vo7lptwLjxbobWElTXJ8ZE23kQGnr2xmfYnMLi+SjIA6dq53HeJ8GpOq8cE3v4lR3opey1M5Y6ca32+Y0uMEdsv55ZCFpLsHenPe8n53xN/9hZzGFfg7R4McsO/QzgyClu1ToHsIblF1dfNSsq7EOGTs8cvn59VrCXHvgyeXcYJrByc378mb7QG8My4AhCB1oqPCM96zBhWl6Tvrt2o6IvJyl8yQohvhpcIQm/6steKATSgs1vn+0rccpl8zB0cLMSZDmbGptxG5tY7dZJra7PUvRlyQbEUvuKx1o5UgsegGRo7/zGxSwV0wCxgwvP4lk561QtgPU+iE8v2irhgNZTpybzvWfDfhXW2jmvrlM1r12A67x3N7+dHzoq7HJ+vdkFiSjc/NqeJy+3/9mOeb+a2leA71Ocg2GwgvqQe89/ivZhT/4C8V5zVuSsPxLlwt7RX+efbtZ2VjSQt7UKSQaRuqK2d3oxBxWtnNZtYEts0FYMuEOdXuynRCfLQ8/n6qv2bGgrhZVxFtRYwHR3dw9gd3eTPonM5BvAt8JaPc9SRQm7jZwXbUzxZDJWEGt39xfT6TXE9OvZfirlQnZQenfG2HBsV6vSJYoYY93UxlkywBLIcgkMneDcMaucTgNGEYAcNzpYdnCMDL0DKQYEKcIN+gpwoz4X5OBzmT8z+ShXBBWaDu3iy6urjfXT5qiLhkzIy3ZH8PAdV5kEsQ5Mu+VYzFkrVRQKZ5hiH9rUjM30InsumwCWl/Mq3HGDYAIv1Da5mVCo3ZOJ0OFjyJkjMMdvbhpUGcqmUq44ovKvi+2WbKAXePFr7ny53AQkredwQpuXLlqNGP0nYz40xaUYq/sudsyypCde6cpJXnBn6/OlcnABhKyScHv/yO7e0fmhq9aGt3dvqZ/vPblzJCTS4t2zcw67tnX45fzyG4wJCwvg57dv518cAv57SWGw6Bd3El6htv9iygvegVa/KAhCtF2pf8iZdj3aig17dunU39+1bUHfd3UG7kItNx1I8YTUGXu1KazhAtV7pyGQmZ5YeHXqVpoFFWPTiJTpeLK/NoYLhxKEkZ349+3MNQ474I13UtLTnfAg4MKNe5s9XHXNFGtXz56yCwTGROfk3B+ent2DACh+PUml7arUcMfh++eexx6OtjfzXOYjlBRY4vXJPD2xhtnp/D9n0577RSNusR2nnKP1x4edndl72a+BsVFaTkThdtgFUUzVxP3nqYdOxYAJuaUDPJnoQ66lYnrx/eTq512tlvr58+rkz4uXqbmW4WazUZfIDim7o89lPPcxBKo6PvIyrQ7tYKJE/+PP6HUUkScy3Kae1pd48Ow8G0fQrzLwJpsqP5CbpwHEh/8ON2tkS6V2/d03wWzHqcf0Zfq/ml8g2xGkeLv+rqMumFabZn3Qv/ySM7LNGADTkZJDmGy85WnDlvO+xdl10H9656PfjAHcrUdKWp9fZ4/yBPUSUg6BTcIVgr+Wn3z1LDrtSkoUx7NnHK0+3fjgYVmenbzwbihHhUmZYmUAjdHQYGbxCeXJ1B8sjwCNt/+t89sdASuzfbknV0okhrms4QWSof6LQcXmdOnMvxDeZ8JYPalUSiwODQe5WomwlWuX4HGDlLPqwK+EeP1XWx8Bw4GgUkIq9usDKxEwg9akIySsT+CVMg+yMf8eFFU/nu0bDoCUhKTU7k/G5XI2q4VIJpvNDnKTYdT+CGWhOP49mBGoR00eQxLimVK8OHyoVCrb29uVSn9YFEoJwf5Ac6n0Ied8e4Nsf5E0K0mKxxOJBDyu3fnAemmx7fkJ2J6iRRvRRa1OuyboJdteHY31Ycjm8OMRXUNKtHO/WWygolwpGVNLd7KbiwrJ6Pi/QA/6v+y2ZDi/246h+poUTz54Xxr8GCAPn821M641VRIynUrZMC32e0ONiq1h0fIAbyOEePGh9fsGBgq0poHyuF1K2oUGILqSMKn/p9hhWB5XOpkkEQAlmAQkFzuT3G8zYng7stk6TGFADr6YgPE+s5iMRzvDfmWc/S84TZfIlgetVgslbLlWazAoe3Va6a+H9WL3/4DD9OHDhw8fPnz48OHDhw8fPnz48OHDhw8fPnz48PH/B/8HScDLwjY1qjoAAAAASUVORK5CYII=",
      title: "Mortuary Science",
      dates: "June 2017 - August 2017",
      name: "Salt Lake Community College",
      link: "http://www.slcc.edu/",
      location: "Salt Lake City, Utah",
    },
  ];

  const skills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Nodejs",
    "Responsive Web Design",
  ];

  const experienceWith = [
    "PostgreSQL",
    "PHP",
    "GraphQL",
    "Figma",
    "E-commerce",
    "SSR",
    "Netlify",
    "Github",
    "TypeScript",
    "AWS",
    "SCSS",
    "Tailwind",
    "Python",
  ];

  return (
    <div className="w-full max-w-[1280px] min-h-[calc(100vh-76px)] flex justify-center items-center p-3 pb-16 mt-[76px] mx-auto">
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-5">
          <div className="card">
            <div
              className="h-32 bg-cover bg-center"
              style={{
                backgroundImage: `url(${orchard})`,
              }}
            ></div>
            <div className="card-body p-0 bg-neutral shadow flex-row justify-between">
              <div className="p-7 relative -mt-10 pr-2 md:pr-7">
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                    <img src={profile} alt="Avatar" className="user-photo" />
                  </div>
                </div>
                <div className="text-lg font-semibold mb-1.5">Rico Hancock</div>
                <div className="text-sm text-slate-300">
                  Front-End Developer
                </div>
              </div>
              <div className="space-y-2 px-7 py-3 pl-2 md:pl-7">
                <div className="flex flex-col items-end">
                  <div className="text-slate-300 text-xs">Location</div>
                  <div className="font-medium text-lg text-right text-neutral-content">
                    Utah
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-slate-300 text-xs">Experience</div>
                  <div className="font-medium text-lg text-right text-neutral-content">
                    3+ years
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-neutral shadow-xl">
            <div className="card-body gap-6">
              <h2 className="card-title">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="badge badge-lg badge-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-neutral shadow-xl">
            <div className="card-body gap-6">
              <h2 className="card-title">Experience with</h2>
              <div className="flex flex-wrap gap-3">
                {experienceWith.map((experience) => (
                  <span
                    key={experience}
                    className="badge badge-lg badge-primary"
                  >
                    {experience}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="card bg-neutral shadow-xl">
            <div className="card-body gap-6">
              <h2 className="card-title">Awards & Accomplishments</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="text-slate-300">
                    <p className="font-bold">Eagle Scout Award</p>
                    <i>Boy Scouts of America</i>
                  </div>
                  <div className="text-right text-neutral-content">
                    August 2013
                  </div>
                </div>
                <div className="border-t border-gray-200 my-5"></div>
                <div className="flex justify-between">
                  <div className="text-slate-300">
                    <p className="font-bold">LDS Mission</p>
                    <i>Rancho Cucamonga California Mission</i>
                  </div>
                  <div className="text-right text-neutral-content">
                    September 2014 - 2016
                  </div>
                </div>
                <div className="border-t border-gray-200 my-5"></div>
                <div className="flex justify-between">
                  <div className="text-slate-300">
                    <p className="font-bold">Certificate of Completion</p>
                    <i>Devmountain</i>
                  </div>
                  <div className="text-right text-neutral-content">
                    March 2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5 lg:col-span-2">
          <div className="card bg-neutral">
            <div className="p-7 card-body">
              <h2 className="card-title">About me</h2>
              <p className="text-neutral-content mb-5 text-sm md:text-base">
                I was raised in southeast Arizona in a small town. My interests
                during my youth included constructing various projects, playing
                soccer, and playing drums. Prior to discovering my passion for
                programming, I explored various career paths such as
                architecture, teaching, and mortuary science. However, I
                ultimately found that web development offered the opportunity to
                apply my passion for building to the digital realm.
              </p>

              <div className="flex flex-col space-y-4">
                <a
                  href="mailto:richardl@hancock1.com?subject=I'd%20like%20to%20get%20in%20touch"
                  target="_blank"
                  className="link link-secondary flex items-center gap-2"
                >
                  <MailOut />
                  <span>richardl@hancock1.com</span>
                </a>

                <div className="border-t border-gray-200 my-5"></div>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/richard-l-hancock"
                      className="social-link-hover"
                    >
                      <LinkedIn />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Bat-Cave"
                      className="social-link-hover"
                    >
                      <GitHub />
                    </a>
                  </li>
                  <li>
                    <a href="#0" className="social-link-hover">
                      <i className="bx bxl-github text-2xl"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card bg-neutral">
            <div className="p-7 card-body">
              <h2 className="card-title">Experience</h2>
              {companies.map((company) => (
                <ExperienceSection company={company} key={company.name} />
              ))}
            </div>
          </div>
          <div className="card bg-neutral">
            <div className="p-7 card-body">
              <h2 className="card-title">Education</h2>
              {schools.map((school) => (
                <EducationSection school={school} key={school.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
