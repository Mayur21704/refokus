import { motion } from "framer-motion";

const Marquee = ({ imagesurl }) => {
  return (
    <div className="flex w-full py-8 gap-20 overflow-hidden">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-10 pr-20"
      >
        {imagesurl.map((url, index) => (
          <img className="w-48" key={index} src={url}></img>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 py-10 pr-20"
      >
        {imagesurl.map((url, index) => (
          <img className="w-48" key={index} src={url}></img>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
