import { TfiUnlock } from 'react-icons/tfi';
import logo from '../assets/images/logo.png'
import useAuthContext from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';

const Navbar = () => {
    const { user, logout } = useAuthContext();

    const handleLogout = async () => {
        await logout();
    }

    return (
        <div>
            <div className="navbar bg-[#1d2126] py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img src={logo} alt="image" />
                    <a className="text-4xl text-white btn btn-ghost">Tutorio</a>
                    <a className="btn btn-lg bg-[#303840] text-white border border-[#303840] text-2xl">Courses</a>
                    <label className="flex btn btn-lg items-center gap-2 input input-bordered bg-[#303840] ml-5 w-2/3 text-gray-400 text-xl">
                        <input type="text" className="pr-20 grow" placeholder="What would you like to learn?" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor" className="w-4 h-4 text-xl font-extrabold opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
                <div className="hidden text-white navbar-center lg:flex">
                    {/* <ul className="px-1 menu menu-horizontal">
                        <li><a>Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul> */}
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <div className='flex items-center'>
                                <Link onClick={handleLogout}><AiOutlineLogout className='mr-5 text-4xl text-gray-400' /></Link>
                                <Link to='/dashboard' className={`btn btn-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white text-3xl rounded-lg border border-[#4299e1]`}>Dashboard</Link>
                            </div>
                            :
                            <div className='flex items-center'>
                                <Link to='/login'><TfiUnlock className='mr-5 text-4xl text-gray-400' /></Link>
                                <Link to='/register' className="btn btn-lg bg-[#ed0b4c] text-white text-3xl rounded-lg border border-[#ed0b4c]">Get started</Link>
                            </div>
                    }
                </div>
            </div>
            <div className='bg-[#1d2126]'>
                <ul className="menu menu-vertical lg:menu-horizontal bg-[#1d2126] rounded-box text-gray-400 text-2xl hidden md:flex">
                    <li>
                        <a className="relative hover:text-white before:absolute before:bottom-0 before:left-1/4 before:w-1/2 before:h-[3px] before:bg-blue-500 before:invisible before:transition-all before:duration-300 hover:before:visible">Library</a>
                    </li>
                    <li>
                        <a className="relative hover:text-white before:absolute before:bottom-0 before:left-1/4 before:w-1/2 before:h-[3px] before:bg-blue-500 before:invisible before:transition-all before:duration-300 hover:before:visible">Explore</a>
                    </li>
                    <li>
                        <a className="relative hover:text-white before:absolute before:bottom-0 before:left-1/4 before:w-1/2 before:h-[3px] before:bg-blue-500 before:invisible before:transition-all before:duration-300 hover:before:visible">Featured</a>
                    </li>
                    <li>
                        <a className="relative hover:text-white before:absolute before:bottom-0 before:left-1/4 before:w-1/2 before:h-[3px] before:bg-blue-500 before:invisible before:transition-all before:duration-300 hover:before:visible">Development</a>
                    </li>
                    <li>
                        <a className="relative hover:text-white before:absolute before:bottom-0 before:left-1/4 before:w-1/2 before:h-[3px] before:bg-blue-500 before:invisible before:transition-all before:duration-300 hover:before:visible">Design</a>
                    </li>
                    <li>
                        <a className="relative hover:text-white before:absolute before:bottom-0 before:left-1/4 before:w-1/2 before:h-[3px] before:bg-blue-500 before:invisible before:transition-all before:duration-300 hover:before:visible">Business</a>
                    </li>
                    <li>
                        <a className="relative hover:text-white before:absolute before:bottom-0 before:left-1/4 before:w-1/2 before:h-[3px] before:bg-blue-500 before:invisible before:transition-all before:duration-300 hover:before:visible">Photography</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;