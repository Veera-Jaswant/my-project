import type { Course } from "../types/Course";
import UCFLogo from "../assets/ucf-logo.svg";

const Education = () => {
    const courses: Course[] = [
        { id: "1", title: "Machine Learning", linearGradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)" },
        { id: "2", title: "Advanced Computer Architecture", linearGradient: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)" },
        { id: "3", title: "Operating Systems & File Systems Forensics", linearGradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
        { id: "4", title: "Incident Response Technologies", linearGradient: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)" },
        { id: "5", title: "Network Science", linearGradient: "linear-gradient(135deg, #a6c0fe 0%, #f68084 100%)" },
        { id: "6", title: "Design & Analysis of Algorithms", linearGradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" },
        { id: "7", title: "Malware Software Vulnerability", linearGradient: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)" },
        { id: "8", title: "Current Topics in ML", linearGradient: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
        { id: "9", title: "Adv Software Systems Security", linearGradient: "linear-gradient(135deg, #f9f9f9 0%, #e0eafc 100%)" },
        { id: "10", title: "Computer Vision", linearGradient: "linear-gradient(135deg, #fceabb 0%, #f8b500 100%)" },
    ];
    return (
        <div className="grid sm:grid-cols-2 h-screen w-screen items-center">
            <div className="flex flex-col justify-center items-center">
                <img src={UCFLogo} alt="UCF" className="w-[300px]" />
                <div className="mt-5">
                    <h4 className="text-2xl">Master's in Computer Science</h4>
                    <div>University of Central Florida</div>
                    <div>GPA: 3.9</div>
                    <div>Graduate: December 2025</div>
                </div>
            </div>

            <div className="flex justify-center items-center pt-10">
                <div className=" flex flex-col gap-2">
                    {courses.map((course) => (
                        <div
                            className="border-2 rounded-full p-2 text-center w-96"
                            key={course.id}
                        >
                            {course.title}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education