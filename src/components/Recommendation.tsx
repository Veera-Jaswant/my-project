import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import LinkedIn from "../assets/linkedin.svg";
const Recommendation = () => {

    const recommendations: { id: string, name: string, position: string, company: string, message: string, img?: string }[] = [
        {
            id: "R-001",
            name: "John Doe",
            position: "Senior Developer",
            company: "Tech Corp",
            message: "John is a highly skilled developer with a keen eye for detail and a passion for creating efficient solutions."
        },
        {
            id: "R-002",
            name: "Jane Smith",
            position: "Project Manager",
            company: "Innovate Ltd",
            message: "Jane's leadership and organizational skills have been instrumental in the success of our projects."
        },
        {
            id: "R-003",
            name: "Alice Johnson",
            position: "UX Designer",
            company: "Creative Solutions",
            message: "Alice's innovative design approach has significantly improved user satisfaction and engagement."
        },
        {
            id: "R-004",
            name: "Bob Brown",
            position: "QA Engineer",
            company: "Quality First",
            message: "Bob's meticulous testing and quality assurance processes have ensured our products meet the highest standards."
        }
    ]
    return (
        <div className="flex items-center h-screen w-full pt-15">
            <Swiper className="" modules={[Autoplay]} slidesPerView={1.5} spaceBetween={20}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                scrollbar={{ draggable: true }}
                grabCursor={true}
                speed={3000} loop={true}>

                {recommendations.map((recommendation) => (
                    <SwiperSlide key={recommendation.id}>
                        <div className="flex flex-col items-center justify-center p-10 m-5 border-2 rounded-lg shadow-lg h-64">
                            <div className="flex justify-between items-center w-full px-5">
                                <div className="flex gap-5 items-center">
                                    <div className="w-20 h-20 rounded-full bg-gray-500 text-white flex items-center justify-center text-2xl font-bold">
                                        {recommendation.name.charAt(0)}
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">{recommendation.name}</h3>
                                        <p className="text-sm text-gray-600">{recommendation.position} at {recommendation.company}</p>
                                    </div>
                                </div>

                                <div><img src={LinkedIn} alt="LinkedIn" className="w-12 h-12 cursor-pointer" /></div>

                            </div>
                            <p className="mt-4 text-center">{recommendation.message}</p>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>

    )
}

export default Recommendation