import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md p-2 md:p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="logo" className="w-30 h-8 md:w-35 md:h-10" />
      </div>

      <nav className="hidden md:flex space-x-4">
        <Button variant="outline" className=" font-mono">
          <Plus />
          Create Tour
        </Button>
        <Button variant="ghost" className=" font-inter">
          Sign In
        </Button>
      </nav>
    </header>
  );
};

export default Header;
