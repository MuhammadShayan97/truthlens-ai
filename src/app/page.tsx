
"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "TruthLens AI",
    label: "FLAGSHIP PROJECT",
    icon: "◉",
    description:
      "An intelligent news research and verification assistant that investigates claims, compares evidence across sources, and generates transparent, source-linked research reports.",
    tags: ["Next.js", "TypeScript", "AI Agents", "Web Research"],
    color: "from-cyan-400 to-blue-500",
    status: "In Development",
    featured: true,
    href: "https://github.com/yourusername/truthlens-ai",
  },
  {
    number: "02",
    name: "MediaMind",
    label: "MEDIA INTELLIGENCE",
    icon: "⌘",
    description:
      "An AI-powered media research assistant designed to organize research, discover useful insights, summarize articles, and help students work smarter.",
    tags: ["Python", "LLMs", "Research", "Automation"],
    color: "from-violet-400 to-indigo-500",
    status: "Concept",
    featured: false,
    href: "https://github.com/yourusername/mediamind",
  },
  {
    number: "03",
    name: "ClipForge AI",
    label: "CREATIVE AUTOMATION",
    icon: "▶",
    description:
      "An AI-assisted video repurposing tool that transforms long-form content into short-form video concepts, captions, hooks, and platform-ready content ideas.",
    tags: ["AI Tools", "Video", "Content Creation", "Automation"],
    color: "from-orange-300 to-pink-500",
    status: "Concept",
    featured: false,
    href: "https://github.com/yourusername/clipforge-ai",
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "AI Agents",
  "LLMs",
  "Prompt Engineering",
  "Media Research",
  "Fact-Checking",
  "Git & GitHub",
  "Workflow Automation",
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
      {diagonal ? "↗" : "→"}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
      <span className="h-px w-7 bg-cyan-400" />
      {children}
    </div>
  );
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Project collaboration",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  const email = "your.email@example.com";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${form.subject} — ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.subject}\n\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#060914] text-slate-100 selection:bg-cyan-300/30 selection:text-cyan-100">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        body {
          background: #060914;
        }

        ::selection {
          background: rgba(34, 211, 238, 0.3);
        }

        .grid-pattern {
          background-image: linear-gradient(
              rgba(148, 163, 184, 0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(148, 163, 184, 0.045) 1px,
              transparent 1px
            );
          background-size: 52px 52px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
        }

        .glass {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.055),
            rgba(255, 255, 255, 0.018)
          );
          border: 1px solid rgba(148, 163, 184, 0.15);
          backdrop-filter: blur(18px);
        }

        .gradient-text {
          background: linear-gradient(100deg, #f8fafc 5%, #67e8f9 52%, #60a5fa 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .glow {
          box-shadow: 0 0 70px rgba(34, 211, 238, 0.09);
        }

        .dot-grid {
          background-image: radial-gradient(
            rgba(103, 232, 249, 0.26) 1px,
            transparent 1px
          );
          background-size: 13px 13px;
        }

        .orb {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .pulse-dot {
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .project-card {
          transition: transform 300ms ease, border-color 300ms ease,
            box-shadow 300ms ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(103, 232, 249, 0.3);
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.2);
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-56 -top-64 h-[580px] w-[580px] rounded-full bg-blue-600/[0.10] blur-[140px]" />
        <div className="absolute -right-64 top-[500px] h-[580px] w-[580px] rounded-full bg-cyan-500/[0.07] blur-[150px]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#060914]/85 backdrop-blur-2xl">
        <nav
          aria-label="Main navigation"
          className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          <a href="#home" className="group flex items-center gap-3" aria-label="Go to homepage">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/[0.08]">
              <span className="text-xl font-black text-cyan-300">S.</span>
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#060914] bg-blue-400" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-wide text-white">Shayan<span className="text-cyan-300">.dev</span></div>
              <div className="mt-0.5 text-[10px] tracking-[0.16em] text-slate-500">AI · MEDIA · OPEN SOURCE</div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
              >
                {label}
              </a>
            ))}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition-all hover:border-cyan-300/40 hover:bg-cyan-300/[0.07]"
            >
              GitHub <Arrow diagonal />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-xl text-white md:hidden"
          >
            {menuOpen ? "×" : "☰"}
          </button>

          {menuOpen && (
            <div className="absolute left-0 right-0 top-[75px] border-b border-white/10 bg-[#090d1b] p-5 shadow-2xl md:hidden">
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/[0.06] py-4 text-sm text-slate-300 hover:text-cyan-300"
                >
                  {label} <span className="float-right">↗</span>
                </a>
              ))}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block rounded-lg bg-cyan-300/10 p-3 text-center text-sm text-cyan-200"
              >
                Explore GitHub ↗
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div aria-hidden="true" className="grid-pattern absolute inset-0" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:px-12 lg:pb-36 lg:pt-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2">
              <span className="pulse-dot h-2 w-2 rounded-full bg-cyan-300" />
              <span className="text-[11px] font-medium tracking-wide text-cyan-100 sm:text-xs">
                EXPLORING THE FUTURE OF AI & MEDIA
              </span>
            </div>

            <p className="mb-4 text-sm font-medium tracking-wide text-slate-400">
              Hey, I&apos;m Shayan.
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-[76px]">
              Building AI for a{" "}
              <span className="gradient-text">more informed</span>{" "}
              world.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
              A Media Studies student exploring AI agents, intelligent research,
              and creative automation. I&apos;m building practical digital
              tools that help people investigate information, understand media,
              and turn ideas into reality.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-sm font-bold text-[#050b16] shadow-[0_8px_35px_rgba(34,211,238,0.17)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_45px_rgba(34,211,238,0.3)]"
              >
                Explore My Projects <Arrow />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-4 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                Let&apos;s Connect <Arrow diagonal />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/[0.08] pt-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-lg">🎓</div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">BS Media Studies</div>
                  <div className="mt-1 text-[11px] text-slate-500">University of Sargodha</div>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-white/10 sm:block" />
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-lg">⌘</div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">AI & Open Source</div>
                  <div className="mt-1 text-[11px] text-slate-500">Learning by building</div>
                </div>
              </div>
            </div>
          </div>

          {/* TruthLens hero preview */}
          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            <div aria-hidden="true" className="orb absolute -right-8 -top-10 h-40 w-40 rounded-full bg-cyan-400/[0.10] blur-[70px]" />
            <div aria-hidden="true" className="absolute -bottom-10 -left-12 h-40 w-40 rounded-full bg-blue-500/[0.12] blur-[70px]" />

            <div className="glass glow relative overflow-hidden rounded-2xl p-4 sm:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] text-xl text-cyan-300">◉</div>
                  <div>
                    <div className="text-sm font-bold text-white">TruthLens AI</div>
                    <div className="mt-1 text-[10px] tracking-wide text-slate-500">EVIDENCE INTELLIGENCE</div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-2.5 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-amber-200">Illustrative demo</span>
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-[#080d19]/80 p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-500">Claim under review</span>
                  <span className="text-xs text-cyan-300">01 / 03</span>
                </div>
                <p className="text-sm font-medium leading-6 text-slate-100 sm:text-base sm:leading-7">
                  &ldquo;A widely shared online post claims that a new public
                  policy has already taken effect nationwide.&rdquo;
                </p>
                <div className="mt-3 rounded-lg border border-amber-300/10 bg-amber-300/[0.04] px-3 py-2 text-[10px] leading-5 text-amber-100/70">
                  Fictional example. No real policy or news claim is being
                  verified in this preview.
                </div>
              </div>

              <div className="my-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.045] p-3.5 sm:p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-400/10 text-xs text-emerald-300">↗</span>
                    <span className="text-xs font-semibold text-emerald-200">Supporting</span>
                  </div>
                  <div className="text-2xl font-bold text-white">02</div>
                  <p className="mt-1 text-[10px] leading-4 text-slate-400">Illustrative evidence items</p>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                    <div className="h-full w-2/3 rounded-full bg-emerald-400/70" />
                  </div>
                </div>
                <div className="rounded-xl border border-rose-400/15 bg-rose-400/[0.045] p-3.5 sm:p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-rose-400/10 text-xs text-rose-300">↙</span>
                    <span className="text-xs font-semibold text-rose-200">Contradicting</span>
                  </div>
                  <div className="text-2xl font-bold text-white">02</div>
                  <p className="mt-1 text-[10px] leading-4 text-slate-400">Illustrative evidence items</p>
                  <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                    <div className="h-full w-2/3 rounded-full bg-rose-400/70" />
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-white/[0.025] p-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-400/10 text-xs text-blue-300">01</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-slate-200">Official source review</div>
                    <p className="mt-1 text-[11px] leading-5 text-slate-500">Example: a hypothetical government announcement and its publication date.</p>
                  </div>
                  <span className="mt-1 text-[10px] text-cyan-300">Check ↗</span>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-white/[0.07] bg-white/[0.025] p-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-violet-400/10 text-xs text-violet-300">02</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-slate-200">Independent source comparison</div>
                    <p className="mt-1 text-[11px] leading-5 text-slate-500">Example: a hypothetical report indicating that implementation is pending.</p>
                  </div>
                  <span className="mt-1 text-[10px] text-cyan-300">Check ↗</span>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-cyan-300/15 bg-gradient-to-r from-cyan-300/[0.055] to-blue-400/[0.055] p-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-cyan-300">✳</span>
                  <span className="text-xs font-bold text-cyan-100">Assessment · Unresolved</span>
                </div>
                <p className="mt-2 text-xs leading-6 text-slate-400">
                  The example evidence is mixed. A real assessment would require
                  accessible source documents, publication dates, and
                  corroboration before reaching a conclusion.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-md border border-white/10 px-2 py-1 text-[9px] text-slate-400">Source-linked</span>
                  <span className="rounded-md border border-white/10 px-2 py-1 text-[9px] text-slate-400">Uncertainty-aware</span>
                  <span className="rounded-md border border-white/10 px-2 py-1 text-[9px] text-slate-400">Human review</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-[10px] text-slate-600">
                <span>DESIGNED FOR TRANSPARENT RESEARCH</span>
                <span>DEMO DATA ONLY</span>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-2 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#0c1222]/95 px-4 py-3 shadow-2xl sm:flex lg:-right-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-300/10 text-lg text-cyan-300">⌘</div>
              <div>
                <div className="text-xs font-semibold text-white">Evidence-first AI</div>
                <div className="mt-1 text-[10px] text-slate-500">Built around transparency</div>
              </div>
              <span className="ml-2 h-2 w-2 rounded-full bg-cyan-300" />
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-5 border-y border-white/[0.07] py-8 sm:grid-cols-4 sm:gap-8">
            {[
              ["01", "Flagship AI concept"],
              ["03", "Project showcases"],
              ["∞", "Ideas to explore"],
              ["01", "Open-source journey"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{value}</div>
                <div className="mt-2 text-xs text-slate-500 sm:text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
          <div>
            <SectionLabel>About me</SectionLabel>
            <h2 className="max-w-md text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Where media meets{" "}
              <span className="gradient-text">machine intelligence.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-8 text-slate-400 sm:text-base">
              I&apos;m exploring how AI can make information more accessible,
              research more efficient, and digital creativity more powerful.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] text-xl">🎓</div>
              <div>
                <div className="text-sm font-semibold text-white">University of Sargodha</div>
                <div className="mt-1 text-xs text-slate-500">BS Media Studies · Pakistan</div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10 text-lg text-blue-300">✳</div>
                <h3 className="text-lg font-bold text-white">The intersection I care about</h3>
              </div>
              <p className="text-sm leading-8 text-slate-400">
                Media shapes how we understand the world. AI creates new ways
                to investigate claims, analyze information, and communicate
                ideas. My goal is to bring these fields together by building
                tools that are practical, transparent, and designed around
                real human needs.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Media Intelligence", "Journalism Tech", "Misinformation Research", "AI Agents"].map((tag) => (
                  <span key={tag} className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-slate-300">{tag}</span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                <div className="mb-4 text-xl text-cyan-300">⌘</div>
                <h3 className="text-sm font-bold text-white">Learn by building</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Turning concepts into practical applications, one project at a time.
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                <div className="mb-4 text-xl text-blue-300">◇</div>
                <h3 className="text-sm font-bold text-white">Build in the open</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Learning GitHub workflows and sharing projects with the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative border-y border-white/[0.05] bg-white/[0.012] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionLabel>Skills & toolkit</SectionLabel>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                The tools behind{" "}
                <span className="gradient-text">the ideas.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-8 text-slate-400">
                My learning journey spans modern web development, AI-powered
                workflows, and the research skills needed to build useful media
                technology.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.05] px-4 py-2.5">
                <span className="text-sm">🚀</span>
                <span className="text-xs text-blue-200">Growing through hands-on projects</span>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-sm font-bold text-white">TECHNOLOGIES & INTERESTS</h3>
                <span className="text-[10px] tracking-wider text-slate-500">MY TOOLKIT</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`rounded-lg border px-3.5 py-2.5 text-xs font-medium transition-all hover:-translate-y-0.5 sm:text-sm ${
                      index < 4
                        ? "border-cyan-300/20 bg-cyan-300/[0.06] text-cyan-100 hover:border-cyan-300/40"
                        : index < 8
                        ? "border-blue-300/15 bg-blue-300/[0.045] text-blue-100 hover:border-blue-300/35"
                        : "border-white/[0.08] bg-white/[0.025] text-slate-300 hover:border-white/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8 border-t border-white/[0.07] pt-6">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  Areas of focus: AI-assisted research, web applications, creative tools
                </div>
                <p className="mt-3 text-xs leading-6 text-slate-600">
                  Technologies represent areas of learning and project focus,
                  not a claim of professional mastery in every tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-24 sm:py-32">
        <div aria-hidden="true" className="dot-grid absolute right-0 top-24 h-48 w-48 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Selected projects</SectionLabel>
              <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
                Ideas with a purpose.{" "}
                <span className="gradient-text">Tools with potential.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                A growing collection of AI-powered concepts focused on
                information, media research, and creative workflows.
              </p>
            </div>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 self-start rounded-lg border border-white/10 px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200 sm:self-auto"
            >
              All repositories <Arrow diagonal />
            </a>
          </div>

          {/* Featured project */}
          <article className="project-card relative mb-6 overflow-hidden rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.055] via-[#0b1020] to-blue-500/[0.045]">
            <div aria-hidden="true" className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-cyan-300/[0.07] blur-[100px]" />
            <div className="relative grid gap-8 p-6 sm:p-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-12">
              <div className="flex flex-col justify-center">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="rounded-md border border-cyan-300/25 bg-cyan-300/[0.08] px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-cyan-200">01 / FLAGSHIP</span>
                  <span className="rounded-md border border-amber-300/15 bg-amber-300/[0.05] px-3 py-1.5 text-[10px] font-medium text-amber-200">Concept · In Development</span>
                </div>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] text-3xl text-cyan-200">◉</div>
                  <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">TruthLens AI</h3>
                </div>
                <p className="mb-5 text-sm font-medium text-cyan-200">See the claim. Examine the evidence.</p>
                <p className="max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
                  An AI-powered news research and verification assistant that
                  investigates claims, gathers information from multiple
                  sources, compares supporting and contradicting evidence, and
                  produces transparent reports with source links.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    ["⌕", "Claim investigation"],
                    ["⇄", "Evidence comparison"],
                    ["↗", "Source-linked reports"],
                    ["◇", "Uncertainty awareness"],
                  ].map(([icon, label]) => (
                    <div key={label} className="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-3">
                      <span className="text-lg text-cyan-300">{icon}</span>
                      <span className="text-xs text-slate-300">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "AI Agents", "Web Research", "Tailwind CSS"].map((tag) => (
                    <span key={tag} className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-[10px] text-slate-400">{tag}</span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/yourusername/truthlens-ai"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-[#07101d] transition hover:bg-cyan-200"
                  >
                    <span>⌘</span> GitHub Repository <Arrow diagonal />
                  </a>
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200"
                  >
                    Discuss the project <Arrow />
                  </a>
                </div>
              </div>

              {/* Project evidence interface */}
              <div className="relative flex items-center">
                <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#070b16]/90 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-rose-400/70" />
                      <span className="h-2 w-2 rounded-full bg-amber-300/70" />
                      <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
                      <span className="ml-3 text-[10px] text-slate-400">truthlens / research report</span>
                    </div>
                    <span className="text-[10px] text-slate-600">PREVIEW</span>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="mb-5">
                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Research workspace</div>
                      <div className="rounded-lg border border-white/[0.09] bg-white/[0.025] p-3.5">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span className="text-cyan-300">⌕</span>
                          <span>Example claim for investigation...</span>
                        </div>
                        <p className="mt-2 text-xs leading-6 text-slate-200">
                          &ldquo;A hypothetical city policy is already active across every district.&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-200">Evidence landscape</span>
                      <span className="rounded-md bg-amber-300/[0.08] px-2 py-1 text-[9px] text-amber-200">Illustrative only</span>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-lg border border-emerald-300/15 bg-emerald-300/[0.035] p-3.5">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-emerald-200">Supporting evidence</span>
                          <span className="text-[10px] text-emerald-300">02 items</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[10px] text-slate-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                            Hypothetical official announcement
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-slate-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                            Example publication excerpt
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border border-rose-300/15 bg-rose-300/[0.035] p-3.5">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-rose-200">Contradicting evidence</span>
                          <span className="text-[10px] text-rose-300">02 items</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-[10px] text-slate-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
                            Hypothetical phased rollout notice
                          </div>
                          <div className="flex items-center gap-2 text-[10px] text-slate-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
                            Example implementation timeline
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 rounded-lg border border-blue-300/15 bg-blue-300/[0.04] p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-blue-300">✳</span>
                        <span className="text-xs font-semibold text-blue-100">Provisional assessment</span>
                      </div>
                      <p className="mt-2 text-[11px] leading-6 text-slate-400">
                        Mixed example evidence. Confirm the original documents,
                        dates, jurisdiction, and independent reporting before
                        making a factual determination.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="rounded border border-white/10 px-2 py-1 text-[9px] text-slate-400">Sources needed</span>
                        <span className="rounded border border-white/10 px-2 py-1 text-[9px] text-slate-400">Review required</span>
                      </div>
                    </div>

                    <p className="mt-4 text-[9px] leading-4 text-slate-600">
                      UI concept only. All claims and evidence labels are fictional
                      placeholders, not retrieved sources or verification results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(1).map((project) => (
              <article key={project.number} className="project-card glass flex flex-col rounded-2xl p-6 sm:p-8">
                <div className="mb-8 flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.09] bg-gradient-to-br ${project.color} bg-clip-text text-2xl text-transparent`}>
                    <span className={`bg-gradient-to-br ${project.color} bg-clip-text text-transparent`}>{project.icon}</span>
                  </div>
                  <span className="rounded-md border border-white/[0.08] px-2.5 py-1.5 text-[10px] text-slate-500">{project.number} / 03</span>
                </div>

                <div className="mb-2 text-[10px] font-semibold tracking-[0.17em] text-slate-500">{project.label}</div>
                <h3 className="text-2xl font-bold tracking-tight text-white">{project.name}</h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] text-slate-400">{tag}</span>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-white/[0.07] pt-5">
                  <span className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                    {project.status}
                  </span>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-200 transition-colors hover:text-cyan-300"
                  >
                    <span>View on GitHub</span> <Arrow diagonal />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-white/[0.07] bg-white/[0.015] px-5 py-4">
            <p className="text-xs leading-6 text-slate-500">
              <span className="mr-2 font-semibold text-slate-300">Project status:</span>
              TruthLens AI is the flagship concept. MediaMind and ClipForge AI
              are project concepts. Replace the placeholder repository links
              with actual repositories as projects are developed and published.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative border-y border-white/[0.06] bg-white/[0.015] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] text-2xl text-cyan-300">✳</div>
          <SectionLabel>My approach</SectionLabel>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Useful AI is more than intelligence. It&apos;s{" "}
            <span className="gradient-text">trust, clarity, and impact.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            I want to build technology that helps people think more clearly,
            research more responsibly, and create things that genuinely help
            others. That means transparent sources, honest uncertainty, and
            tools designed for real-world use.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {["Evidence over assumptions", "Transparency by design", "Human-centered AI", "Open-source learning"].map((item) => (
              <span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs text-slate-300">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24 sm:py-32">
        <div aria-hidden="true" className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-14 text-center">
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Have an idea? Let&apos;s{" "}
              <span className="gradient-text">build something.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
              Interested in AI research, media technology, open-source
              collaboration, or a creative project? I&apos;d love to hear what
              you&apos;re working on.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div className="space-y-5">
              <div className="glass rounded-2xl p-6 sm:p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-xl text-cyan-200">✉</div>
                <h3 className="text-lg font-bold text-white">Start a conversation</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Share an idea, ask about a project, or explore a potential
                  collaboration.
                </p>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="group mt-5 inline-flex max-w-full items-center gap-2 break-all text-sm font-medium text-cyan-200 hover:text-cyan-100"
                >
                  <span>{email}</span>
                  <span aria-live="polite" className="shrink-0 text-xs text-slate-500">
                    {copied ? "Copied!" : "Copy ↗"}
                  </span>
                </button>
                <p className="mt-2 text-[10px] leading-5 text-slate-600">
                  Replace this example email with your actual contact address.
                </p>
              </div>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-cyan-300/25"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-xl">⌘</div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white">Find me on GitHub</h3>
                  <p className="mt-1 text-xs text-slate-500">Explore code and open-source projects</p>
                </div>
                <span className="text-lg text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-cyan-300">↗</span>
              </a>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <span className="text-cyan-300">◎</span>
                  Open to learning and collaboration
                </div>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Especially interested in AI agents, journalism innovation,
                  misinformation research, and practical web applications.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8">
              <div className="mb-7">
                <h3 className="text-lg font-bold text-white">Send a message</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Fill in the details below. Your email app will open with a
                  prepared message for you to review and send.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-medium text-slate-300">Your name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/[0.09] bg-[#080d19]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-medium text-slate-300">Your email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/[0.09] bg-[#080d19]/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-xs font-medium text-slate-300">What&apos;s this about?</label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full appearance-none rounded-xl border border-white/[0.09] bg-[#080d19]/80 px-4 py-3.5 text-sm text-slate-200 outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10"
                >
                  <option>Project collaboration</option>
                  <option>AI and media research</option>
                  <option>Open-source contribution</option>
                  <option>Freelance opportunity</option>
                  <option>Something else</option>
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-xs font-medium text-slate-300">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me a little about your idea..."
                  className="w-full resize-y rounded-xl border border-white/[0.09] bg-[#080d19]/80 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10"
                />
              </div>

              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-sm font-bold text-[#06101d] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_35px_rgba(34,211,238,0.2)]"
              >
                Prepare Email <Arrow />
              </button>
              <p className="mt-4 text-center text-[10px] leading-5 text-slate-600">
                This form opens your default email application. It does not
                transmit or store messages on a server.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.06] font-bold text-cyan-300">S.</div>
              <div>
                <div className="text-sm font-bold text-white">Shayan<span className="text-cyan-300">.dev</span></div>
                <div className="mt-1 text-[10px] tracking-wider text-slate-600">BUILDING WITH PURPOSE</div>
              </div>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-500">
              <a href="#about" className="transition hover:text-cyan-300">About</a>
              <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
              <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
              <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">GitHub ↗</a>
            </div>

            <a href="#home" className="flex items-center gap-2 text-xs text-slate-500 transition hover:text-cyan-300">
              Back to top <span>↑</span>
            </a>
          </div>

          <div className="mt-7 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-center sm:flex-row sm:text-left">
            <p className="text-[11px] text-slate-600">© {new Date().getFullYear()} Shayan. Built with curiosity and code.</p>
            <p className="text-[11px] text-slate-600">AI for research. Technology for people. Ideas without limits.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
