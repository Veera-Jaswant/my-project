import { useEffect, useState } from "react";

type Project = { id: string, title: string, subtitle: string[], techStack: string[], client: string, duration: string }

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



    const projects: Project[] = [
        {
            id: "P-001",
            title: "OneDAT",
            subtitle: [
                "Migrated legacy WPF applications to a unified React.js + ASP.NET Core Web API platform, reducing load times by 30% and improving cross-device accessibility.",
                "Built secure, low-latency REST APIs with Ocelot API Gateway and integrated Azure Cosmos DB and Azure Functions for high-performance and reliable data handling.",
                "Implemented proactive logging and monitoring using Azure Monitor and Application Insights, reducing system downtime by 40%"
            ],
            techStack: ["C#", ".Net Core Web Api", "React"],
            client: "Honeywell",
            duration: "Sep 2021 – Feb 2023"
        },
        {
            id: "P-002",
            title: "NextGen HMI",
            subtitle: [
                "Developed an interactive React (HMI Web Application) with 300+ real-time widgets, enhancing operator efficiency by 30% and optimizing UI performance with lazy loading and efficient DOM updates, reducing rendering delays by 25%.",
                "Built scalable .NET Core Web APIs for device data ingestion and processing using Kafka-based event streaming.",
                "Achieved 85% test coverage with unit and integration testing, reducing defects by 30%."
            ],
            techStack: ["C#", ".Net Core Web Api", "Angular"],
            client: "CCC Global",
            duration: "Mar 2023 – Dec 2023"
        },
        {
            id: "P-003",
            title: "Graduate Teaching Assistant",
            subtitle: [
                "Assisted students in mastering Web Development (HTML, CSS, JavaScript, React) and Computer Networks (TCP/IP, routing, network security).",
                "Conducted tutoring sessions and workshops, improving student understanding and performance.",
                "Collaborated with faculty to enhance course materials and hands-on projects for better engagement.",
                "Developed strong communication, mentoring, and problem-solving skills while supporting diverse student needs."
            ],
            techStack: ["React", "HTML & CSS", "JavaScript", "TCP/IP", "Routing", "Network Security"],
            client: "UCF",
            duration: "For 2 Semesters"
        },


    ]

    const [selectedProjectId, setSelectedProjectId] = useState<string>("P-001");
    const [project, setProject] = useState<Project>(projects[0]);



    useEffect(() => {
        const fetchProject = async () => {
            const foundProject = projects.find(project => project.id === selectedProjectId);
            setProject(foundProject!);
        };

        fetchProject();
    }, [selectedProjectId]);

    return (
        <div className="relative h-screen w-screen flex flex-col p-15">
            <div className="flex-1">
                {project && (
                    <div className="p-3">
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold">{project!.title}</h1>
                            <div className="flex gap-2 items-end font-bold text-gray-500">
                                <div>{project!.client}</div>|<div>{project!.duration}</div>
                            </div>
                        </div>
                        <div className="pl-5 mt-5">
                            {project!.subtitle.map((point, index) => (
                                <li key={index} className="mt-2">{point}</li>
                            ))}
                        </div>
                        <div className="mt-5">
                            <div className="font-bold mb-2">Tech Stack:</div>
                            <div className="flex gap-2">
                                {project!.techStack.map((tech, index) => (
                                    <div key={index} className={`bg-gray-200 rounded px-2 py-1 text-sm min-w-32 text-center bg-linear-to-r
                                                                ${gradients[Math.floor(Math.random() * gradients.length)]}`}>{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center rounded-full cursor-pointer bg-white text-black overflow-hidden">
                {projects.map((project) => (
                    <div key={project.id} className={`${selectedProjectId === project.id ? "bg-gray-300" : ""} py-1.5 px-5`} onClick={() => setSelectedProjectId(project.id)}>{project.title}</div>
                ))}
            </div>
        </div>
    )
}

export default Project;
