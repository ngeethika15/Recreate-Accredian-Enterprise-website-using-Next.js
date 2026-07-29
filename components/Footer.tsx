import { Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <Rocket className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-lg text-white">Accredian Enterprise</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}