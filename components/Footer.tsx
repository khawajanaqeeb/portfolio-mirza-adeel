export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-2xl font-bold text-white">MAB<span className="text-blue-600">.</span></span>
          <p className="mt-2 text-sm">Expertise in Driving Results.</p>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Mirza Adeel Baig. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
