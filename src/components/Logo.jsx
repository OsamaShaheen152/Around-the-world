import { Link } from "react-router-dom";
import LogoImg from "../assets/Logosvg.svg";
import { Home } from "../pages";

export function Logo() {
  return (
    <Link to="/" className="w-4xs flex items-center justify-center gap-3">
      <img src={LogoImg} />
      <p className="font-inter text-2xl font-semibold">Around the world</p>
    </Link>
  );
}
