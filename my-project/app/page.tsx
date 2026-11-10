import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white px-6 py-12 flex flex-col justify-center text-center sm:text-left">
      <div className="max-w-4xl mx-auto space-y-6 w-full">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-100">
          Hi, I'm Cj Cris Jayson A. Escoltos
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
          Welcome to my personal portfolio website. Hello, my name is Cj Cris Jayson A. Escoltos. 
          I am a Bachelor of Science in Information Technology (BSIT) student at Naga College Foundation. 
          I am a simple, hardworking, and determined person who enjoys learning new things, especially about technology.
        </p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 pt-4">
          <Link 
            href="/about" 
            className={buttonVariants({ size: "lg", className: "bg-white text-slate-900 hover:bg-slate-200" })}
          >
            About Me
          </Link>
          <Link 
            href="/contact" 
            className={buttonVariants({ variant: "outline", size: "lg", className: "border-slate-700 text-slate-200 hover:bg-slate-800" })}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}