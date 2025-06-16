import avatar from "../assets/1000004375 (1).jpg";

const Avatar = () => {
  return (
    <div className="relative w-60 h-60">
      <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
      <img
        src={avatar}
        alt="Avatar"
        className="relative w-full h-full object-cover rounded-full border-4 border-cyan-400 shadow-xl hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};

export default Avatar;
