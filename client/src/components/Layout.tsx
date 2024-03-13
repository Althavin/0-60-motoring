import Head from "next/head";
import React, { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import ToastContainerWrapper from "@/lib/ToastContainerWrapper";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white   text-black overflow-x-hidden">
      <Head>
        <title>Motor Vehicle Vendoring</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container layout">{children}</main>
      <footer>
        <Footer />
      </footer>
      <ToastContainerWrapper />
    </div>
  );
};

export default Layout;
