import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text = "Get Started" }) => {
  return (
    <div className="min-w-40 px-3 py-2 bg-zinc-200 text-black rounded-full flex items-center justify-between">
      <span className="text-sm font-medium">{text}</span>
      <RiArrowRightUpLine />
    </div>
  );
};

export default Button;
