"use client";
import Link from "next/link";
import Navbar from "./navbar/page";
import Homepage from "./home/page";
import Footer from "./footer/page";
import AdminLogin from "./adminlogin/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <AdminLogin />
      <Footer />
    </div>
  );
}
