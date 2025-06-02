import LogoImg from "../assets/Logosvg.svg";

export function Logo() {
  return (
    <a className="flex justify-center w-4xs items-center gap-3 ">
      <img src={LogoImg} />
      <p className="text-2xl font-inter font-semibold ">Around the world</p>
    </a>
  );
}
