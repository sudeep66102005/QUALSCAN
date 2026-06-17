interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="card-glass text-center group">
      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <p className="text-2xl md:text-3xl font-bold text-white mb-1">{value}</p>
      <p className="text-sm text-navy-300">{label}</p>
    </div>
  );
}
