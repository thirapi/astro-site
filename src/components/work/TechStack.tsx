import TechStackData from "@/data/tech-stack.json";
import { iconMap } from "@/lib/icon-map";

export function TechStack() {
  return (
    <section className="my-4">
      <h2 className="text-2xl font-semibold mb-4">What I Use</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {TechStackData.map(({ name, icon }) => {
          const Icon = iconMap[icon];
          return (
            <div
              key={name}
              className="flex items-center gap-2 hover:bg-muted/60 transition-colors duration-200 px-3 py-2 rounded-md shadow-sm" 
            >
              {Icon && <Icon className="text-xl" />}
              <span className="text-sm">{name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
