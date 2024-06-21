import { BsCart2 } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import logo from '../assets/images/logo.png'
import { GoBell } from "react-icons/go";

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-12">

                <div className="flex flex-col justify-between min-h-screen col-span-2  bg-[#1d2126] rounded-r-lg">
                    <ul className="px-4 pb-4 space-y-3 w-80">
                        <li>
                            <Link to='/' className="flex items-center py-8">
                                <img src={logo} alt="image" />
                                <a className="text-4xl font-extrabold text-white">Tutorio</a>
                            </Link>
                            <Link
                                to="/dashboard/course"
                                className="flex items-center gap-2 text-xl text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text"
                            >
                                <BsCart2 className="text-[#4299e1]" />
                                Course
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/create-course"
                                className="flex items-center gap-2 text-xl text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text"
                            >
                                <svg
                                    className="text-blue-500"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.325 9.45L14.5417 3.88334C14.3338 3.46697 14.0139 3.11688 13.6178 2.87249C13.2218 2.62809 12.7654 2.49909 12.3 2.5H7.70001C7.23464 2.49909 6.77825 2.62809 6.38221 2.87249C5.98617 3.11688 5.66621 3.46697 5.45835 3.88334L2.67501 9.45C2.55893 9.68291 2.49899 9.93977 2.50001 10.2V15C2.50001 15.663 2.7634 16.2989 3.23225 16.7678C3.70109 17.2366 4.33697 17.5 5.00001 17.5H15C15.6631 17.5 16.2989 17.2366 16.7678 16.7678C17.2366 16.2989 17.5 15.663 17.5 15V10.2C17.501 9.93977 17.4411 9.68291 17.325 9.45ZM6.95001 4.625C7.0199 4.48631 7.12715 4.3699 7.25967 4.28892C7.39219 4.20793 7.54471 4.16559 7.70001 4.16667H12.3C12.4553 4.16559 12.6078 4.20793 12.7404 4.28892C12.8729 4.3699 12.9801 4.48631 13.05 4.625L15.3167 9.16667H4.68335L6.95001 4.625ZM15 15.8333H5.00001C4.779 15.8333 4.56704 15.7455 4.41076 15.5893C4.25448 15.433 4.16668 15.221 4.16668 15V10.8333H15.8333V15C15.8333 15.221 15.7455 15.433 15.5893 15.5893C15.433 15.7455 15.221 15.8333 15 15.8333Z"
                                        fill="#4299e1"
                                    />
                                    <path
                                        d="M13.3333 12.5H9.99996C9.77895 12.5 9.56698 12.5878 9.4107 12.7441C9.25442 12.9004 9.16663 13.1123 9.16663 13.3333C9.16663 13.5543 9.25442 13.7663 9.4107 13.9226C9.56698 14.0789 9.77895 14.1667 9.99996 14.1667H13.3333C13.5543 14.1667 13.7663 14.0789 13.9225 13.9226C14.0788 13.7663 14.1666 13.5543 14.1666 13.3333C14.1666 13.1123 14.0788 12.9004 13.9225 12.7441C13.7663 12.5878 13.5543 12.5 13.3333 12.5Z"
                                        fill="#4299e1"
                                    />
                                    <path
                                        d="M6.66671 14.1667C7.12694 14.1667 7.50004 13.7936 7.50004 13.3333C7.50004 12.8731 7.12694 12.5 6.66671 12.5C6.20647 12.5 5.83337 12.8731 5.83337 13.3333C5.83337 13.7936 6.20647 14.1667 6.66671 14.1667Z"
                                        fill="#4299e1"
                                    />
                                </svg>
                                Create Course
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard/review"
                                className="flex items-center gap-2 text-xl text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text"
                            >
                                <svg
                                    className="text-blue-500"
                                    width="18"
                                    height="17"
                                    viewBox="0 0 18 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.99996 7.99992C9.4602 7.99992 9.83329 7.62682 9.83329 7.16659C9.83329 6.70635 9.4602 6.33325 8.99996 6.33325C8.53972 6.33325 8.16663 6.70635 8.16663 7.16659C8.16663 7.62682 8.53972 7.99992 8.99996 7.99992Z"
                                        fill="#4299e1"
                                    />
                                    <path
                                        d="M12.3333 7.99992C12.7936 7.99992 13.1667 7.62682 13.1667 7.16659C13.1667 6.70635 12.7936 6.33325 12.3333 6.33325C11.8731 6.33325 11.5 6.70635 11.5 7.16659C11.5 7.62682 11.8731 7.99992 12.3333 7.99992Z"
                                        fill="#4299e1"
                                    />
                                    <path
                                        d="M5.66659 7.99992C6.12682 7.99992 6.49992 7.62682 6.49992 7.16659C6.49992 6.70635 6.12682 6.33325 5.66659 6.33325C5.20635 6.33325 4.83325 6.70635 4.83325 7.16659C4.83325 7.62682 5.20635 7.99992 5.66659 7.99992Z"
                                        fill="#4299e1"
                                    />
                                    <path
                                        d="M14.8333 0.5H3.16663C2.50358 0.5 1.8677 0.763392 1.39886 1.23223C0.930018 1.70107 0.666626 2.33696 0.666626 3V15.5C0.66688 15.6477 0.706367 15.7926 0.781043 15.92C0.855719 16.0474 0.962904 16.1526 1.09163 16.225C1.21617 16.2956 1.3568 16.3329 1.49996 16.3333C1.64953 16.3333 1.79633 16.293 1.92496 16.2167L5.66663 13.95C5.80493 13.8677 5.96412 13.8271 6.12496 13.8333H14.8333C15.4963 13.8333 16.1322 13.5699 16.6011 13.1011C17.0699 12.6323 17.3333 11.9964 17.3333 11.3333V3C17.3333 2.33696 17.0699 1.70107 16.6011 1.23223C16.1322 0.763392 15.4963 0.5 14.8333 0.5ZM15.6666 11.3333C15.6666 11.5543 15.5788 11.7663 15.4225 11.9226C15.2663 12.0789 15.0543 12.1667 14.8333 12.1667H6.12496C5.66981 12.1663 5.2232 12.2902 4.83329 12.525L2.33329 14.025V3C2.33329 2.77899 2.42109 2.56702 2.57737 2.41074C2.73365 2.25446 2.94561 2.16667 3.16663 2.16667H14.8333C15.0543 2.16667 15.2663 2.25446 15.4225 2.41074C15.5788 2.56702 15.6666 2.77899 15.6666 3V11.3333Z"
                                        fill="#4299e1"
                                    />
                                </svg>
                                Review
                            </Link>
                        </li>
                    </ul>
                    <div className="pb-5 space-x-1 w-96">
                        <div className="w-2/3 mx-auto mb-5 ml-10 rounded-2xl" style={{
                            background: 'linear-gradient(128deg, rgba(50, 135, 219, 0.2), rgba(30, 109, 189, 0.2))',
                            height: '200px',
                        }}>
                            <h3 className="p-4 text-2xl font-bold text-blue-500">Go Premium</h3>
                            <p className="pl-4 text-gray-400">Explore 100+ export curated courses prepared for you.</p>
                            <div className="p-4">
                                <Link><button style={{ background: 'linear-gradient(128deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))', }} className="w-full text-blue-500 border border-none btn rounded-3xl">Get Access</button></Link>
                            </div>
                        </div>
                        <div className="flex pl-10 space-x-1">
                            <Link>
                                <button style={{ background: 'linear-gradient(128deg, rgba(50, 135, 219, 0.9), rgba(30, 109, 189, 0.9))' }} className="w-full p-2 text-white rounded-lg">
                                    Profile
                                </button>
                            </Link>
                            <Link>
                                <button style={{ background: 'linear-gradient(128deg, rgba(50, 135, 219, 0.9), rgba(30, 109, 189, 0.9))' }} className="w-full p-2 text-white rounded-lg">
                                    Logout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-8 bg-white">
                    <Outlet />
                </div>
                <div className="col-span-2 bg-white border-l border-blue-100">
                    <div className="flex justify-between p-5 border-b border-blue-100">
                        <div className="p-4 bg-blue-100 rounded-full">
                            <GoBell className="text-xl font-bold text-blue-500" />
                        </div>
                        <div>
                            <div className="flex items-center avatar">
                                <div className="w-12 mr-2 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                                <h5 className="text-sm font-bold">Jake Harper</h5>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <h4 className="mb-3 text-sm font-bold text-blue-500">Remainders</h4>
                        <div className="flex justify-between px-6 py-4 mb-3 bg-blue-100 rounded-lg">
                            <div>
                                <h4 className="text-sm font-bold">Week 01 Assignment</h4>
                                <span className="text-xs">JS assignment</span>
                            </div>
                            <button className="px-4 text-xs text-center text-white bg-blue-800 rounded-3xl btn-sm">7:00 pm</button>
                        </div>
                        <div className="flex justify-between px-6 py-4 mb-3 bg-blue-100 rounded-lg">
                            <div>
                                <h4 className="text-sm font-bold">Week 01 Assignment</h4>
                                <span className="text-xs">JS assignment</span>
                            </div>
                            <button className="px-4 text-xs text-center text-white bg-blue-800 rounded-3xl btn-sm">7:00 pm</button>
                        </div>
                        <div className="flex justify-between px-6 py-4 mb-3 bg-blue-100 rounded-lg">
                            <div>
                                <h4 className="text-sm font-bold">Week 01 Assignment</h4>
                                <span className="text-xs">JS assignment</span>
                            </div>
                            <button className="px-4 text-xs text-center text-white bg-blue-800 rounded-3xl btn-sm">7:00 pm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;