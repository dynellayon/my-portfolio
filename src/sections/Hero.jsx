import { useMemo } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Docker",
  "Tailwind CSS",
  "Figma",
  "Git",
  ".NET",
  "Laravel",
];

const socials = [
  { icon: Github, href: "https://github.com/dynellayon" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/dynell-ayon-81427a229/",
  },
];

export default function Hero() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/dot-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background/80" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2AA",
              top: p.top,
              left: p.left,
              animation: `slow-drift ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Software Engineer • React Specialist
            </span>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Building high-quality web apps
                <br />
                with React, Next.js, and TypeScript.
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                Hi! I’m <strong>Dynell Ayon</strong>, a software engineer
                focused on modern, scalable, and performant web experiences.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a href="/#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </a>
              <a href="/DynellAyon_CV.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5 mr-1" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow me:</span>

              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/gradpic.jpg"
                  alt="Dynell Ayon"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Availability badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills marquee */}
        <div className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, i) => (
                <div key={i} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
