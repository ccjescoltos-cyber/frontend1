import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 min-h-[calc(100vh-5rem)]">
      {/* Soft Cyan Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Avatar Container with Cyan Glowing Border */}
      <div className="relative mb-6">
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-b from-cyan-400 to-cyan-900 shadow-lg shadow-cyan-500/20">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
            {/* Replace /avatar.jpg with your profile image path in /public */}
            <Image
              src="/avatar.jpg"
              alt="Cj Cris Jayson A. Escoltos"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="max-w-3xl mx-auto space-y-4 relative z-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Hi, I'm <span className="text-cyan-400">Cj Cris Jayson</span> A. Escoltos
        </h1>
        
        <p className="text-cyan-300/90 text-lg sm:text-xl font-medium tracking-wide">
          BSIT Student & Tech Enthusiast
        </p>

        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-2">
          Welcome to my personal portfolio website. I am a Bachelor of Science in Information Technology (BSIT) 
          student at Naga College Foundation. I am a simple, hardworking, and determined person who enjoys 
          learning new things, especially about technology.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Link
            href="/about"
            className={buttonVariants({
              size: "lg",
              className: "bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 shadow-md shadow-cyan-500/20 rounded-full px-8 transition-all duration-200",
            })}
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white rounded-full px-8 backdrop-blur-sm transition-all duration-200",
            })}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}