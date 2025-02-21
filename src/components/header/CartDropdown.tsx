import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ShoppingCart from "@/assets/icons/shopping-cart.svg";

export function HeaderCartDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-[#0860C4] rounded-[2.5rem] text-[#D4D4D8]">
          <span className="flex items-center size-5 text-xl">
            <ShoppingCart />
          </span> 3
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Itens no Carrinho</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default HeaderCartDropdown;
