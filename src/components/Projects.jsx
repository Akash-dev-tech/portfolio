import { projectsData } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black text-white font-mono">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end gap-4 mb-16">
          <h2 className="text-6xl font-black tracking-tighter uppercase">Registry</h2>
          <span className="text-emerald-500 mb-2 text-xs">[ LOGIC_SYSTEM_V2.0 ]</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1"> {/* Tight gap for brutalist look */}
          {projectsData.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group border border-zinc-800 bg-zinc-950 p-8 hover:bg-zinc-900 transition-all duration-300 relative overflow-hidden"
            >
              {/* Animated Accent Line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                <span className="text-[10px] text-zinc-500 border border-zinc-800 px-2 py-1">
                  {project.status}
                </span>
              </div>

              <p className="text-zinc-400 text-sm mb-8 leading-relaxed max-w-md">
                {project.description}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-[10px] bg-zinc-900 text-zinc-300 px-2 py-1 border border-zinc-800">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-zinc-900 flex justify-between items-center text-[10px]">
                  <span className="text-emerald-500 uppercase tracking-widest">Logic: {project.logicLayer}</span>
                  <button className="text-white hover:text-emerald-500 transition-colors uppercase underline underline-offset-8">
                    View_Source _
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;