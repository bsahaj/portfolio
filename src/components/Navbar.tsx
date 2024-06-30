const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-neutral-50 font-bold">Sahaj Boggavaram</h1>
      <div className="text-neutral-500 flex gap-4">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
        <a href="https://www.linkedin.com/in/sahaj-boggavaram/">LinkdIn</a>
        <a href="https://github.com/bsahaj">GitHub</a>
      </div>
    </nav>
  );
};

export default Navbar;
