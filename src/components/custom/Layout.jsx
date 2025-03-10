import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div
        className="w-full min-h-screen "
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(6,182,212,0.4) 1px, transparent 0)`,
          backgroundSize: "10px 10px",
          backgroundRepeat: "repeat",
        }}
      >
        <main className="min-h-screen max-w-[1350px] mx-auto bg-white">
          {children}
        </main>
      </div>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>
          &copy; 2025 Travel Planner App. All rights reserved by Abhishek Bauri
        </p>
      </footer>
    </div>
  );
};

export default Layout;
