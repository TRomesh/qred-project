import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-extrabold">
            404
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Oops! The page you're looking for doesn't exist.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            asChild
            className="w-full rounded-full bg-accent hover:bg-accent">
            <Link to="/">Go back home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
