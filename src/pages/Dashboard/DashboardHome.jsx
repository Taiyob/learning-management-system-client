import Lottie from "lottie-react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import readingAnimation from '../../assets/animations/reading.json'
import swift from '../../assets/images/swift.png'
import html from '../../assets/images/html5.png'
import react from '../../assets/images/react.png'
import next from '../../assets/images/next.jpeg'
import Marquee from "react-fast-marquee";
import MarqueeButton from "../../components/Dashboard/MarqueeButton";
import onlineCourse from '../../assets/animations/online-course.json'

/* eslint-disable react/no-unescaped-entities */
const DashboardHome = () => {
    return (
        <div className="p-8">
            <div className="flex justify-between mb-8">
                <div className="w-1/2">
                    <h2 className="text-2xl font-extrabold text-blue-500">Hi Jake, Good Afternoon !</h2>
                    <h5 className="text-xs font-bold text-blue-800">Let's learn something new today</h5>
                </div>
                <div className="justify-end w-1/2">
                    <label className="flex items-center gap-2 bg-gray-100 input input-bordered rounded-3xl">
                        <CiSearch className="w-4 h-4 opacity-70" />
                        <input type="text" className="grow" placeholder="Search" />
                    </label>
                </div>
            </div>
            <div className="flex items-center justify-between px-5 mb-10 bg-blue-50 rounded-2xl">
                <div>
                    <h3 className="p-4 text-2xl font-bold text-blue-500">Go Premium</h3>
                    <p className="pl-4 text-blue-800">Explore 100+ export curated courses prepared for you.</p>
                    <div className="p-4">
                        <Link><button style={{ background: 'linear-gradient(128deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))', }} className="text-blue-500 border border-none btn rounded-3xl">Get Access</button></Link>
                    </div>
                </div>
                <div>
                    <Lottie animationData={readingAnimation} className="h-28"></Lottie>
                </div>
            </div>
            <h4 className="py-3 font-bold text-blue-500">Overview</h4>
            <div className="flex gap-2 mb-10">
                <div className="w-1/6 p-3 space-y-6 rounded-lg bg-blue-50 h-28">
                    <h5 className="text-xl text-blue-800">Course in Progress</h5>
                    <h3 className="text-3xl font-extrabold text-blue-500">56</h3>
                </div>
                <div className="w-1/6 p-3 space-y-6 rounded-lg bg-blue-50 h-28">
                    <h5 className="text-xl text-blue-800">Courses Completed</h5>
                    <h3 className="text-3xl font-extrabold text-blue-500">36</h3>
                </div>
                <div className="w-1/6 p-3 space-y-6 rounded-lg bg-blue-50 h-28">
                    <h5 className="text-xl text-blue-800">Communities</h5>
                    <h3 className="text-3xl font-extrabold text-blue-500">09</h3>
                </div>
            </div>
            <div className="flex justify-between py-3">
                <h4 className="font-bold text-blue-500">Continue Reading</h4>
                <h4 className="font-bold text-blue-500 underline">View all</h4>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-10">
                <div className="flex p-3 rounded-lg bg-blue-50">
                    <div className="w-2/5 p-2">
                        <img src={`${swift}`} alt="swift-logo" className="w-full h-24 rounded-lg" />
                    </div>
                    <div className="p-2">
                        <button className="px-4 mb-2 text-xs text-center text-white bg-blue-800 rounded-3xl btn-sm">Web development</button>
                        <h3 className="mb-3 font-bold">Swift Courses</h3>
                        <div className="flex gap-5">
                            <h2 className="text-blue-400">Esther Howard</h2>
                            <span className="text-blue-400">5hr</span>
                        </div>
                    </div>
                </div>
                <div className="flex p-3 rounded-lg bg-blue-50">
                    <div className="w-2/5 p-2">
                        <img src={`${html}`} alt="swift-logo" className="w-full h-24 rounded-lg" />
                    </div>
                    <div className="p-2">
                        <button className="px-4 mb-2 text-xs text-center text-white bg-blue-800 rounded-3xl btn-sm">Web development</button>
                        <h3 className="mb-3 font-bold">HTML Courses</h3>
                        <div className="flex gap-5">
                            <h2 className="text-blue-400">Brooklyn Simmons</h2>
                            <span className="text-blue-400">2hr</span>
                        </div>
                    </div>
                </div>
                <div className="flex p-3 rounded-lg bg-blue-50">
                    <div className="w-2/5 p-2">
                        <img src={`${react}`} alt="swift-logo" className="w-full h-24 rounded-lg" />
                    </div>
                    <div className="p-2">
                        <button className="px-4 mb-2 text-xs text-center text-white bg-blue-800 rounded-3xl btn-sm">Web development</button>
                        <h3 className="mb-3 font-bold">React Course</h3>
                        <div className="flex gap-5">
                            <h2 className="text-blue-400">Annette Block</h2>
                            <span className="text-blue-400">4hr</span>
                        </div>
                    </div>
                </div>
                <div className="flex p-3 rounded-lg bg-blue-50">
                    <div className="w-2/5 p-2">
                        <img src={`${next}`} alt="swift-logo" className="w-full h-24 rounded-lg" />
                    </div>
                    <div className="p-2">
                        <button className="px-4 mb-2 text-xs text-center text-white bg-blue-800 rounded-3xl btn-sm">Web development</button>
                        <h3 className="mb-3 font-bold">Next JS Course</h3>
                        <div className="flex gap-5">
                            <h2 className="text-blue-400">Albert Flores</h2>
                            <span className="text-blue-400">2hr</span>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className="py-3 font-bold text-blue-500">Trending Courses in Your Preferred Topics</h4>
            <div className="mb-5">
                <Marquee>
                    <MarqueeButton />
                    <MarqueeButton />
                    <MarqueeButton />
                    <MarqueeButton />
                    <MarqueeButton />
                </Marquee>
            </div>
            <div className="grid grid-cols-6 gap-3">
                <div className="px-8 py-4 text-center border border-blue-800 bg-red-50 rounded-xl">
                    <Lottie animationData={onlineCourse} className="h-14"></Lottie>
                    <h3 className="text-4xl font-extrabold text-black">524</h3>
                    <p className="text-xl text-blue-800">Online & Offline Courses</p>
                </div>
                <div className="px-8 py-4 text-center border border-blue-800 bg-violet-50 rounded-xl">
                    <Lottie animationData={onlineCourse} className="h-14"></Lottie>
                    <h3 className="text-4xl font-extrabold text-black">524</h3>
                    <p className="text-xl text-blue-800">Online & Offline Courses</p>
                </div>
                <div className="px-8 py-4 text-center border border-blue-800 bg-pink-50 rounded-xl">
                    <Lottie animationData={onlineCourse} className="h-14"></Lottie>
                    <h3 className="text-4xl font-extrabold text-black">524</h3>
                    <p className="text-xl text-blue-800">Online & Offline Courses</p>
                </div>
                <div className="px-8 py-4 text-center border border-blue-800 bg-red-50 rounded-xl">
                    <Lottie animationData={onlineCourse} className="h-14"></Lottie>
                    <h3 className="text-4xl font-extrabold text-black">524</h3>
                    <p className="text-xl text-blue-800">Online & Offline Courses</p>
                </div>
                <div className="px-8 py-4 text-center border border-blue-800 bg-blue-50 rounded-xl">
                    <Lottie animationData={onlineCourse} className="h-14"></Lottie>
                    <h3 className="text-4xl font-extrabold text-black">524</h3>
                    <p className="text-xl text-blue-800">Online & Offline Courses</p>
                </div>
                <div className="px-8 py-4 text-center border border-blue-800 bg-violet-50 rounded-xl">
                    <Lottie animationData={onlineCourse} className="h-14"></Lottie>
                    <h3 className="text-4xl font-extrabold text-black">524</h3>
                    <p className="text-xl text-blue-800">Online & Offline Courses</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;