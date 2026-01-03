export const MemberCard = ({ member }) => (
  <div className="group relative bg-zinc-900 border border-zinc-800 hover:border-pfa-gold transition-all duration-500 overflow-hidden">
    <div className="aspect-[3/4] overflow-hidden relative">
      <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700" />
      <div className="absolute top-0 right-0 bg-pfa-red text-white px-4 py-2 font-black italic text-[10px] -skew-x-12 translate-x-2 translate-y-2">{member.pos}</div>
    </div>
    <div className="p-6">
      <h3 className="font-['Teko'] text-3xl font-bold uppercase italic leading-none group-hover:text-pfa-gold transition">{member.name}</h3>
      <p className="text-zinc-500 text-[10px] font-bold tracking-[0.2em] mt-2 uppercase">{member.info}</p>
    </div>
    <div className="h-1 w-0 group-hover:w-full bg-pfa-gold transition-all duration-500" />
  </div>
);