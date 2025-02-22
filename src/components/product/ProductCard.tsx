import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import CartShoppingAD from "@/assets/icons/cart-shopping-ad.svg";
import Zap from "@/assets/icons/zap.svg";
import { Product } from "@/types/Product";
import { currencyBrlFormat } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { useCartStore } from "@/store/useCartStore";

const ProductCardSkeleton = () => {
  return (
    <div className="flex-1 flex flex-col justify-between w-[271px]" data-testid="product-card-skeleton">
      <Skeleton className="w-full h-[271px] rounded-xl" />
      <div className="pt-4">
        <Skeleton className="h-3 w-20 mb-2" />
        <div className="">
          <Skeleton className="h-6 w-60 mb-1" />
          <Skeleton className="h-6 w-56 mb-2" />
          <Skeleton className="h-3 w-32" />
        </div>

        <div className="mt-4">
          <Skeleton className="h-3 w-20 mb-2" />
          <Skeleton className="h-5 w-40 mb-2" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
      <Skeleton className="h-10 w-full mt-4" />
    </div>
  );
};

const ProductCard = ({ product, isLoading }: { product?: Product; isLoading?: boolean } = {}) => {
  const { addItem, increaseQuantity, decreaseQuantity, getItemQuantity } = useCartStore();

  if (isLoading || !product) {
    return <ProductCardSkeleton />;
  }

  const { id, image, brand, name, code, price, hasExpressShipping, pixDiscount, pixPrice, installments } = product;

  const quantity = getItemQuantity(id);
  const hasItemOnCart = quantity > 0;
  const hasOneItemOnCart = quantity === 1;
  const hasMaxItemOnCart = quantity >= 99;

  const handleAddToCart = () => {
    addItem(product);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(id);
  };

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  return (
    <div className="flex-1 flex flex-col justify-between w-[271px]">
      <div className="relative flex items-center justify-center p-10 bg-brand-gray-50 rounded-xl">
        <img
          src={image}
          alt={name}
          className="max-h-[192px] max-w-[192px] w-full h-full"
        />
        {hasExpressShipping && (
          <div className="absolute top-3 left-3">
            <Badge className="py-1 bg-brand-green text-white rounded-3xl hover:bg-brand-green">
              <Zap className="w-3 h-3 mr-2" />
              Express
            </Badge>
          </div>
        )}
      </div>

      <div className="pt-4">
        <p className="text-sm uppercase text-brand-blue-link font-medium">{brand}</p>
        <div className="">
          <h3 className="font-semibold text-base">{name}</h3>
          <p className="text-xs text-gray-500">Cod.: {code}</p>
        </div>

        <div className="mt-4">
          <p className="text-xs line-through">{currencyBrlFormat(price)}</p>
          <div className="flex items-center justify-between gap-2">
            <p className="text-2xl font-bold">{currencyBrlFormat(pixPrice)}</p>
            <Badge variant="price">
              <small>{pixDiscount}% OFF NO PIX</small>
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Em até {installments?.number}x
            <span className="ml-2">{currencyBrlFormat(installments?.value)}</span>
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {hasItemOnCart ? (
          <div className="flex items-center gap-2 w-full rounded-full py-1 px-3 bg-brand-gray-100">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDecreaseQuantity}
              className="h-8 w-8"
              aria-label="Diminuir quantidade"
            >
              {hasOneItemOnCart ? (
                <Trash2 className="h-4 w-4" />
              ) : (
                <Minus className="h-4 w-4" />
              )}
            </Button>
            <div className="flex items-center justify-center w-full p-1 bg-white rounded-full">
              <span>{quantity}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleIncreaseQuantity}
              className="h-8 w-8"
              disabled={hasMaxItemOnCart}
              aria-label="Aumentar quantidade"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <Button
            className="w-full rounded-full text-primary bg-brand-blue-light"
            variant="default"
            onClick={handleAddToCart}
          >
            <CartShoppingAD className="mr-2 h-4 w-4" />
            Adicionar ao Carrinho
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
