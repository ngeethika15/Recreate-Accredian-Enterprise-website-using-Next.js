import { featuresData } from "@/data/content";
import { Target, Award, BarChart3 } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="h-8 w-8 text-blue-600" />,
  Award: <Award className="h-8 w-8 text-blue-600" />,
  BarChart3: <BarChart3 className="h-8 w-8 text-blue-600" />,
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Enterprise Leaders Choose Us</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to accelerate organizational growth and technology adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="p-3 bg-blue-50 rounded-xl w-fit mb-6">{iconMap[feature.icon]}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}