import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header className="max-w-[750px] w-full mx-auto py-3">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
