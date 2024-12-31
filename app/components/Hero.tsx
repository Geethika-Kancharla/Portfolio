import Link from "next/link";

const Hero: React.FC = () => {
    return (
        <div className="text-white min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 pt-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mt-10 md:mt-24 flex flex-col md:flex-row items-center justify-between animate-fade-in">
                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-8 text-center md:text-left">
                        <div className="space-y-3">
                            <p className="text-blue-400 font-medium text-2xl animate-slide-in-left">
                                Hi there! I`m
                            </p>
                            <h2 className="text-6xl md:text-8xl font-extrabold leading-tight animate-slide-in-right">
                                Geethika
                            </h2>
                            <p className="text-3xl md:text-4xl text-slate-300 animate-slide-in-left">
                                Full Stack
                                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text ml-2">
                                    Developer
                                </span>
                            </p>
                        </div>

                        <p className="text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up text-lg">
                            Transforming ideas into elegant, scalable solutions. Passionate about creating
                            seamless digital experiences that make a difference.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                            {/* <Link href="https://github.com/Geethika-Kancharla">
                                <button className="bg-blue-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-transform transform hover:scale-105 duration-300 md:text-lg">
                                    GitHub Profile
                                </button>
                            </Link> */}
                            <Link href="https://drive.google.com/file/d/1QtrFipNdOcUmaifs2wQRV44wPamIQ-pC/view?usp=drive_link">
                            <button className="bg-transparent border border-blue-400 text-blue-400 px-8 py-3 rounded-lg shadow-md hover:bg-blue-400 hover:text-white hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ">
                                Resume
                            </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center relative ">
                        <div className="relative w-96 h-96 md:w-[30rem] md:h-[30rem] flex items-center justify-center">
                            <img
                                src="images/image.png"
                                alt="John Doe - Developer Portrait"
                                className="rounded-full bg-slate-800 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pop-in w-72 h-72"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 rounded-full blur-xl "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;