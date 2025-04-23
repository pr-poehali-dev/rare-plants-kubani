import { Plant } from "@/types/plant";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden bg-green-100">
        <img
          src={plant.imageUrl}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex flex-col space-y-1">
          <CardTitle className="text-xl text-primary">{plant.name}</CardTitle>
          <p className="text-sm italic text-gray-500">{plant.scientificName}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700 mb-4">{plant.description}</p>
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold mb-1">Место обитания:</h4>
            <p className="text-sm text-gray-600">{plant.habitat}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-1">Статус сохранения:</h4>
            <Badge variant="outline" className="bg-green-50 text-primary border-primary">
              {plant.conservationStatus}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlantCard;
