import MecanizouLogo from "@/assets/images/mecanizou-logo.svg";
import InputSearch from "../ui/input-search";
import HeaderCartDropdown from "./CartDropdown";
import { Button } from "../ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Store from "@/assets/icons/store.svg";
import { ChevronDown, CircleHelp } from "lucide-react";
import CategoryNav from "./CategoryNav";

const Header = () => {
  return (
    <>
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
      <CategoryNav />
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Óleos e Lubrificantes</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Óleo do Motor</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </>
  );
};

export default Header;
