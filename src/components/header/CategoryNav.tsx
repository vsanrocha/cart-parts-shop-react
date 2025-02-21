import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";


const categories = [
  {
    name: "Todas Categorias"
  },
  {
    name: "Óleos e Lubrificantes",
  },
  {
    name: "Pneus",
  },
  {
    name: "Maquinários",
  },
  {
    name: "Ferramentas",
  },
] as const;

const CategoryNav = () => {
  return (
    <div className="flex items-center h-16 w-full text-[#52525B] bg-white border-b border-gray-200 drop-shadow">
      <div className="container mx-auto ">
        <NavigationMenu>
          <NavigationMenuList>
            {categories.map((category) => (
              <NavigationMenuItem key={category.name}>
                <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};



export default CategoryNav;
