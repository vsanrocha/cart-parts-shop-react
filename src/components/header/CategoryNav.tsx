import {
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenu,
} from "@/components/ui/navigation-menu";

type Category = {
  name: string;
};

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

interface CategoryNavItemProps {
  category: Category;
}

const CategoryNavItem = ({ category }: CategoryNavItemProps) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="px-0">
        {category.name}
      </NavigationMenuTrigger>
    </NavigationMenuItem>
  );
};

const CategoryNav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-6">
        {categories.map((category) => (
          <CategoryNavItem key={category.name} category={category} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoryNav;
