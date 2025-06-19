import Avatar from "./Avatar";
import Contact from "./Contact";
import Summary from "./Summary";

const Introduce = ({ id }) => {
  return (
    <section
      id={id}
      className="w-full bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#1e3a5f] px-6 py-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-white">
          <Summary />
          <Contact />
        </div>
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <Avatar />
        </div>
      </div>
    </section>
  );
};

export default Introduce;
