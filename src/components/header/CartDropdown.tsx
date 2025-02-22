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
import { Product } from "@/types/Product";
import { Separator } from "../ui/separator";

const products: Product[] = [
  {
    id: "4",
    image:
      "https://www.lubrax.com.br/sites/lubrax/files/styles/large/public/2021-12/LUBRAX-VALORA-SN-PLUS-245x245.png",
    brand: "Lubrax",
    name: "Caixa com 24 - Óleo do Motor Tecno VALORA",
    code: "OMSS15W40LUBX1024742CX24",
    price: 506,
    hasExpressShipping: false,
    pixDiscount: 5,
    pixPrice: 486,
    installments: { number: 12, value: 14.58 },
  },
  {
    id: "3",
    image:
      "https://www.lubrax.com.br/sites/lubrax/files/styles/large/public/2024-01/lubrax-supera-5w-30_0.png",
    brand: "Lubrax",
    name: "Caixa com 24 - Óleo do Motor Tecno 5W-30",
    code: "OMSS15W40LUBX1024742CX24",
    price: 506,
    hasExpressShipping: true,
    pixDiscount: 5,
    pixPrice: 486,
    installments: { number: 12, value: 14.58 },
  },
];

export function HeaderCartDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-[#0860C4] rounded-full text-[#D4D4D8]">
          <span className="flex items-center size-5 text-xl">
            <CartShoppingSolid />
          </span>{" "}
          3
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[304px]">
        <DropdownMenuLabel className="flex justify-between py-3 px-4">
          <span className="text-[#27272A] font-semibold">Itens no Carrinho</span>{" "}
          <span>R$ 262,59</span>
        </DropdownMenuLabel>
        {products.map((product) => (
          <DropdownMenuItem key={product.id} className="flex justify-between px-4 py-2 gap-3">
            <div className="w-16 h-16 rounded-md bg-[#F4F4F5]">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"

              />
            </div>
            <div>
              <span className="text-sm font-semibold mb-2 leading-tight">{product.name}</span>{" "}
              <div className="flex justify-between">
                <small className="text-xs">Qnt. 2x</small>
                <small className="text-xs text-[#27272A]">R$ {product.price}</small>
              </div>
            </div>
          </DropdownMenuItem>
        ))}
        <Separator className="mt-4"/>
        <Button variant="ghost" className="text-primary w-full">
          Ir para Carrinho
          <CartShopping />
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default HeaderCartDropdown;
