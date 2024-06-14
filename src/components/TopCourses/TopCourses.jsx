import { IoMdHeartEmpty } from "react-icons/io";
import topCourse1 from '../../assets/images/tcourse1.png'

const TopCourses = () => {
    return (
        <div>
            <div className="bg-[#f5f7fa] p-20">
                <h2 className="pb-5 mb-10 text-4xl font-bold text-black border-b-8 border-blue-600 w-60">Top Courses</h2>
                <div className="grid gap-8 grid-col-1 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="max-w-lg rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src={`${topCourse1}`} alt="img-card" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center justify-between px-3 py-5">
                            <h2 className="text-3xl font-semibold tracki">Learn Angular</h2>
                            <IoMdHeartEmpty className="w-10 h-10 text-red-400" style={{ fill: 'red' }} />
                        </div>
                    </div>
                    <div className="max-w-lg rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src={`${topCourse1}`} alt="img-card" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center justify-between px-3 py-5">
                            <h2 className="text-3xl font-semibold tracki">Learn Angular</h2>
                            <IoMdHeartEmpty className="w-10 h-10 text-red-400" style={{ fill: 'red' }} />
                        </div>
                    </div>
                    <div className="max-w-lg rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src={`${topCourse1}`} alt="img-card" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center justify-between px-3 py-5">
                            <h2 className="text-3xl font-semibold tracki">Learn Angular</h2>
                            <IoMdHeartEmpty className="w-10 h-10 text-red-400" style={{ fill: 'red' }} />
                        </div>
                    </div>
                    <div className="max-w-lg rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src={`${topCourse1}`} alt="img-card" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center justify-between px-3 py-5">
                            <h2 className="text-3xl font-semibold tracki">Learn Angular</h2>
                            <IoMdHeartEmpty className="w-10 h-10 text-red-400" style={{ fill: 'red' }} />
                        </div>
                    </div>
                    <div className="max-w-lg rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src={`${topCourse1}`} alt="img-card" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center justify-between px-3 py-5">
                            <h2 className="text-3xl font-semibold tracki">Learn Angular</h2>
                            <IoMdHeartEmpty className="w-10 h-10 text-red-400" style={{ fill: 'red' }} />
                        </div>
                    </div>
                    <div className="max-w-lg rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src={`${topCourse1}`} alt="img-card" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center justify-between px-3 py-5">
                            <h2 className="text-3xl font-semibold tracki">Learn Angular</h2>
                            <IoMdHeartEmpty className="w-10 h-10 text-red-400" style={{ fill: 'red' }} />
                        </div>
                    </div>
                    <div className="max-w-lg rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src={`${topCourse1}`} alt="img-card" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center justify-between px-3 py-5">
                            <h2 className="text-3xl font-semibold tracki">Learn Angular</h2>
                            <IoMdHeartEmpty className="w-10 h-10 text-red-400" style={{ fill: 'red' }} />
                        </div>
                    </div>
                    <div className="max-w-lg rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                        <img src={`${topCourse1}`} alt="img-card" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center justify-between px-3 py-5">
                            <h2 className="text-3xl font-semibold tracki">Learn Angular</h2>
                            <IoMdHeartEmpty className="w-10 h-10 text-red-400" style={{ fill: 'red' }} />
                        </div>
                    </div>
                </div>
                <div className="mt-20 text-center">
                    <button className="btn border border-[#868e96] text-[#868e96] text-3xl w-72 h-20">Browse Course</button>
                </div>
            </div>
        </div>
    );
};

export default TopCourses;