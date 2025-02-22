import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Separator } from "@/components/ui/separator";
import ProductCard from "./ProductCard";

import { useProducts } from "@/hooks/useProducts";
import { useSearchStore } from "@/store/useSearchStore";

const ITEMS_PER_PAGE = 12;

const ProductGrid = () => {
  const { searchTerm } = useSearchStore();
  const { data: products, isLoading } = useProducts({ searchTerm });

  if (isLoading || !products) {
    return (
      <div className="container">
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div className="flex items-center sm:text-2xl gap-2">
            <span>Resultados para:</span>
            {searchTerm ? <b>{searchTerm}</b> : <b>Óleo do Motor</b>}
          </div>
          <span className="text-sm hidden sm:block">Carregando...</span>
        </div>
        <Separator className="my-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
            <ProductCard key={index} isLoading={true} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="flex justify-between items-center px-4 sm:px-0">
        <div className="flex items-center sm:text-2xl gap-2">
          <span>Resultados para:</span>
          {searchTerm ? <b>{searchTerm}</b> : <b>Óleo do Motor</b>}
        </div>
        {!!products.length && <span className="text-sm hidden sm:block">
          {products.length} de 9.999 resultados
        </span>}
      </div>
      <Separator className="my-6" />
      {products.length === 0 ? (
        <p className="text-center text-lg mt-16">
          Nenhum produto encontrado com o termo "{searchTerm}"
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <Separator className="mt-8 mb-6" />
      {!!products.length && (
        <div className="hidden sm:block mb-16">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  aria-disabled={true}
                  className={"pointer-events-none opacity-50"}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="/" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="/">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="/">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="/">90</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="/" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
