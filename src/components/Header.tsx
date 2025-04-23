import { Leaf } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary-foreground" />
            <h1 className="text-xl md:text-2xl font-bold text-primary-foreground">
              Редкие растения Кубани
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-primary-foreground">
            <a href="#" className="hover:underline font-medium text-sm">Главная</a>
            <a href="#about" className="hover:underline font-medium text-sm">О проекте</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
