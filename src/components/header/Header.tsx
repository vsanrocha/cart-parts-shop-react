import MecanizouLogo from "@/assets/images/mecanizou-logo.svg";
import Store from "@/assets/icons/store.svg";
import Sparkles from "@/assets/icons/sparkles.svg";
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
import { ChevronDown, CircleHelp } from "lucide-react";
import CategoryNav from "./CategoryNav";

const Header = () => {
  return (
    <>
      <header className="w-full bg-primary shadow-sm">
        <div className="container flex flex-col">
          <div className="flex items-center justify-center gap-8 py-4">
            <div>
              <MecanizouLogo />
            </div>
            <InputSearch className="hidden sm:flex" />
            <div className="flex">
              <HeaderCartDropdown />
              <Button variant="default" className=" text-[#D4D4D8]">
                <Store /> <span className="hidden lg:block">Minha Oficina</span>{" "}
                <ChevronDown />
              </Button>
            </div>
            <div className="hidden lg:block text-[#D4D4D8]">
              <CircleHelp />
            </div>
          </div>
          <div className="sm:hidden mx-4 mb-4">
            <InputSearch />
          </div>
        </div>
      </header>
      <div className="hidden md:flex items-center h-16 w-full text-[#52525B] bg-white border-b border-gray-200 drop-shadow">
        <div className="container flex items-center justify-between">
          <CategoryNav />
          <Button variant="outline" className="hidden lg:flex rounded-3xl">
            <Sparkles />
            <span className="text-sm">Orçamento Rápido</span>
          </Button>
        </div>
      </div>
      <div className="container py-6 hidden sm:block">
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
