"use client";

import { motion } from "framer-motion";
import { MapPin, Star, Flag, Compass, ArrowRight, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Top red stripe */}
      <div className="h-3 bg-[#c41e3a]" />
      <div className="h-2 bg-[#1a2a4a]" />

      {/* ===== NAV ===== */}
      <nav className="border-b-4 border-[#1a2a4a] bg-[#f5f0e6]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-display text-xl font-bold tracking-tight text-[#1a2a4a]">
            AMERICANA<span className="text-[#c41e3a]">.</span>DREAM
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-[#1a2a4a]/60">
            <a href="#story" className="hover:text-[#c41e3a] transition">Story</a>
            <a href="#values" className="hover:text-[#c41e3a] transition">Values</a>
            <a href="#journey" className="hover:text-[#c41e3a] transition">Journey</a>
          </div>
          <a
            href="https://github.com/Amirhosseinbakhshi2011"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-[#1a2a4a] hover:text-[#c41e3a] transition"
          >
            <Github size={15} />
            GitHub
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative px-6 pt-20 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Vintage badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border-2 border-[#1a2a4a] bg-[#e8dcc8] text-xs font-bold tracking-widest text-[#1a2a4a] uppercase"
          >
            <Flag size={12} className="text-[#c41e3a]" />
            Established 2010 · Iran → USA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-[#1a2a4a] max-w-3xl distressed"
          >
            The American
            <br />
            <span className="text-[#c41e3a]">Dream</span>
            <br />
            Still Lives.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 text-lg md:text-xl text-[#1a2a4a]/70 max-w-2xl leading-relaxed"
          >
            Built by a 16-year-old full-stack developer from Iran who believes
            in hard work, mathematics, code, and the classic American promise:
            if you build it, opportunity follows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#journey"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a2a4a] text-[#f5f0e6] font-bold text-sm tracking-wide hover:bg-[#c41e3a] transition"
            >
              SEE THE JOURNEY
              <ArrowRight size={16} />
            </a>
            <a
              href="https://github.com/Amirhosseinbakhshi2011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1a2a4a] text-[#1a2a4a] font-bold text-sm tracking-wide hover:bg-[#1a2a4a] hover:text-[#f5f0e6] transition"
            >
              GITHUB
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== RED STRIPE DIVIDER ===== */}
      <div className="h-4 bg-[#c41e3a]" />
      <div className="h-2 bg-[#1a2a4a]" />

      {/* ===== STORY ===== */}
      <section id="story" className="px-6 py-20 bg-[#e8dcc8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1a2a4a] mb-12">
            A Classic Story
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "The Beginning",
                text: "Born in Iran. Grew up with numbers, code, and a quiet obsession with the idea of America.",
              },
              {
                title: "The Craft",
                text: "Learned Next.js, React, Laravel, and mathematics the hard way — by building real things.",
              },
              {
                title: "The Destination",
                text: "The United States. Not for tourism. For work, scale, freedom, and building something that lasts.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f5f0e6] border-2 border-[#1a2a4a] p-6 shadow-[4px_4px_0_#1a2a4a]"
              >
                <div className="text-xs font-bold tracking-widest text-[#c41e3a] mb-3 uppercase">
                  Chapter {i + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-[#1a2a4a] mb-3">
                  {card.title}
                </h3>
                <p className="text-[#1a2a4a]/70 leading-relaxed text-sm">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section id="values" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Star className="text-[#c41e3a]" size={22} />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1a2a4a]">
              Old-School Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Compass, title: "Discipline", desc: "No shortcuts. Daily work. Long horizon." },
              { icon: MapPin, title: "Direction", desc: "Clear goal: United States of America." },
              { icon: Flag, title: "Independence", desc: "Build yourself first. Then build everything else." },
              { icon: Star, title: "Craft", desc: "Code and mathematics treated as serious crafts." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-5 border-2 border-[#1a2a4a]/20 bg-[#f5f0e6] hover:border-[#1a2a4a] transition"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#1a2a4a] text-[#f5f0e6] shrink-0">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a2a4a]">{item.title}</h3>
                  <p className="text-sm text-[#1a2a4a]/60 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JOURNEY ===== */}
      <section id="journey" className="px-6 py-20 bg-[#1a2a4a] text-[#f5f0e6]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 border border-[#f5f0e6]/30 text-xs font-bold tracking-widest mb-8 uppercase">
              The Road Ahead
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
              From a small room in Iran
              <br />
              to the open road of
              <br />
              <span className="text-[#c41e3a]">America</span>
            </h2>

            <p className="text-[#f5f0e6]/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              This is not a tourist story. This is a builder’s story.
              Code by day. Mathematics by night. One clear destination.
              The classic American Dream — earned, not given.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium tracking-wide">
              <span className="px-4 py-2 border border-[#f5f0e6]/30">NEXT.JS</span>
              <span className="px-4 py-2 border border-[#f5f0e6]/30">REACT</span>
              <span className="px-4 py-2 border border-[#f5f0e6]/30">LARAVEL</span>
              <span className="px-4 py-2 border border-[#f5f0e6]/30">MATHEMATICS</span>
              <span className="px-4 py-2 border border-[#f5f0e6]/30">USA</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="px-6 py-10 border-t-4 border-[#1a2a4a] bg-[#e8dcc8]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#1a2a4a]/60">
          <div className="font-medium">
            Built with old-school grit by Amirhossein Bakhshi
          </div>
          <div className="flex items-center gap-4">
            <span>Iran → USA</span>
            <span className="text-[#c41e3a]">●</span>
            <span>2026</span>
          </div>
        </div>
      </footer>

      {/* Bottom stripes */}
      <div className="h-2 bg-[#1a2a4a]" />
      <div className="h-3 bg-[#c41e3a]" />
    </main>
  );
}
