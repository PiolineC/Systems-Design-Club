type ReferenceCardProps = {
  title: string;
  author: string;
  link: string;
};


export default function ReferenceCard({ title, author, link }: ReferenceCardProps) {
  return (
<li className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-left hover:ring-2 hover:ring-indigo-500 transition-shadow duration-200">
      <h3 className="text-lg font-bold text-gray-100">{title}</h3>
      <p className="text-sm text-gray-400 mb-3">{author}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline font-medium"
      >
        View Resource →
      </a>
    </li>
  );
}
