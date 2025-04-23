import { Leaf, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">О проекте</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Цель проекта</h3>
            </div>
            <p className="text-gray-700">
              Проект "Редкие растения Кубани" создан с целью привлечения внимания к уникальной флоре Краснодарского края. 
              Многие виды растений находятся под угрозой исчезновения и нуждаются в защите.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Сохранение биоразнообразия</h3>
            </div>
            <p className="text-gray-700">
              Сохранение редких видов растений имеет огромное значение для поддержания экологического равновесия и биоразнообразия нашего региона. 
              Каждый из нас может внести вклад в защиту этих уникальных представителей флоры.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
