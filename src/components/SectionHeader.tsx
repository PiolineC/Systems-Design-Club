
export type SectionHeaderProps = {
  title: string;
  description: React.ReactNode;
  className?: string;
};

export default function SectionHeader({
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <section className={`max-w-3xl mx-auto px-4 py-6 text-center text-gray-300 ${className}`}>
      <h2 className="text-4xl font-extrabold text-indigo-400 mb-2">{title}</h2>
      <p className="text-lg leading-relaxed">{description}</p>
    </section>
  );
}
