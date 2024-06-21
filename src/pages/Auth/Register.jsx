import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import toast from 'react-hot-toast';
import { useState } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import axios from 'axios';

const Register = () => {
    const [matchPassword, setMatchPassword] = useState(false);
    const { createUser, logout } = useAuthContext();
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        const form = e.target;
        const toastId = toast.loading('Account is creating....');
        const name = form?.name?.value;
        const phone = form?.phone?.value;
        const image = form?.image?.value;
        const email = form?.email?.value;
        const password = form?.password?.value;
        const confirm_password = form?.cpassword?.value;
        form.reset();

        try {
            if (password !== confirm_password) {
                setMatchPassword(true);
                toast.error('Passwords do not match', { id: toastId });
                return;
            }

            const register = await createUser(email, password);
            //console.log('Firebase user creation response:', register);

            if (register && register.user && register.user.email) {
                //console.log('Firebase user email:', register.user.email);

                const userData = { name, phone, image, email };

                try {
                    const response = await axios.post('https://learning-management-server-ten.vercel.app/user-register', userData);
                    //console.log('MongoDB user registration response:', response.data);
                    if(response?.data?.status == "success"){
                        toast.success('User created successfully', { id: toastId });

                        logout();
                        navigate('/login');
                    }
                } catch (error) {
                    //console.error('Error saving user to MongoDB:', error);
                    toast.error('Failed to save user data', { id: toastId });
                }
            }
        } catch (e) {
            console.error('Error:', e);
            const errorMessage = e.message.split(' ')[1];
            const fullMessage = errorMessage + ': Something went wrong';
            toast.error(fullMessage, { id: toastId });
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen" style={{ background: 'linear-gradient(128deg, rgba(50, 135, 219, 0.9), rgba(30, 109, 189, 0.9))', }}>
            <div className="flex items-center gap-2 mb-8">
                <img src={logo} alt="" />
                <span className="text-4xl font-bold text-white">Tutorio</span>
            </div>
            <h2 className="mb-10 text-3xl font-bold">Register With</h2>
            <div className="mt-10">
                <button
                    //onClick={handleGoogleLogin}
                    aria-label="Login with Google"
                    type="submit"
                    className="flex items-center justify-between w-[500px] p-3 space-x-4 border rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                    >
                        <path
                            fill="#4285f4"
                            fillOpacity="1"
                            fillRule="evenodd"
                            stroke="none"
                            d="M13.72 7.159c0-.496-.045-.974-.127-1.432H7v2.708h3.767c-.162.875-.655 1.616-1.397 2.113v1.756h2.263c1.323-1.219 2.087-3.013 2.087-5.145z"
                        ></path>
                        <path
                            fill="#34a853"
                            fillOpacity="1"
                            fillRule="evenodd"
                            stroke="none"
                            d="M7 14c1.89 0 3.475-.627 4.633-1.696L9.37 10.548c-.627.42-1.43.668-2.37.668-1.824 0-3.367-1.231-3.918-2.886H.745v1.814C1.896 12.43 4.264 14 7 14z"
                        ></path>
                        <path
                            fill="#fbbc05"
                            fillOpacity="1"
                            fillRule="evenodd"
                            stroke="none"
                            d="M3.083 8.33c-.14-.42-.22-.869-.22-1.33 0-.461.08-.91.22-1.33V3.856H.745C.27 4.801 0 5.87 0 7c0 1.13.27 2.199.745 3.144L3.083 8.33z"
                        ></path>
                        <path
                            fill="#ea4335"
                            fillOpacity="1"
                            fillRule="evenodd"
                            stroke="none"
                            d="M7 2.784c1.028 0 1.95.353 2.676 1.047l2.008-2.008C10.47.693 8.887 0 7 0 4.264 0 1.896 1.569.745 3.856L3.083 5.67C3.633 4.015 5.177 2.784 7 2.784z"
                        ></path>
                    </svg>
                    <p className="font-semibold">Continue with Google</p>
                    <p></p>
                </button>
            </div>
            <p className="px-6 mt-5 text-sm text-center dark:text-gray-600">
                Already have an account?
                <Link to="/login" className="ml-1 text-white hover:underline">
                    Log In
                </Link>
                .
            </p>
            <h4 className="mt-2 text-2xl text-center text-black">OR</h4>
            <div className="mt-4">
                <form onSubmit={handleSignup} className="space-y-3">
                    <div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            className="w-[450px] px-3 py-2 border border-white focus:outline-none focus:border-b-2 font-semibold text-black"
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                            className="w-[450px] px-3 py-2 border border-white focus:outline-none focus:border-b-2 font-semibold text-black"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="image"
                            id="image"
                            placeholder="Image Url"
                            className="w-[450px] px-3 py-2 border border-white focus:outline-none focus:border-b-2 font-semibold text-black"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Username or Email"
                            className="w-[450px] px-3 py-2 border border-white focus:outline-none focus:border-b-2 font-semibold text-black"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-[450px] px-3 py-2 border border-white focus:outline-none focus:border-b-2 font-semibold text-black"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="cpassword"
                            id="cpassword"
                            placeholder="Confirm Password"
                            className="w-[450px] px-3 py-2 border border-white focus:outline-none focus:border-b-2 font-semibold text-black"
                        />
                        {
                            matchPassword && <p className="font-bold text-red-600">Password not matched.</p>
                        }
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-1/3 px-2 py-3 font-semibold bg-black rounded text-gray-50"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;