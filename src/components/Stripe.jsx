const Stripe = ({ url, number }) => {
  return (
    <div className="w-[16.66%] h-20 py-5 border-t-[1px] border-r-[1px] border-b-[1px] flex justify-evenly items-center border-zinc-600">
      <img src={url} alt="" />
      <span className="font-semibold">{number}</span>
    </div>
  );
};

export default Stripe;
