import { MdOutlineSubscriptions, MdOutlineVerifiedUser, MdUpdate } from "react-icons/md";

const Info = () => {
    return (
        <div>
            <section className="p-6 px-20 mx-auto my-6 dark:bg-gray-800 dark:text-gray-100">
                <div className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-3">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                        <MdOutlineSubscriptions className="w-20 h-20 rounded-full bg-[#9cf] p-5" />
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leadi">8,000+ Courses</p>
                            <p className="text-2xl capitalize">Explore aa wide range of skills.</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                        <MdOutlineVerifiedUser className="w-20 h-20 rounded-full bg-[#9cf] p-5" />
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leadi">By Indestry Experts</p>
                            <p className="text-2xl capitalize">Professional developement from the best people.</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                        <MdUpdate className="w-20 h-20 rounded-full bg-[#9cf] p-5" />
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leadi">Unlimited Access</p>
                            <p className="text-2xl capitalize">Unlock Library and learn any topic with one subscription.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Info;