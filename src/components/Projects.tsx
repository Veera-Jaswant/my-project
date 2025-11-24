import { useState } from "react";

const Project = () => {
    const gradients: string[] = [
        // Emerald Glow
        "from-emerald-400 via-green-500 to-lime-500",

        // Royal Blue Burst
        "from-blue-600 via-indigo-500 to-purple-600",

        // Cyber Neon
        "from-fuchsia-500 via-purple-600 to-blue-600",

        // Lava Heat
        "from-red-600 via-orange-600 to-yellow-500",

        // Galaxy Mix
        "from-purple-700 via-fuchsia-500 to-indigo-600",

        // Ice Mint
        "from-teal-300 via-cyan-300 to-sky-400",

        // Forest Breeze
        "from-green-700 via-emerald-500 to-teal-500",

        // Peach Candy
        "from-pink-300 via-rose-400 to-orange-300",

        // Royal Gold
        "from-amber-400 via-yellow-500 to-orange-600",

        // Deep Ocean
        "from-sky-700 via-blue-700 to-indigo-700",

        // Aqua Lime Pop
        "from-lime-300 via-teal-300 to-cyan-400",

        // Midnight Neon
        "from-black via-purple-700 to-fuchsia-600",

        // Steel Wave
        "from-slate-500 via-slate-600 to-slate-700",

        // Frozen Rose
        "from-rose-300 via-pink-400 to-purple-400",

        // Electric Sunset
        "from-violet-600 via-pink-500 to-orange-500"
    ];

    type Project = { title: string, subtitle: string, techStack: string[], client: string, duration: string }

    const projects: Project[] = [
        {
            title: "OneDAT",
            subtitle: "Migrated legacy WPF applications to a unified React.js and ASP.NET Core Web API platform, reducing load times by 30% and improving cross-device accessibility, built secure, low-latency REST APIs with Ocelot API Gateway while integrating Azure Cosmos DB and Azure Functions for high-performance and reliable data handling, and implemented proactive logging and monitoring using Azure Monitor and Application Insights, reducing system downtime by 40%.",
            techStack: ["C#", ".Net Core Web Api", "React"],
            client: "Honeywell",
            duration: "Sep 2021 – Feb 2023"
        },
        {
            title: "NextGen HMI",
            subtitle: "Developed an interactive React HMI web application with 300+ real-time widgets, enhancing operator efficiency by 30% and optimizing UI performance through lazy loading and efficient DOM updates, reducing rendering delays by 25%, built scalable .NET Core Web APIs for device data ingestion and processing using Kafka-based event streaming, and achieved 85% test coverage with unit and integration testing, reducing defects by 30%.",
            techStack: ["C#", ".Net Core Web Api", "Angular"],
            client: "CCC Global",
            duration: "Mar 2023 – Dec 2023"
        },
        {
            title: "Graduate Teaching Assistant",
            subtitle: "Developed an interactive React HMI web application with 300+ real-time widgets, enhancing operator efficiency by 30% and optimizing UI performance through lazy loading and efficient DOM updates, reducing rendering delays by 25%, built scalable .NET Core Web APIs for device data ingestion and processing using Kafka-based event streaming, and achieved 85% test coverage with unit and integration testing, reducing defects by 30%.",
            techStack: ["React", "HTML", "CSS", "Computer Networks"],
            client: "UCF",
            duration: "For 2 Semesters"
        },
        

    ]

    const [selectedProject, setSelectedProject] = useState<string>("OneDAT");
    return (
        <div className="relative h-screen w-screen flex flex-col">
            <div className="flex-1">
            {
                (() =>{
                   const project: Project = projects.find((project) => project.title == selectedProject);
                   if(!project) return null;

                   return(
                    <div className="p-3">
                        <div className="flex justify-between">
                            <h1 className="text-6xl font-bold">{project.title}</h1>
                        <div className="flex gap-4 items-end font-bold text-gray-300">
                        <div>{project.client}</div>
                        <div>{project.duration}</div>
                        </div>
                        </div>
                        <div>
                            {project.subtitle}
                        </div>
                    </div>
                   )
                    
                })()
            }
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-500 flex justify-center gap-10 px-5 py-3 rounded-full">
                {projects.map((project) => (
                    <div className="" onClick={() => setSelectedProject(project.title)}>{project.title}</div>
                ))}
            </div>
        </div>
        // <div className="h-screen w-screen flex flex-col">
        //     <div className="text-3xl text-center font-bold">Projects</div>
        //      <div className="grid grid-cols-2 place-items-center flex-1">
        //     {
        //         projects.map((project: Project) => (
        //             <div className="bg-gray-500 h-[350px] w-[500px] transform duration-500 hover:translate-x-5 hover:-translate-y-5 pointer-events-none rounded-lg">
        //             <div className="bg-[#0d0d1f] h-[350px] w-[500px] overflow-hidden p-2 text-justify transform duration-500 hover:-translate-x-10 hover:translate-y-10 pointer-events-auto rounded-lg flex flex-col">
        //                 <div className="flex flex-col mb-3">
        //                     <div className=" text-2xl font-bold">
        //                         {project.title}
        //                     </div>
        //                     <div className="flex justify-between text-sm font-bold text-gray-500">
        //                         <div>{project.client}</div>
        //                         <div>{project.duration}</div>
        //                     </div>
        //                 </div>
        //                 <div className="flex-1">{project.subtitle}</div>
        //                 <div className="flex p-2 gap-2 text-center justify-between">
        //                     {
        //                         project.techStack.map((techStack: string) => (
        //                             <div className={` bg-linear-to-r ${gradients[Math.floor(Math.random() * gradients.length)]} p-2 rounded-md min-w-[100px]`}>{techStack}</div>
        //                         ))
        //                     }
        //                 </div>
        //             </div>
        //             </div>
        //         ))
        //     }
        // </div>
        // </div>
       
    )
}

export default Project;