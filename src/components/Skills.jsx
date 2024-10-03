import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import typescript from "../assets/typescript.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import figma from "../assets/figma.png";
import python from "../assets/python.png";
import mysql from "../assets/mysql.png";
import java from "../assets/java.png"

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nodejs,
      title: "Nodejs",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: mongodb,
      title: "Mongodb",
      style: "shadow-green-400",
    },
    {
      id: 10,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 11,
      src: mysql,
      title: "MySql",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: java,
      title: "Java",
      style: "shadow-blue-500",
    }
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-slate-200 to-slate-100 w-full h-full pt-32"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-600 p-2 inline">
            Skills
          </p>
          <p className="py-6 text-gray-500">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
