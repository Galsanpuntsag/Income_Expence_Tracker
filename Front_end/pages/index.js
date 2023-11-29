import Image from "next/image";
import { Inter } from "next/font/google";
import Dashboard from "@/components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      {/* <Login/> */}

      <div clasName="bg-slate-200 flex flex-col justify-center ">
        <Dashboard />
      </div>
    </main>
  );
}
