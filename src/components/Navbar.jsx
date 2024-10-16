import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-3 flex items-center justify-between font-satoshi border-b-[1px] border-zinc-700">
      <div className="left flex items-center  ">
        <img
          className="w-32 h-16"
          src="https://assets-global.website-files.com/6024cb0edb66de5e830d3665/60343177940d0b566d3991b7_og.png"
          alt=""
        />
        <div className="links flex gap-14 ml-20 ">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[3px] h-6 bg-zinc-600"></span>
            ) : (
              <a
                className="text-sm flex items-center gap-1"
                href="#"
                key={index}
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.65em #00FF19" }}
                    className="inline-block w-2 h-2 rounded-full bg-green-400 "
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>

      <Button />
    </div>
  );
};

export default Navbar;
