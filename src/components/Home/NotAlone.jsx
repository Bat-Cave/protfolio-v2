import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import SectionWrapper from "../SectionWrapper";

const NotAlone = () => {
  const [mounted, setMounted] = useState(false);
  const bubbles = [
    {
      url: "https://avatars.githubusercontent.com/u/6751787?v=4",
      name: "Theo Browne",
    },
    {
      url: "https://avatars.githubusercontent.com/u/22392?v=4",
      name: "Jack Herrington",
    },
    {
      url: "https://avatars.githubusercontent.com/u/1500684?v=4",
      name: "Kent C. Dodds",
    },
    {
      url: "https://avatars.githubusercontent.com/u/25749407?v=4",
      name: "Kevin Powell",
    },
    {
      url: "https://avatars.githubusercontent.com/u/10172199?v=4",
      name: "Jeff Delaney",
    },
    {
      url: "https://avatars.githubusercontent.com/u/15989197?v=4",
      name: "Gary Simon",
    },
    {
      url: "https://avatars.githubusercontent.com/u/2922250?v=4",
      name: "Sam Selikoff",
    },
    {
      url: "https://avatars.githubusercontent.com/u/191758?v=4",
      name: "Daniel Shiffman",
    },
    {
      url: "https://yt3.ggpht.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s88-c-k-c0x00ffffff-no-rj",
      name: "w3schools.com",
    },
    {
      url: "https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png",
      name: "developer.mozilla.org",
    },
    {
      url: "data:image/png;base64,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",
      name: "coolors.co",
    },
    {
      url: "https://yt3.ggpht.com/ytc/AMLnZu-Y9qV1iIAkAIMbL7d5tCFpCyXEyDkcGVjptSrbNg=s900-c-k-c0x00ffffff-no-rj",
      name: "replit.com",
    },
    {
      url: "https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631aaf6b1a176ea0525b6983_codewars-logomark.svg",
      name: "codewars.com",
    },
    {
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAA81BMVEUfV2hp2mt3+HpMwk8eVWhp22oAAADM6MslYGhr325v6XJp2GpMw04dVGhWylgPT2PH5Mht4Wv///8aT2guYW43gWhKomk0fGhOx00fWGfA3sQ7a3TR7M6CpZxg2GIdUmgATGKXuamwz7pGtVKhwq9fiIdrko25178ARFx2m5Rexmovcmhk0mrL8sz1//Xs/OwYSmkwgF9DrVQ9nlhJvFBPe35SfoCOsaMAPVg9i2gmZGg/j2l03Ha77buR45JInmne297z8POVlZWn6KgrbGguLi7OzM647bi9vL0ZGRl93n9gYGCtrK3e+N85llo+oVg1jVzGEW+qAAAGVklEQVR4nO2aCVvaShSGQ504WomThFiyQoiBgCtYIS7XrYt2s+3//zX3zIDI1Var3lZCv/fxIcvM+OTNOWcyETUNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU4xRr7Mft7B63fiz1/LHqLDq/spC9wd6Rvdgf7/KKn/+mn47zHulW5a1uLZ+y66yvrZITforbeYizhY2LL1Wq+m6dXjDu3Jo6arJ2vB+UgNFhbENvfbP0eXmMdmt1Ceb6vtWqXa8eXn0T03feK7r+01UTqzasW2fntmbJDc5sTGDbsimfXZq28c162S26ru7pC/Zp/Pz82/stzWr2q2M6a5Ytbf2m/n5j6c2deo+95X+n7B3Vu3Cfk/a8+fbNX3t5NWYkzW9tn0uW97LO3IwS9VtUEg3z6QbhbuklxYnoEMZbOLsiBJhliZzqX1hK7cPW7XSDWpbH2TLR/ti9rT1T7aU+2wf3dY+sj/LG2J/0mdOu0QT1+mXc5tK+6Y2Fbd9/uWUSrs0e9r0cL7c2r64FWslfrG9dXlMTTOoXZJLsduxLk22zKL2LwDtGQDa0J5hbWZIj4dp05iCr8zrXrV6UDEeom1UDqpVrX7/755eKr0513VXe90b2ks/1+72VmnIXK/AL971njtHlN2dQ6m9tHgXQ+39Hbcsx7i94hZ5ZXduSHlZWr98cSdq/bZcHg3ZLWy4jRV35DAnta27rV+8UNpXI9zCzumVr+UJ7fuCfUO7/LWo4a7sPEV7B9qF4m/V/vYU7ddF1a5/f4r296Iu1Iyq+3htd72oDzDGnqJdVGtN647ntAdrF3dGoyzvuY/VLvKaXFt4fJIX+avuyuvy47SLuzSVsAP3cdruwnNf+pO4CvcDtYu7VrnicdEucGEr6ofuw7XdXlFXaGOGC3P5Z4Zf1i5/K3qK00qN7Y60S/dYL15p79ZZoZOcVTTPY+vlkXbp5V0sLo20y+vM87RKYc2Ng11XchVtqu+7KF1FWw3aLew/79RXJ188f43rF8/Vok5rE9pzpR9+nX8TvTRXfG3j3W75imXd0u/F0pfHA1bfFfZdxDAWrllfuI+DyS5GYa3V42uMwe7FmBzw3NcOAAAAAABAwRito9ntI7XDxg3qU5v4HHW97nFjZ7idGDc9MM+RaJrDro+E1xf0GhYEQh55tM9E0Kct66tesnXU1dPUADornL4Ts2HXQNBO7MitCDw6F0zXV0TM8U2CRylvyn8aVUdmmoRNwRzTbHI68ltCBAkP/agdhXmsxY0wElqcDbvmsktOeg0zNFOPMY+68tRhMZ3gWdAMG7Hm8cx7btVJWMBNuu4wSniHghmEJuc8TFNu9rWM+wNqpZ/A4ZIwb4U838tD3iRtZc0bqSmHNPYS1SVjXiZHhFGcqm06oN7tlGfPbfofSJtTkgbxWHsQBIHm+dxPSL3PTSfwebNBd8DJeRhEZCidKIVNPpDpnfKGE3G/GZodp2nyDu0PvCCK6UTLcyInbvCsyflAPLfqJDLavu8H7bG275sDSnCZwv2YtPuU947PWzGLMx7tUU7zvK1JbTlQBrLhteRNStusnfM04RToJGnR7l6epLnwfEoHqo1pQiU5D5vtiSQPaS+m3PU1IbUpiQdcpTUZtana5b7Spq5RWyW5SWVBZiKS2h2Psj3JKfF9qh9H0JBsqmI91G61Wh4ptWKauShVW81YtBuyUBMZ7b09MpKxbAdm2OzTadMMhErySA5MqYAphyOq3jbdvJxyWnh01Al9ZewwkclbOlXI2hbCkJFsdDot0k7SNGlFYdgKTJ6SdpL4vEPFmVFYM6rzlNzMgEntvhwoa7vBE4+KJfU5D2iY30jI3Zc5YE6rdhjKLWnzkFxDNWMnPj2oRDMMO+o480Qut6bTCDPPcDL5TIp5KB/icRrm7X7InYGc0Dk965rqYRDFfV89FIQmsnDatDXW6cg/8LJBJHE6ahMMIpnGzY6Qxx1aasT9PI084eS0qmH0SauTVqTG96OAiajFhBOlucx+tTOINcPrpA05DRjNyJmqxYpEDAPBhERTn4IxddIYHauVmYhpOzyvqTPjgWy4P+yhmuPxkNHvmTprAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgL+Jf81+7ReedwX4AAAAASUVORK5CYII=",
      name: "flexboxfroggy.com",
    },
    {
      url: "https://pbs.twimg.com/profile_images/1114446136302084096/BIu19jPP_400x400.png",
      name: "cssbattle.dev",
    },
  ];

  const getShuffledArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }

  return (
    <SectionWrapper>
      <p className="text-6xl lg:text-9xl gradient-text font-bold py-4 font-philosopher text-center">
        I Wasn't Alone
      </p>
      <div>
        <Marquee
          speed={15}
          gradient={true}
          gradientWidth={100}
          gradientColor={[33, 34, 44]}
          className="w-full flex pt-8 overflow-y-hidden"
          aria-hidden={"false"}
        >
          {getShuffledArray(bubbles).map((c, colInd) => (
            <div
              className="tooltip tooltip-info flex justify-center items-center"
              data-tip={`${c.name}`}
              key={c.name}
            >
              <img
                key={`bubble-col-${colInd}`}
                src={c.url}
                alt={`${c.name} profile picture`}
                className="w-[60px] min-w-[60px] h-[60px] min-h-[60px] sm:w-[100px] sm:min-w-[100px] sm:h-[100px] sm:min-h-[100px] md:w-[150px] md:min-w-[150px] md:h-[150px] md:min-h-[150px] rounded-full mx-1 sm:p-2"
                effect="opacity"
              />
            </div>
          ))}
        </Marquee>
      </div>
      <br />
      <br />
      <div className="card relative w-full shadow-md bg-neutral text-neutral-content text-sm md:text-base p-12 max-w-2xl mx-auto">
        <div className="w-full flex flex-col items-center z-10">
          <p>
            From my first program to now, I've had help along the way. We're
            blessed to live in a time when there is so much information at our
            fingertips. I'm grateful for the websites and developers who have
            created content that have helped me learn how to program!
          </p>
          <br />
          <a href="/heroes" className="btn btn-primary max-w-[300px]">
            My Web Dev Heroes
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NotAlone;
