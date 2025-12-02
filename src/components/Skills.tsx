import { useState } from "react";
import icons from "../utils/Icons";

const Skills = () => {

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { id: "1", title: "C#", subtitle: "Modern, object-oriented language for scalable applications.", logo: "csharp" },
                { id: "2", title: "JavaScript", subtitle: "Core language for dynamic and interactive web experiences.", logo: "javascript" },
                { id: "3", title: "TypeScript", subtitle: "JavaScript with strong typing for safer and structured development.", logo: "typescript" },
                { id: "4", title: "HTML5", subtitle: "Semantic markup language for building modern web pages.", logo: "html5" },
                { id: "5", title: "CSS3", subtitle: "Styling language for responsive and visually rich UIs.", logo: "css3" }
            ],
            tabId: "Tab1"
        },

        {
            title: "Frameworks & Libraries",
            skills: [
                { id: "1", title: ".NET 8", subtitle: "Cross-platform framework for high-performance backend services.", logo: "dotnetcore" },
                { id: "2", title: "React", subtitle: "Component-based UI library for fast and scalable SPAs.", logo: "react" },
                { id: "3", title: "Redux", subtitle: "State management library for predictable app behavior.", logo: "redux" },
                { id: "4", title: "Tailwind CSS", subtitle: "Utility-first CSS framework for fast UI development.", logo: "tailwindcss" },
                { id: "5", title: "Material UI", subtitle: "React UI components following Material Design principles.", logo: "material-ui" }
            ],
            tabId: "Tab2"
        },

        {
            title: "Cloud & Azure",
            skills: [
                { id: "1", title: "Azure App Services", subtitle: "Managed platform for hosting web apps and APIs.", logo: "azure-app-services" },
                { id: "2", title: "Azure Functions", subtitle: "Serverless compute for event-driven workflows.", logo: "azure-functions-app" },
                { id: "3", title: "Azure SQL Database", subtitle: "Managed relational database with high scalability.", logo: "azure-sql-database" },
                { id: "4", title: "Azure Cosmos DB", subtitle: "Globally distributed NoSQL database with low latency.", logo: "azure-cosmos-database" },
                { id: "5", title: "Azure Storage", subtitle: "Scalable storage for blobs, files, queues, and tables.", logo: "azure-storage-accounts" },
                { id: "6", title: "Azure Key Vault", subtitle: "Secure secret store for keys, credentials, and certificates.", logo: "azure-key-vaults" }
            ],
            tabId: "Tab3"
        },

        {
            title: "Databases & Messaging",
            skills: [
                { id: "1", title: "SQL Server", subtitle: "Enterprise relational database for structured data.", logo: "microsoft-sql-server" },
                { id: "2", title: "MongoDB", subtitle: "Document-based NoSQL database for flexible schemas.", logo: "mongodb" },
                { id: "3", title: "Apache Kafka", subtitle: "Distributed messaging platform for event streaming.", logo: "apachekafka" }
            ],
            tabId: "Tab4"
        },

        {
            title: "DevOps & Collaboration",
            skills: [
                { id: "1", title: "Git", subtitle: "Distributed version control for managing code changes.", logo: "git" },
                { id: "2", title: "GitHub", subtitle: "Cloud platform for code hosting and collaboration.", logo: "github" },
                { id: "3", title: "CI/CD Pipelines", subtitle: "Automated build, test, and deployment workflows.", logo: "cicd" },
                { id: "4", title: "Docker", subtitle: "Containerization platform for packaging applications.", logo: "docker" },
                { id: "5", title: "Kubernetes", subtitle: "Container orchestration system for scalable deployments.", logo: "kubernetes" }
            ],
            tabId: "Tab5"
        },

        {
            title: "Testing & Quality",
            skills: [
                { id: "1", title: "Postman", subtitle: "API testing and documentation platform.", logo: "postman" },
                { id: "2", title: "XUnit", subtitle: "Testing framework for .NET applications.", logo: "nunit" },
                { id: "2", title: "Jest", subtitle: "Testing using Jest and React Testing Library.", logo: "jest" },
                {id: "3",title: "Jasmine + Karma",subtitle: "Testing using Jasmine framework with Karma test runner.",logo: "jasmine"}
            ],
            tabId: "Tab6"
        }
    ];

    const [selectedDivTab, setSlectedDivTab] = useState<string>("Tab1");
    const tabs: string[] = ["Tab1", "Tab2", "Tab3", "Tab4", "Tab5", "Tab6"];


    return (
        <div className="flex flex-col h-screen w-screen pt-15">

            <div className="flex gap-5 px-5">
                
                <div className="flex flex-col h-[500px] gap-2 cursor-pointer">
                    {
                        tabs.map((tab: string) => (
                            <div id={tab} key={tab} className={`flex-1 w-1 ${selectedDivTab == tab ? "bg-linear-to-b from-orange-500 via-pink-500 to-blue-500" : "bg-gray-500"} rounded-lg`} onClick={() => setSlectedDivTab(tab)}></div>
                        ))
                    }
                </div>

                <div className="flex flex-col flex-1 h-full">
                    <div className="text-xl pl-6 font-bold bg-linear-to-r from-orange-400 via-pink-500 to-blue-500 inline-block bg-clip-text text-transparent w-fit">{skillCategories.find((catergory) => catergory.tabId == selectedDivTab)?.title}</div>
                    <div className=" flex-1 grid grid-cols-3 overflow-auto auto-rows-min gap-1">
                        {
                            skillCategories.find((catergory) => catergory.tabId == selectedDivTab)?.skills.map((skill) => (
                                <div key={skill.id} className="p-3 sm:flex sm:border-2 sm:rounded-lg  sm:gap-2 sm:p-5 sm:m-5">
                                    <img src={icons[skill.logo]} alt={skill.title} className="w-20 h-20 sm:w-[25px] sm:h-[25px] cursor-pointer" />
                                    <div className="hidden sm:flex sm:flex-col">
                                        <div className="font-bold">{skill.title}</div>
                                        <div className="text-md text-gray-500">{skill.subtitle}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Skills