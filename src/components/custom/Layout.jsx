import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-screen container ">{children}</main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>
          &copy; 2025 Travel Planner App. All rights reserved by Abhihske Bauri
        </p>
      </footer>
    </div>
  );
};

export default Layout;
