import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CartShoppingSolid from "@/assets/icons/cart-shopping-solid.svg";
import CartShopping from "@/assets/icons/cart-shopping.svg";
import {
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Separator } from "../ui/separator";
import { useCartStore } from "@/store/useCartStore";
import { currencyBrlFormat } from "@/lib/utils";

export function HeaderCartDropdown() {
  const { items, getTotalItems, getTotalPrice } = useCartStore();
  const totalItems = getTotalItems();

  if (totalItems === 0) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-brand-blue rounded-full text-brand-gray-200">
            <span className="flex items-center size-5 text-xl">
              <CartShoppingSolid />
            </span>
            0
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[304px]">
          <DropdownMenuLabel className="flex justify-center py-3 px-4">
            <span className="text-brand-gray-500 font-semibold">Carrinho vazio</span>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-brand-blue rounded-full text-brand-gray-200">
          <span className="flex items-center size-5 text-xl">
            <CartShoppingSolid />
          </span>{" "}
          {totalItems}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[304px]">
        <DropdownMenuLabel className="flex justify-between py-3 px-4">
          <span className="text-brand-gray-500 font-semibold">Itens no Carrinho</span>{" "}
          <span>{currencyBrlFormat(getTotalPrice())}</span>
        </DropdownMenuLabel>
        {items.map((item) => (
          <DropdownMenuItem key={item.id} className="flex justify-between px-4 py-2 gap-3">
            <div className="w-16 h-16 rounded-md bg-brand-gray-50 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="object-contain w-full h-full p-2"
              />
            </div>
            <div className="flex-1">
              <span className="text-sm font-semibold mb-2 leading-tight line-clamp-2">{item.name}</span>
              <div className="flex justify-between items-center mt-1">
                <small className="text-xs">Qnt. {item.quantity}x</small>
                <small className="text-xs text-brand-gray-500">{currencyBrlFormat(item.pixPrice * item.quantity)}</small>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
        <Separator className="mt-4"/>
        <Button variant="ghost" className="text-primary w-full">
          Ir para Carrinho
          <CartShopping className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default HeaderCartDropdown;
