import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "Sep 2022 – Feb 2023",
    role: "Programmer",
    company: "DepEd El Salvador City Division",
    description: "Developed a web-based teacher evaluation system.",
    technologies: ["React", "Laravel", "Bootstrap"],
    current: true,
  },
  {
    period: "Mar 2023 – Jun 2023",
    role: "Backend Developer (Intern)",
    company: "Pointersbit Inc.",
    description: "Worked on backend services and API integrations.",
    technologies: ["React", "Redux", ".NET"],
  },
  {
    period: "Mar 2024 – Dec 2025",
    role: "Web Developer",
    company: "City Government of Butuan",
    description: "Developed websites for multiple city departments.",
    technologies: ["React", "Laravel", "Redux"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 scroll-mt-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary uppercase text-sm tracking-widest">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Professional
            <span className="font-serif italic text-primary"> Experience</span>
          </h2>

          <p className="text-muted-foreground mt-6">
            My journey developing web applications and working with amazing
            teams across different organizations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/30 -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="grid md:grid-cols-2 items-center relative"
                >
                  {/* LEFT SIDE */}
                  {isLeft && (
                    <div className="md:pr-12 text-right">
                      <ExperienceCard exp={exp} align="right" />
                    </div>
                  )}

                  {/* Timeline Icon */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg z-10">
                    <Briefcase size={18} />
                  </div>

                  {/* RIGHT SIDE */}
                  {!isLeft && (
                    <div className="md:col-start-2 md:pl-12">
                      <ExperienceCard exp={exp} align="left" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, align }) {
  return (
    <div
      className={`glass p-6 rounded-2xl border border-primary/20
      hover:border-primary/50 hover:-translate-y-1
      transition-all duration-300`}
    >
      <span className="text-sm text-primary font-medium">{exp.period}</span>

      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>

      <p className="text-muted-foreground text-sm">{exp.company}</p>

      <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>

      <div
        className={`flex flex-wrap gap-2 mt-4 ${
          align === "right" ? "justify-end" : ""
        }`}
      >
        {exp.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
