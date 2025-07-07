type ReferenceCardProps = {
  title: string;
  author: string;
  link: string;
};


export default function ReferenceCard({ title, author, link }: ReferenceCardProps) {
  return (
    <li className="border rounded-lg p-4 hover:shadow-lg transition">
      <h3 className="font-medium text-gray-300">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{author}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        View Resource →
      </a>
    </li>
  );
}
