import { Link } from 'react-router-dom';
import bgImage from '../../assets/images/bannerbg.jpg';
import bannerImg from '../../assets/images/bannerImg1.png'

const Banner = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-[800px]" style={{ 
                backgroundImage: `url(${bgImage})`,
                position: 'relative',
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
                <div className="gradient-overlay" style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(128deg, rgba(50, 135, 219, 0.9), rgba(30, 109, 189, 0.9))',
                }}></div>
                <div className="flex-col justify-between hero-content lg:flex-row-reverse">
                    <div className="w-full max-w-3xl shadow-2xl card shrink-0 bg-base-100">
                        <img src={`${bannerImg}`} alt="image" />
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="mb-10 text-6xl font-bold text-white">Learn Deasign</h1>
                        <p className="py-6 text-2xl text-white mb-14">Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.</p>
                        <button className='btn btn-lg text-[#212529] text-2xl bg-white mb-5'>Browse Courses</button> <br/>
                        <Link><a className='text-2xl text-white underline' href="">Are you a student?</a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
