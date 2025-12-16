
import type { ReactNode } from "react";
import { Navbar } from "../components/Navbar";


type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground px-5 md:px-10">
   
      <Navbar />
      <main className="pt-16 md:pt-20">{children}</main>
    </div>
  );
}
