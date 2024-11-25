import { Home } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "../ui/toaster";
import { SessionAuth } from "supertokens-auth-react/recipe/session";

export function Navbar() {
  return (
    <SessionAuth>
      <nav className="border-b">
        <div className="flex h-14 items-center px-4">
          <Button
            asChild
            variant="ghost"
            className="mr-6 px-2">
            <Link
              to="/"
              className={cn(
                "flex items-center font-medium transition-colors hover:text-primary"
              )}>
              <Home className=" h-4 w-4" />
              <span>Home</span>
            </Link>
          </Button>
        </div>
      </nav>
      <Toaster />
      <Outlet />
    </SessionAuth>
  );
}
