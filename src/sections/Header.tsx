export const Header = () => {
  return(
  <div className="flex justify-center items-center sticky top-3 z-50    ">
    <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 rounded-full backdrop-blur ">
      <a href="#" className="nav-item">Home</a>
      <a href="#" className="nav-item">About</a>
      <a href="#" className="nav-item">Skills</a>
      <a href="#" className="nav-item">Certificates</a>
      <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70  hover:text-green-600 ">Contact</a>
    </nav>
  </div>
  );
};
