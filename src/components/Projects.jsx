import { projectsData } from "../data/projects"; 

const Projects = () => {
  return (
    <section>
      <h2>My Projects</h2>
      
      {/* We open curly braces to write JavaScript inside JSX */}
      {projectsData.map((project) => (
        
        /* The outermost element MUST have the key prop */
        <div key={project.id}>
            
          {/* We evaluate the object properties using curly braces */}
          <h3>{project.title}</h3>
          
          {/* TASK: Output the description here */}
          <p>{project.description}</p>
          
          {/* TASK: Output the techStack here. (Hint: you can use .join(', ') to turn the techStack array into a readable string) */}
          <p>Tech Stack: {project.techStack.join(', ')}</p>

        </div>
        
      ))}
      
    </section>
  );
};

export default Projects;