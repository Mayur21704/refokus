import { motion } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";

const Card = ({ width, start, para, hover = false }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover === true && "#7542FF" ,padding:"25px"}}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-64 flex flex-col justify-between `}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center  ">
          <h3>Heading</h3>
          <MdArrowForwardIos />
        </div>

        <h1 className="text-4xl font-medium mt-10">Heading this is</h1>
      </div>

      <div className="down w-full mt-52">
        {start === true && (
          <>
            <h1 className="text-8xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] mt-5 ">
              Contact us
            </button>
          </>
        )}

        {para === true && (
          <p className="text-sm text-zinc-500 font-medium ">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
