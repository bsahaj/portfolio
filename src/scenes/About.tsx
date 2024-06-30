import { motion } from "framer-motion";
import {
  IconNodejs,
  IconMongodb,
  IconLogoPython,
  IconLogoCss3,
  IconHtml5,
  IconLogoDocker,
  IconTypescript,
  IconBxlPostgresql,
  IconLogoJavascript,
  IconJava,
  IconTailwind,
  MysqlIcon,
  IconReact,
  IconSpring,
  IconGithub,
} from "../icons";
import Reveal from "../components/Reveal";
import { ABOUT } from "./constants";

const About = () => {
  const icons = [
    <IconNodejs key="nodejs" />,
    <IconMongodb key="mongodb" />,
    <IconLogoPython key="python" />,
    <IconLogoCss3 key="css3" />,
    <IconHtml5 key="html5" />,
    <IconLogoDocker key="docker" />,
    <IconTypescript key="typescript" />,
    <IconBxlPostgresql key="postgresql" />,
    <IconLogoJavascript key="javascript" />,
    <IconJava key="java" />,
    <IconTailwind key="tailwind" />,
    <MysqlIcon key="mysql" />,
    <IconReact key="react" />,
    <IconSpring key="spring" />,
    <IconGithub key="github" />,
  ];

  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className="mb-96 flex flex-col items-center p-8">
      <Reveal>
        <h1 className="text-neutral-300 font-semibold text-7xl">About</h1>
      </Reveal>
      <Reveal>
        <div className="text-neutral-300 flex flex-col gap-4 text-2xl mt-4 p-2">
          {ABOUT.map((paragraph: string, index) => (
            <motion.p key={index} variants={variants}>
              {paragraph}
            </motion.p>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <h4 className="text-neutral-400 text-2xl">Techology Stack:</h4>
      </Reveal>
      <Reveal>
        <p className="text-neutral-400">
          Java/J2EE, Python, JavaScript/TypeScript, HTML/CSS, Node.js, Express,
          React.js, RESTful Services, MySQL, MSSQL, Postgres SQL, MongoDB,
          NoSQL, Firebase, Docker, Git.
        </p>
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-5 gap-4 p-4">
          {icons.map((icon, index) => (
            <div key={index} className={`icon-${index + 1}`}>
              {icon}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default About;
