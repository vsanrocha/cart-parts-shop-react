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
          "flex h-12 w-full rounded-[.6rem] bg-[#0860C4] text-base",
          className
        )}
      >
        <div className="flex items-center pl-4">
          <Search className="w-5 h-5" color="#D4D4D8" />
        </div>
        <Input
          {...props}
          ref={ref}
          placeholder="Busque por produto, termo ou código"
          className="text-[#D4D4D8] h-full bg-transparent outline-none border-none focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:text-[#D4D4D8]"
          onChange={handleSearch}
        />
      </div>
    );
  }
);

InputSearch.displayName = "InputSearch";

export default InputSearch;
