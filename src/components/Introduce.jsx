import Avatar from "./Avatar";
import Contact from "./Contact";
import Summary from "./Summary";

const Introduce = () => {
  return (
    <section id="home" className="w-full bg-[#04152d] px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <Summary />
          <Contact />
        </div>
        <Avatar />
      </div>
    </section>
  );
};

export default Introduce;
