import fooddel from "../assets/portfolio/fooddel.png"
import chatapp from "../assets/portfolio/chatapp.png";
import realestate from "../assets/portfolio/realestate.png";
import portfolio from "../assets/portfolio/portfolio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fooddel,
      desc: "A food delivery application used to order delisious foods from their favourite restaurants.",
      code: "https://github.com/Pramit30a/Food-Delivery-App",
      demo: "https://food-delivery-app-frontend-zrgl.onrender.com",
    },
    {
      id: 2,
      src: realestate,
      desc: "A real-estate application , which lets the users to look into wide range of properties.",
      code: "https://github.com/Pramit30a/Real-Estate",
      demo: "https://real-estate-bnvb2mloo-pramit-kumar-mandals-projects.vercel.app/",
    },
    {
      id: 3,
      src: chatapp,
      desc: "A social media website , which lets you stay connected with your friends , falily and close ones.",
      code: "https://github.com/Pramit30a/Chat-Application",
      demo: "https://chat-application-6kks.onrender.com/",
    },
    {
      id: 4,
      src: portfolio,
      desc: "I made this portfolio using reactjs and tailwind css and deployed with vercel.",
      code: "https://github.com/Pramit30a/Portfolio",
      demo: "https://portfolio-lyart-six-15.vercel.app/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-slate-100 to-slate-200 w-full md:h-full pt-44"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-gray-500">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, desc }) => (
            <div
              key={id}
              className="shadow-md rounded-lg cursor-pointer duration-200 hover:scale-105"
            >
              <img src={src} alt="" className="rounded-t-md	" />
              <p className="px-4 pt-2">{desc}</p>
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" className="w-1/2 px-6 py-3 m-4">
                  Demo
                </a>
                <a href={code} target="_blank" className="w-1/2 px-6 py-3 m-4">
                  Code
                </a>
              </div>
            </div>
          ))}
          {/* <div className="shadow-md rounded-lg cursor-pointer duration-200 hover:scale-105">
            <img src={jaybhavani} alt="" className="rounded-t-md	" />
            <p className="px-4 pt-2">
              This was a freelancing project for an enterprise called Jaybhavani
              Enterprises.
            </p>
            <div className="flex items-center justify-center">
              <a
                href="https://jaybhavani.in/"
                target="_blank"
                className="px-6 py-3 m-4"
              >
                Demo
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
