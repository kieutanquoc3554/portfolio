import avatar from "../assets/1000004375 (1).jpg";

const Avatar = () => {
  return (
    <div className="relative w-60 h-60 mb-12 md:mb-0">
      <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl"></div>
      <img
        src={avatar}
        alt="Avatar"
        className="relative w-full h-full object-cover rounded-full border-4 border-cyan-500 shadow-lg"
      />
    </div>
  );
};

export default Avatar;
