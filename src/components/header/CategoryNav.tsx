import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const categories = [
  {
    name: "Todas Categorias",
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
    <NavigationMenu>
      <NavigationMenuList className="flex gap-6">
        {categories.map((category) => (
          <NavigationMenuItem key={category.name}>
            <NavigationMenuTrigger className="px-0">
              {category.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoryNav;
