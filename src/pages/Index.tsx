import { useState } from "react";
import { plants } from "@/data/plants";
import PlantCard from "@/components/PlantCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Редкие растения Кубани</h1>
              <p className="text-lg mb-8 text-muted-foreground">
                Изучение и сохранение уникальной флоры Краснодарского края
              </p>
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Поиск растений..."
                  className="w-full py-2 px-4 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Plants section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Каталог редких растений</h2>
            
            {filteredPlants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlants.map(plant => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">По вашему запросу ничего не найдено</p>
              </div>
            )}
          </div>
        </section>

        <AboutSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
