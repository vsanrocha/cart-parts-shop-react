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
import { useProducts } from "@/hooks/useProducts";

const ProductGrid = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="w-full mt-6 sm:mt-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {[...Array(8)].map((_, index) => (
              <ProductCard key={index} isLoading={true} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full mt-6 sm:mt-0">
        <div className="container">
          <div className="text-center text-red-500">
            Erro ao carregar produtos. Por favor, tente novamente mais tarde.
          </div>
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="w-full mt-6 sm:mt-0">
        <div className="container">
          <div className="text-center">
            Nenhum produto encontrado.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-6 sm:mt-0">
      <div className="container">
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div className="flex items-center sm:text-2xl gap-2">
            <span>Resultados para:</span>
            <b>Óleo do Motor</b>
          </div>
          <span className="text-sm hidden sm:block">{products.length} de 9.999 resultados</span>
        </div>
        <Separator className="my-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <Separator className="mt-8 mb-6" />
        <div className="hidden sm:block">
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
