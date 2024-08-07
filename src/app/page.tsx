"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Page() {
  useEffect(() => {
    redirect("/learning");
  }, []);
  return (
    <div>
      <h2>{"Pranjal's learning list"}</h2>
    </div>
  );
}
