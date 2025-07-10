import { CardSpotlight } from "./card-spotlight";
import { BiSolidPhoneCall, BiLogoGmail } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";

const CardSpotlightDemo = () => {
  return (
    <CardSpotlight>
      <div className="flex flex-col items-center  space-y-4 text-amber-400 w-120 ">
        <div className="flex z-10 w-full">
          <BiSolidPhoneCall
            size={40}
            className="bg-gradient-to-bl from-amber-500 to-pink-700 rounded-full p-1 hover:scale-110 transition"
            color="black"
          />
          <h1 className="text-2xl font-semibold  ml-3">+91 73734 91535</h1>
        </div>
        <div className="flex z-10 w-full">
          <BiLogoGmail
            size={40}
            className="bg-gradient-to-bl from-amber-500 to-pink-700 rounded-full p-1 hover:scale-110 transition"
            color="black"
          />
          <h1 className="text-2xl font-semibold  ml-3">
            sukantravi005@gmail.com
          </h1>
        </div>
        <div className="flex z-10 w-full">
          <ImLocation2
            size={40}
            className="bg-gradient-to-bl from-amber-500 to-pink-700 rounded-full p-1 hover:scale-110 transition"
            color="black"
          />
          <h1 className="text-2xl font-semibold  ml-3 flex-1">
            1/A1, Pothanur, Paramathi Velur, Namakkal, Tamil Nadu 638181
          </h1>
        </div>
      </div>
    </CardSpotlight>
  );
};

export default CardSpotlightDemo;
