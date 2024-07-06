import React, { ReactNode } from "react";
import Header from "./Header";
import Contact from "./Contact";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
};

export default Layout;
