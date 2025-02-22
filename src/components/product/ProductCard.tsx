import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import CartShoppingAD from "@/assets/icons/cart-shopping-ad.svg";
import Zap from "@/assets/icons/zap.svg";
import { Product } from "@/types/Product";
import { currencyBrlFormat } from "@/lib/utils";

const ProductCard = ({
  image,
  brand,
  name,
  code,
  price,
  hasExpressShipping,
  pixDiscount,
  installments,
  pixPrice,
}: Product) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const hasItemOnCard = true;
  const hasOneItemOnCard = true;
  const hasMaxItemOnCard = true;

  return (
    <div className="flex-1 flex flex-col justify-between max-w-[271px]">
      <div className="relative flex items-center justify-center p-10 bg-[#F4F4F5] rounded-xl">
        <img
          src={image}
          alt={name}
          className="max-h-[192px] max-w-[192px] w-full h-full"
        />
        {hasExpressShipping && (
          <div className="absolute top-3 left-3">
            <Badge className="py-1 bg-[#00B496] text-white rounded-3xl hover:bg-[#00B496]">
              <Zap className="w-3 h-3 mr-2" />
              Express
            </Badge>
          </div>
        )}
      </div>
      <div className="pt-4">
        <p className="text-sm uppercase text-[#0958B5] font-medium">{brand}</p>
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
          <p className="text-sm text-gray-600">
            Em até {installments.number}x{" "}
            {currencyBrlFormat(installments.value)}
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {hasItemOnCard ? (
          <div className="flex items-center gap-2 w-full rounded-[40px] py-1 px-3 bg-[#efeff0]">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDecreaseQuantity}
              className="h-8 w-8"
            >
              {hasOneItemOnCard ? (
                <Trash2 className="h-4 w-4" />
              ) : (
                <Minus className="h-4 w-4" />
              )}
            </Button>
            <div className="flex items-center justify-center w-full p-1 bg-white rounded-[40px]">
              <span>{quantity}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleIncreaseQuantity}
              className="h-8 w-8"
              disabled={hasMaxItemOnCard}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <Button
            className="w-full rounded-[40px] text-primary bg-[#e8f5fa]"
            variant="default"
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
