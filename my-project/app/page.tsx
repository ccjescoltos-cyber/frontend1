import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-6 py-12 text-center sm:text-left">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        Hi, I'm Fritzgerald Enric Imperial
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl">
        Welcome to my personal portfolio website built with Next.js and ShadCN UI. 
        Explore my background, education, hobbies, and contact information using the navigation above.
      </p>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-4">
        <Link href="/about" className={buttonVariants({ size: "lg" })}>
          About Me
        </Link>
        <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
          Get in Touch
        </Link>
      </div>
    </div>
  );
}