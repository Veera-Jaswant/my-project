
const Contact = () => {
    return (
        <div
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-32 py-20 bg-white"
        >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
                Contact Me
            </h2>

            {/* Subtext */}
            <p className="text-lg text-gray-600 max-w-2xl text-center mb-10">
                Have a question, project idea, or want to collaborate? Feel free to reach out!
                I'm always open to discussing new opportunities.
            </p>

            {/* Contact Form */}
            <form
                className="w-full max-w-xl bg-gray-50 shadow-lg rounded-xl p-8 space-y-6"
                onSubmit={(e) => e.preventDefault()}
            >
                {/* Name */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none 
        focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none 
        focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your message..."
                        required
                    ></textarea>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold text-lg
      hover:bg-blue-700 hover:scale-[1.02] transition-all"
                >
                    Send Message
                </button>
            </form>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10">
                <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    className="text-blue-600 hover:scale-125 transition-transform text-3xl"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
                <a
                    href="mailto:youremail@example.com"
                    className="text-red-600 hover:scale-125 transition-transform text-3xl"
                >
                    <i className="fas fa-envelope"></i>
                </a>
                <a
                    href="https://github.com/your-github"
                    target="_blank"
                    className="text-gray-800 hover:scale-125 transition-transform text-3xl"
                >
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>

    )
}

export default Contact