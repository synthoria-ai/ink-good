'use client';

import { Music, Gamepad, Skull, Moon, GraduationCap, Heart } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  color: 'pink' | 'green';
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Hanna Sop-Choi',
    role: 'K-Pop Curator',
    specialty: 'Korean Wave Culture',
    image: 'https://images.pexels.com/photos/3765550/pexels-photo-3765550.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: Music,
    color: 'pink',
  },
  {
    id: 2,
    name: 'Aria Lee',
    role: 'Gaming Expert',
    specialty: 'Esports & Tech',
    image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: Gamepad,
    color: 'green',
  },
  {
    id: 3,
    name: 'Luna Maher',
    role: 'Alternative Style',
    specialty: 'Dark Fashion',
    image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: Skull,
    color: 'pink',
  },
  {
    id: 4,
    name: 'Sekuri Moon',
    role: 'Occult Vibes',
    specialty: 'Mystical Arts',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: Moon,
    color: 'green',
  },
  {
    id: 5,
    name: 'Kaia Schmidt',
    role: 'College Scene',
    specialty: 'Campus Culture',
    image: 'https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: GraduationCap,
    color: 'pink',
  },
  {
    id: 6,
    name: 'Zara Rodriguez',
    role: 'Fitness Lifestyle',
    specialty: 'Wellness & Energy',
    image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=400',
    icon: Heart,
    color: 'green',
  },
];

function TeamCard({ member }: { member: TeamMember }) {
  const Icon = member.icon;
  const borderColor = member.color === 'pink' ? 'border-neon-pink' : 'border-acid-green';
  const iconColor = member.color === 'pink' ? 'text-neon-pink' : 'text-acid-green';
  const bgHoverColor = member.color === 'pink' ? 'group-hover:border-acid-green' : 'group-hover:border-neon-pink';

  return (
    <div className={`group relative border-2 ${borderColor} ${bgHoverColor} transition-all duration-300 overflow-hidden cursor-pointer`}>
      <div className="aspect-[3/4] relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>

        <div className="absolute top-4 right-4">
          <div className={`bg-black border-2 ${borderColor} p-3 ${member.color === 'pink' ? 'group-hover:bg-neon-pink' : 'group-hover:bg-acid-green'} group-hover:border-black transition-all`}>
            <Icon className={`w-6 h-6 ${iconColor} group-hover:text-black transition-colors`} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-black text-white uppercase mb-1 tracking-tight">{member.name}</h3>
          <p className={`${iconColor} font-bold uppercase text-sm mb-1 tracking-wider`}>{member.role}</p>
          <p className="text-gray-300 text-xs uppercase tracking-wide">{member.specialty}</p>
        </div>
      </div>

      <div className={`absolute inset-0 ${member.color === 'pink' ? 'bg-neon-pink' : 'bg-acid-green'} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}></div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="py-24 px-4 bg-black border-t-4 border-neon-pink">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-acid-green glow-green uppercase mb-4">
            The Crew
          </h2>
          <p className="text-neon-pink text-xl uppercase tracking-wider">Curators of Chaos</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
