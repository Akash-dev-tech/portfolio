import { projectsData } from "../data/projects"; 
import {motion} from "framer-motion";
const Projects = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
     <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
        
        /* The outermost element MUST have the key prop */
        <motion.div viewport={{ once: true }} transition={{ duration: 0.5, delay: project.id * 0.1 }} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} key={project.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            
          {/* We evaluate the object properties using curly braces */}
          <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
          
          {/* TASK: Output the description here */}
          <p className="text-gray-600 mb-4">{project.description}</p>
          
          {/* TASK: Output the techStack here. (Hint: you can use .join(', ') to turn the techStack array into a readable string) */}
          <p className="text-sm font-medium text-blue-600 bg-blue-50 inline-block px-3 py-1 rounded-full">Tech Stack: {project.techStack.join(', ')}</p>

        </motion.div>
        
      ))}
      </div>
      
      
    </section>
  );
};

export default Projects;