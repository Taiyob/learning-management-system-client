import { Link, useNavigate } from 'react-router-dom';
import creatingCourseImg from '../../assets/images/course.svg'
import axios from 'axios';
import Swal from 'sweetalert2';

const CreateCourse = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const title = form?.title?.value;
        const description = form?.description?.value;
        form.reset();

        const newCourse = { title, description };

        const response = await axios.post('https://learning-management-server-ten.vercel.app/create-course', newCourse);
        console.log(response);
        if (response?.data?.result?.acknowledged == true) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New course has created successsfully.",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/dashboard/course');
        }
    }

    return (
        <div className='p-3'>
            <div className="bg-[#287acc] h-1/2 rounded-lg">
                <div className="flex px-28 justify-between items-center">
                    <div className="flex items-center gap-8">
                        <img src={`${creatingCourseImg}`} alt="course-image" className='h-40 w-40' />
                        <h3 className='text-3xl font-bold text-white'>Elijah Murray <br /> <span className='text-white text-opacity-50 text-xl'>Instructor</span> </h3>
                    </div>
                    <button className='btn btn-lg bg-transparent border border-white text-white text-2xl'>Edit Profile</button>
                </div>
                <div className='border border-white border-opacity-50 w-full'></div>
                <div className='px-28 flex justify-between items-center'>
                    <ul className="lg:menu-horizontal text-gray-200 text-2xl hidden md:flex">
                        <Link className='menu'>
                            <li>
                                <a className="relative hover:text-white before:absolute before:bottom-0 before:left-1/4 before:w-1/2 before:h-[3px] before:invisible before:transition-all before:duration-300 hover:before:visible">Library</a>
                            </li>
                        </Link>
                        <Link className='menu'>
                            <li>
                                <a className="relative hover:text-white before:absolute before:bottom-0 before:left-1/4 before:w-1/2 before:h-[3px] before:invisible before:transition-all before:duration-300 hover:before:visible">Explore</a>
                            </li>
                        </Link>
                    </ul>
                    <h3 className='text-white text-opacity-50 text-xl'>Profile</h3>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-12 px-28 py-20'>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-8">
                        <div className="col-span-full">
                            <label htmlFor="title" className="text-2xl font-bold">Course Title</label>
                            <input name='title' required id="title" type="text" placeholder="Course Name" className="w-full p-5 bg-blue-50 rounded-md dark:text-gray-900 border border-none focus:border focus:border-none" />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="text-2xl font-bold">Description</label>
                            <textarea name='description' required id="description" placeholder="" type="text" className="w-full h-40 p-5 bg-blue-50 rounded-md dark:text-gray-900 border border-none"></textarea>
                        </div>
                    </div>
                    <div className='gap-4 col-span-full lg:col-span-4 p-8'>
                        <div className='bg-blue-400 bg-opacity-50 shadow-xl w-full px-8 py-5'>
                            <span className='text-sm text-blue-600'>optional (image)</span>
                            <input name='image' id="image" type="text" placeholder="image link" className="w-full p-5 mb-5 bg-blue-50 rounded-md dark:text-gray-900 border border-none" />
                            <button type='submit' className='btn btn-lg bg-blue-400 text-white hover:bg-blue-400'>Save course</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateCourse;