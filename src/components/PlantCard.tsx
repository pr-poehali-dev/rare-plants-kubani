import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plant } from "@/types/plant";

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden bg-secondary">
        <img 
          src="/placeholder.svg" 
          alt={plant.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-primary font-bold">{plant.name}</CardTitle>
        <CardDescription className="text-sm italic">{plant.latinName || "Латинское название"}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm line-clamp-3">{plant.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-accent-foreground"></span> 
            {plant.status}
          </span>
        </div>
        <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
          Подробнее
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlantCard;
