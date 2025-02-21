import MecanizouLogo from "@/assets/images/mecanizou-logo.svg";
import InputSearch from "./ui/input-search";
import HeaderCartDropdown from "./header-cart-dropdown";
import { Button } from "./ui/button";
import Store from "@/assets/icons/store.svg";
import { ChevronDown, CircleHelp } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-primary shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-8 py-4">
          <div>
            <MecanizouLogo />
          </div>
          <InputSearch />
          <div className="flex">
            <HeaderCartDropdown />
            <Button variant="default" className=" text-[#D4D4D8]">
              <Store /> Minha Oficina <ChevronDown />
            </Button>
          </div>
          <div className=" text-[#D4D4D8]">
            <CircleHelp />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
