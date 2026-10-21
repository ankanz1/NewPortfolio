import Hero from '@/components/Hero';
import Dock from '@/components/Dock';
import AchievementList from '@/components/AchievementList';
import OSSGrid from '@/components/OSSGrid';
import Guestbook from '@/components/Guestbook';
import Friends from '@/components/Friends';

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      
      <section id="work" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Work</h2>
        <div className="space-y-8">
          <div className="border-l-2 border-zinc-800 pl-6 py-1">
            <h3 className="text-xl font-semibold">Workers IO (YC F26)</h3>
            <p className="text-zinc-400">Developer Relations Engineer • 2026 - Present</p>
          </div>
          <div className="border-l-2 border-zinc-800 pl-6 py-1">
            <h3 className="text-xl font-semibold">Google Summer of Code 2026</h3>
            <p className="text-zinc-400">Open Source Contributor • 2026</p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform font-bold">
              BS
            </div>
            <h3 className="text-xl font-semibold mb-2">Breakscale</h3>
            <p className="text-zinc-400 text-sm mb-4">System design simulator for high-scale architectures.</p>
            <a href="#" className="text-white text-sm font-medium hover:underline">View Project →</a>
          </div>
          <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center mb-4 group-hover:scale-110 transition-transform font-bold">
              GT
            </div>
            <h3 className="text-xl font-semibold mb-2">Gyotaku</h3>
            <p className="text-zinc-400 text-sm mb-4">Searchable screenshots and digital asset manager.</p>
            <a href="#" className="text-white text-sm font-medium hover:underline">View Project →</a>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Highlights</h2>
        <AchievementList />
      </section>

      <section id="oss" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">OSS Contributions</h2>
        <OSSGrid />
      </section>

      <section id="guestbook" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Guestbook</h2>
        <Guestbook />
      </section>

      <section id="friends" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Friends</h2>
        <Friends />
      </section>

      <footer className="py-12 text-center text-zinc-600 text-xs border-t border-zinc-900">
        © {new Date().getFullYear()} Xevrion. Built with Next.js & Framer Motion.
      </footer>

      <Dock />
    </main>
  );
}
