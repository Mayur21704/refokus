const Footer = () => {
  return (
    <div className="max-w-screen-xl py-10 flex gap-28 mx-auto">
      <div className="basis-1/2">
        <h1 className="text-[11.7rem] font-medium leading-none tracking-tight">
          Refokus.
        </h1>
      </div>
      <div className="basis-1/2 flex gap-2">
        <div className="basis-1/3 ">
          <h4 className="mb-9 text-zinc-500">socials</h4>
          {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
            <a key={index} className="block text-zinc-600 capitalize">
              {item}
            </a>
          ))}
        </div>
        <div className="basis-1/3 ">
          <h4 className="mb-9 text-zinc-500">sitemap</h4>
          {["Home", "Work", "Careers", "Contact"].map((item, index) => (
            <a key={index} className="block text-zinc-200 capitalize">
              {item}
            </a>
          ))}
        </div>
        <div className="basis-1/2 flex flex-col items-center">
          <p className="text-right">Get insights and updates on branding, websites and growth.</p>
          <img
          className="w-64 mt-14 "
            src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
