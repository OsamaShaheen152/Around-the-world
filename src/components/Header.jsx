import { Logo, ThemeSwitcher } from "./index";

export function Header() {
  return (
    <header className="mb-6 overflow-hidden bg-white shadow dark:bg-gray-800 md:mb-12">
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
