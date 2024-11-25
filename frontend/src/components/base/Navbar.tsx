import { Home } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { Toaster } from "../ui/toaster";
import { SessionAuth, signOut } from "supertokens-auth-react/recipe/session";

export function Navbar() {
  async function onLogout() {
    await signOut();
    window.location.href = "/auth"; // or to wherever your logic page is
  }
  return (
    <SessionAuth>
      <nav className="border-b">
        <div className="flex h-14 items-center px-4 justify-between">
          <div className="flex items-center">
            <Button
              asChild
              variant="ghost"
              className="mr-6 px-2">
              <Link
                to="/"
                className={cn(
                  "flex items-center font-medium transition-colors hover:text-primary"
                )}>
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
            </Button>
          </div>
          <Button
            asChild
            variant="ghost"
            className="px-2 cursor-pointer"
            onClick={onLogout}>
            <span>Logout</span>
          </Button>
        </div>
      </nav>
      <Toaster />
      <Outlet />
    </SessionAuth>
  );
}
