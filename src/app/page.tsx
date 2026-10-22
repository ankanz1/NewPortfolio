import Hero from '@/components/Hero';
import Dock from '@/components/Dock';
import AchievementList from '@/components/AchievementList';
import OSSGrid from '@/components/OSSGrid';
import Guestbook from '@/components/Guestbook';
import Friends from '@/components/Friends';
import StatTile from '@/components/StatTile';
import FooterYear from '@/components/FooterYear';

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatTile 
            label="Education" 
            value="B.Tech CSE" 
            description="Sister Nivedita University" 
          />
          <StatTile 
            label="Focus" 
            value="AI & Creative" 
            description="Combining ML with Interactive Design" 
          />
          <StatTile 
            label="Interests" 
            value="Web3 / 3D" 
            description="Exploring Decentralized Systems" 
          />
        </div>
      </section>

      <section id="work" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 tracking-tighter text-foreground">Journey</h2>
        <div className="space-y-8">
          <div className="border-l-2 border-foreground/10 pl-6 py-1 relative">
            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-foreground shadow-[0_0_10px_rgba(0,0,0,0.2)]" />
            <h3 className="text-xl font-semibold text-foreground">B.Tech in Computer Science & Engineering</h3>
            <p className="text-muted">Sister Nivedita University • 2024 - 2028</p>
          </div>
          <div className="border-l-2 border-foreground/10 pl-6 py-1 relative">
            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-zinc-400" />
            <h3 className="text-xl font-semibold text-foreground">Aperture Alchemist</h3>
            <p className="text-muted">Coordinator / Secretary • Photography Club</p>
          </div>
          <div className="border-l-2 border-foreground/10 pl-6 py-1 relative">
            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-zinc-400" />
            <h3 className="text-xl font-semibold text-foreground">Hackathons & Events</h3>
            <p className="text-muted">Hack4Bengal 4.0, Build On Aptos, Google Solution Challenge</p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 tracking-tighter text-foreground">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-foreground/20 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform font-bold">
              MA
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Marchander AI</h3>
            <p className="text-muted text-sm mb-4 leading-relaxed">An AI-powered conversational shopping negotiation concept where prices are negotiated in natural language.</p>
            <a href="#" className="text-foreground text-sm font-medium hover:underline inline-flex items-center gap-1">
              View Concept <span className="text-xs">→</span>
            </a>
          </div>
          <div className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-foreground/20 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform font-bold">
              DR
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Dr. Radar</h3>
            <p className="text-muted text-sm mb-4 leading-relaxed">Preventive healthcare platform using a hybrid quantum-classical ML pipeline for ECG heartbeat classification.</p>
            <a href="#" className="text-foreground text-sm font-medium hover:underline inline-flex items-center gap-1">
              View Concept <span className="text-xs">→</span>
            </a>
          </div>
          <div className="p-6 rounded-3xl bg-foreground/[0.02] border border-foreground/10 hover:border-foreground/20 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform font-bold">
              CL
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Circlo</h3>
            <p className="text-muted text-sm mb-4 leading-relaxed">A peer-to-peer cultural and heritage rental marketplace built using SAP HANA Cloud Database.</p>
            <a href="#" className="text-foreground text-sm font-medium hover:underline inline-flex items-center gap-1">
              View Project <span className="text-xs">→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 tracking-tighter text-foreground">Highlights</h2>
        <AchievementList />
      </section>

      <section id="oss" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 tracking-tighter text-foreground">Technical Stack</h2>
        <OSSGrid />
      </section>

      <section id="guestbook" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 tracking-tighter text-foreground">Guestbook</h2>
        <Guestbook />
      </section>

      <section id="friends" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 tracking-tighter text-foreground">Network</h2>
        <Friends />
      </section>

      <footer className="py-24 text-center text-muted text-xs border-t border-foreground/5">
        <p>© <FooterYear /> Ankan Mukherjee. Creative Software Engineer.</p>
      </footer>

      <Dock />
    </main>
  );
}
