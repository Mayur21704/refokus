import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
  const products = [
    {
      title: "Arquitel",
      url: "",
      description:
        "We've had a ton of fun creating a new website for Cula! This time, we immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      url: "",
      description:
        "We created a robust website that blends top notch design and facilitates dynamic content to the requirements of 74 locations, all powered by Webflow’s modern CMS",
      live: true,
      case: true,
    },
    {
      title: "BCG Platinion",
      url: "",
      description:
        "We created a robust website that blends top notch design and facilitates dynamic content to the requirements of 74 locations, all powered by Webflow’s modern CMS, giving the BCG Platinion",
      live: true,
      case: false,
    },
    {
      title: "Sevdesk",
      url: "",
      description:
        "We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
      live: true,
      case: true,
    },
    {
      title: "Layout Land",
      url: "",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-20 relative">
      {products.map((elem, index) => (
        <Product key={index} data={elem} mover={mover} i={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window overflow-hidden absolute w-[32rem] h-[23rem] left-[45%] "
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full  "
          >
            <video autoPlay muted src="../../vids/vidSix.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full  "
          >
            <video autoPlay muted src="../../vids/vidThird.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full  "
          >
            <video autoPlay muted src="../../vids/vidFour.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full  "
          >
            <video autoPlay muted src="../../vids/vidSecond.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full  "
          >
            <video autoPlay muted src="../../vids/vidFirst.webm"></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
