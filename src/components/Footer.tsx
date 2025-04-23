const Footer = () => {
  return (
    <footer className="bg-secondary py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Редкие растения Кубани
            </p>
          </div>
          <div className="text-sm text-center text-muted-foreground">
            <p className="font-medium">
              Автор проекта: Моргунов Никита Олегович
            </p>
            <p className="mt-1">Ученик 10 "В" класса</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
