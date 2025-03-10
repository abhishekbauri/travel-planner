import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-white p-2 md:p-4 flex justify-between items-center drop-shadow-xl">
      <div className="flex items-center space-x-2">
        <img
          src="/logo.svg"
          alt="logo"
          className="w-30 h-8 md:w-35 md:h-10 hover:cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <nav className="hidden md:flex space-x-4">
        <NavLink to="/create-tour">
          <Button variant="outline" className=" font-mono">
            <Plus />
            Create Tour
          </Button>
        </NavLink>
        <Button variant="ghost" className=" font-inter">
          Sign In
        </Button>
      </nav>
    </header>
  );
};

export default Header;
