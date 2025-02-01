import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <UtensilsCrossed className=" mb-8 h-20 w-20" />
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        Oops! It looks like the page you&apos;re looking for is missing from the
        menu.
      </p>

      <Button className="mt-6 py-6" size="lg">
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};
export default NotFound;
