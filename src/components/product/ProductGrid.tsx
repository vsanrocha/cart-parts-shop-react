import { Product } from "@/types/Product";
import ProductCard from "./ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "../ui/separator";

const products: Product[] = [
  {
    id: "1",
    image:
      "https://www.lubrax.com.br/sites/lubrax/files/styles/large/public/2024-02/lubrax-supera-0w-20_245x245.png",
    brand: "Lubrax",
    name: "Caixa com 24 - Óleo do Motor Tecno 0W-20 Semissintético SL",
    code: "OMSS15W40LUBX1024742CX24",
    price: 506,
    hasExpressShipping: true,
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
    id: "5",
    image:
      "https://www.lubrax.com.br/sites/lubrax/files/styles/large/public/2021-06/LUBRAX-ESSENCIAL-ALTA-RODAGEM.png?",
    brand: "Lubrax",
    name: "Caixa com 24 - Óleo do Motor Tecno Alta Rodagem",
    code: "OMSS15W40LUBX1024742CX24",
    price: 506,
    hasExpressShipping: true,
    pixDiscount: 5,
    pixPrice: 486,
    installments: { number: 12, value: 14.58 },
  },
  {
    id: "6",
    image:
      "https://www.lubrax.com.br/sites/lubrax/files/styles/large/public/2023-10/lubrax-supera-premium_0w-20.png?itok=XnuvtIgi",
    brand: "Lubrax",
    name: "Caixa com 24 - Óleo do Motor Tecno 0W-20",
    code: "OMSS15W40LUBX1024742CX24",
    price: 506,
    hasExpressShipping: true,
    pixDiscount: 5,
    pixPrice: 486,
    installments: { number: 12, value: 14.58 },
  },
  {
    id: "7",
    image:
      "https://www.lubrax.com.br/sites/lubrax/files/styles/large/public/2024-10/lubrax-valora-sp-245x245.png?itok=RG1_xs56",
    brand: "Lubrax",
    name: "Caixa com 24 - Óleo do Motor Tecno 5W-30",
    code: "OMSS15W40LUBX1024742CX24",
    price: 506,
    hasExpressShipping: true,
    pixDiscount: 5,
    pixPrice: 486,
    installments: { number: 12, value: 14.58 },
  },
  {
    id: "8",
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
    id: "9",
    image:
      "https://www.lubrax.com.br/sites/lubrax/files/styles/large/public/2021-06/LUBRAX-ESSENCIAL-ALTA-RODAGEM.png?",
    brand: "Lubrax",
    name: "Caixa com 24 - Óleo do Motor Tecno Alta Rodagem",
    code: "OMSS15W40LUBX1024742CX24",
    price: 506,
    hasExpressShipping: true,
    pixDiscount: 5,
    pixPrice: 486,
    installments: { number: 12, value: 14.58 },
  },
  {
    id: "10",
    image:
      "https://www.lubrax.com.br/sites/lubrax/files/styles/large/public/2023-10/lubrax-supera-premium_0w-20.png?itok=XnuvtIgi",
    brand: "Lubrax",
    name: "Caixa com 24 - Óleo do Motor Tecno 0W-20",
    code: "OMSS15W40LUBX1024742CX24",
    price: 506,
    hasExpressShipping: true,
    pixDiscount: 5,
    pixPrice: 486,
    installments: { number: 12, value: 14.58 },
  },
  {
    id: "11",
    image:
      "https://www.lubrax.com.br/sites/lubrax/files/styles/large/public/2024-10/lubrax-valora-sp-245x245.png?itok=RG1_xs56",
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

const ProductGrid = () => {
  return (
    <div className="w-full">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-2xl gap-2">
            <span>Resultados para:</span>
            <b>Óleo do Motor</b>
          </div>
          <span className="text-sm">12 de 9.999 resultados</span>
        </div>
        <Separator className="my-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <Separator className="mt-8 mb-6" />
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  aria-disabled={true}
                  className={"pointer-events-none opacity-50"}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive={true}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">90</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
