import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import PlantCard from "@/components/PlantCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { plants } from "@/data/plants";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Редкие растения Кубани
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Изучайте уникальную флору Краснодарского края, которая нуждается в нашей защите и бережном отношении
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="relative max-w-md mx-auto mb-12">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Поиск растений..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filteredPlants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Растения с таким названием не найдены
              </p>
            </div>
          )}
        </section>

        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
