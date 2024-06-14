import Slide from "./Slide";
import course from '../../assets/images/learningPath.png';

const LearningPath = () => {
    return (
        <div>
            <article className="max-w-4xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
                <div className="w-full mx-auto space-y-4 text-center">
                    <h1 className="text-4xl font-bold leadi md:text-5xl">Learning Paths</h1>
                    <div className="w-2/5 ml-64 border-b-8 border-blue-600"></div>
                    <p className="w-full text-2xl text-gray-400">Stop guessing what to learn next and start making progress faster based on your current skill level and experience.</p>
                </div>
            </article>
            <div className="mx-auto max-w-10xl">
                <Slide />
            </div>
            <div className="mt-20">
                <div className="mx-auto max-w-10xl">
                    <div className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-4">
                        <div className="flex gap-5 mb-8">
                            <img src={`${course}`} alt="" />
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-bold">Angular</h3>
                                <p className="text-xl text-gray-400">24 courses</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-8">
                            <img src={`${course}`} alt="" />
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-bold">Angular</h3>
                                <p className="text-xl text-gray-400">24 courses</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-8">
                            <img src={`${course}`} alt="" />
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-bold">Angular</h3>
                                <p className="text-xl text-gray-400">24 courses</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-8">
                            <img src={`${course}`} alt="" />
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-bold">Angular</h3>
                                <p className="text-xl text-gray-400">24 courses</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-8">
                            <img src={`${course}`} alt="" />
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-bold">Angular</h3>
                                <p className="text-xl text-gray-400">24 courses</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-8">
                            <img src={`${course}`} alt="" />
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-bold">Angular</h3>
                                <p className="text-xl text-gray-400">24 courses</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-8">
                            <img src={`${course}`} alt="" />
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-bold">Angular</h3>
                                <p className="text-xl text-gray-400">24 courses</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-8">
                            <img src={`${course}`} alt="" />
                            <div className="flex flex-col justify-center">
                                <h3 className="text-3xl font-bold">Angular</h3>
                                <p className="text-xl text-gray-400">24 courses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 mb-20 text-center">
                <button className="btn border border-[#868e96] text-[#868e96] text-3xl w-96 h-20">Browse Learning Paths</button>
            </div>
        </div>
    );
};

export default LearningPath;