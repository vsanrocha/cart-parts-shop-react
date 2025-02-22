import { forwardRef, useCallback } from "react";
import { Input } from "./input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSearchStore } from "@/store/useSearchStore";
import debounce from "lodash/debounce";

interface InputSearchProps extends React.ComponentProps<"input"> {
  debounceMs?: number;
}

const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ className, debounceMs = 500, ...props }, ref) => {
    const { setSearchTerm } = useSearchStore();

    const debouncedSearch = useCallback(
      debounce((value: string) => {
        setSearchTerm(value.trim());
      }, debounceMs),
      [debounceMs, setSearchTerm]
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      debouncedSearch(e.target.value);
    };

    return (
      <div
        className={cn(
          "flex h-12 w-full rounded-full bg-brand-blue text-base",
          className
        )}
      >
        <div className="flex items-center justify-center px-4">
          <Search className="w-5 h-5 text-brand-gray-200" />
        </div>
        <Input
          {...props}
          ref={ref}
          placeholder="Busque por produto, termo ou código"
          className="text-brand-gray-200 h-full bg-transparent outline-none border-none focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:text-brand-gray-200"
          onChange={handleSearch}
        />
      </div>
    );
  }
);

InputSearch.displayName = "InputSearch";

export default InputSearch;
