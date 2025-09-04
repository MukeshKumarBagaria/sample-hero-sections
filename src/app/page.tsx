import Link from "next/link";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">Technvoita Solution</h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            E‑commerce growth partner for Amazon, Walmart, Myntra, Ajio, Flipkart and more.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/home1"><Button className="w-full sm:w-auto">Home 1 – Minimal</Button></Link>
            <Link href="/home2"><Button variant="outline" className="w-full sm:w-auto">Home 2 – Gradient</Button></Link>
            <Link href="/home3"><Button variant="ghost" className="w-full sm:w-auto">Home 3 – Bento</Button></Link>
            <Link href="/home4"><Button className="w-full sm:w-auto">Home 4 – Corporate</Button></Link>
          </div>
        </div>
      </div>
    </main>
  );
}
