import { Input } from "./input";
import { Search } from "lucide-react";

const InputSearch = () => {
  return (
    <div className="flex h-12 w-full rounded-[.6rem] bg-[#0860C4] text-base">
      <div className="flex items-center pl-4">
        <Search className="w-5 h-5" color="#D4D4D8" />
      </div>
      <Input
        placeholder="Busque por produto, termo ou código"
        className="text-[#D4D4D8] h-full bg-transparent outline-none border-none focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:text-[#D4D4D8]"
      />
    </div>
  );
};

export default InputSearch;
