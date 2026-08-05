"use client";
import Link from "next/link";

import Homepage from "./home/page";

import AdminLogin from "./adminlogin/page";

export default function Home() {
  return (
    <div>
      <Homepage />
      <AdminLogin />
    </div>
  );
}
