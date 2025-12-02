import { Typewriter } from "react-simple-typewriter"


const Home = () => {
    return (
        <div className="grid grid-cols-1 auto-rows-min gap-y-5 h-screen w-screen 
                        place-content-center place-items-center px-3">

            <div className="w-64 h-64 rounded-full overflow-hidden shrink-0">
                <img
                    src="portfolio-profile-pic.jpg"
                    alt="PortfolioProfilePic"
                    className="w-full h-full object-cover"
                />
            </div>


            <h1 className="md:text-4xl text-lg font-extrabold leading-tight">
                Hi, I'm
                <span className="block sm:inline text-w"> Veera Jaswant Reddy Annem</span>
            </h1>

            <div className="bg-linear-to-r from-purple-400 via-pink-500 to-red-500 inline-block bg-clip-text text-transparent">
                <span className="md:text-3xl text-lg font-bold">
                    <Typewriter
                        words={[
                            "Full Stack Web Developer",
                            "ASP .NET Core Web Api",
                            "React Developer",
                            "Angular Developer",
                            "Microsoft Azure Developer",
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

        </div>
    )
}

export default Home