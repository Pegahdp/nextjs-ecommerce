import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* {MOBILE MENU} */}
      <div className="h-full flex md:hidden items-center justify-between ">
        <Link href="/">
          <div className="uppercase tracking-wide text-xl">Next shop</div>
        </Link>
        <Menu />
      </div>
      {/* {BIGGER SCREEN MENU} */}
      <div className="hidden md:flex items-center justify-between h-full">
        <div className="w-1/3 ">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" width={24} height={24} alt="" />
            <div className="uppercase tracking-wide text-xl">Next shop</div>
          </Link>
        </div>
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
