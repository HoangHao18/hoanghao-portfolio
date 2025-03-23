import { TProject } from "../types/types"

type TProjectCardProps = {
    project: TProject
}
export const ProjectCard = ({project}: TProjectCardProps) => {

    return (
        <div key={project.id} 
        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">

            <div className="h-52 md:h-72 rounded-t-xl relative group bg-cover bg-center"
                style={{backgroundImage: `url(${project.image})`}}
            >
                {/* <div className="absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-all duration-500"></div> */}
            </div>
            <h3 className="text-xl font-bold my-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {
                    project.techs.map((tech,key)=>(
                        <span 
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        {tech}
                    </span>
                    ))
                }
            </div>
            <div className="flex justify-between items-center">             
                <a href={project.linkSource} className="border boder-blue-500/50 text-blue-500 py-2 px-6 rounded-full font-medium transition-all duration-200  hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 hover:text-blue-300">Source</a>
                <a href={project.linkDemo} className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
            </div>
        </div>
    )
}