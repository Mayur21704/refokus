import Button from "./Button";

const Product = ({ data, mover, i }) => {
  return (
    <div className="w-full py-24 h-[23rem] text-white border-t-[1px] border-zinc-600">
      <div
        onMouseEnter={() => {
          mover(i);
        }}
        className="max-w-screen-xl mx-auto flex justify-between items-center"
      >
        <h1 className="text-6xl capitalize font-semibold">{data.title}</h1>

        <div className="details w-1/3">
          <p className="mb-10">{data.description}</p>
          <div className="flex gap-8 ">
            {data.live && <Button />}
            {data.case && <Button text="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
