import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-6 py-12 text-center sm:text-left">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        Hi, I'm Cj Cris Jayson A. Escoltos
      </h1>
      <p className="text-muted-foreground text-lg max-w-2xl">
        Welcome to my personal portfolio website, Hello my name is Cj Cris Jayson A. Escoltos. 
        I am a Bachelor of Science in Informattion Technology (BSIT) student at Naga College Foundation.
        I am simple,hardworking, and determined person who enjoys learning new things, especially about technology.

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