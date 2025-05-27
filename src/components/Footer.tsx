export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Systems Design Book Club. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/PiolineC/Systems-Design-Club"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600"
          >
            GitHub
          </a>
          <a href="/contact" className="hover:text-indigo-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
