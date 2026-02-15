import Hero from '@/components/Hero';
import SmartGrid from '@/components/SmartGrid';
import TeamSection from '@/components/TeamSection';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <SmartGrid />
      <TeamSection />

      <footer className="bg-black border-t-2 border-acid-green py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neon-pink font-black text-3xl uppercase mb-4 glow-pink">INKGOOD.</p>
          <p className="text-white uppercase tracking-widest text-sm mb-2">Digital Grunge Culture</p>
          <p className="text-acid-green text-xs uppercase tracking-wider">Est. 2026 - All Chaos Reserved</p>
        </div>
      </footer>
    </main>
  );
}
