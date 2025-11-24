import { Typewriter } from "react-simple-typewriter"
import LinkedIn from "../assets/linkedin.svg";


const Home = () => {
    return (
           <div className="flex justify-between items-center gap-10 p-6">
            <div  className="rounded-full hover:cursor-pointer">
                <img src="portfolio-profile-pic.jpg" alt="PortfolioProfilePic" />
            </div>
             <div className=" flex flex-col gap-5">
                <h1 className="text-4xl font-extrabold">Hi, I'm Veera Jaswant Reddy Annem</h1>
                <div className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500 inline-block bg-clip-text text-transparent">
                    <span className="text-2xl font-bold">
                        <Typewriter
                            words={[
                                "Full Stack Web Developer",
                                "ASP .NET Core Web Api",
                                "React Developer",
                                "Angular Developer",
                                "Azure (Developing Solutions for Microsoft Azure)"
                            ]}
                            cursor
                            cursorBlinking
                            delaySpeed={1000}
                            deleteSpeed={50}
                            typeSpeed={100}
                            loop
                        />
                    </span>
                </div>
                <div className="text-lg text-gray-700 text-justify">
                    Results-driven Full-Stack Developer with 2+ years of experience building scalable .NET Web APIs and React.js/Angular applications on Microsoft Azure. Proficient in C#, ASP.NET Core, React, Angular, Azure services, Kafka, and CI/CD pipelines, with expertise in secure, high-performance web services, RESTful APIs, interactive dashboards, authentication/authorization, and event-driven architectures. Skilled at optimizing application performance and delivering end-to-end solutions that enhance user experience and business efficiency.
                </div>
                <div>
                    <img src={LinkedIn} alt="LinkedIn" className=" h-10 w-10 rounded-[10px]" />
                </div>
            </div>
           </div>
    )
}

export default Home