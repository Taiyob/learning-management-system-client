import Banner from "../../components/Banner/Banner";
import Feedback from "../../components/Feedback/Feedback";
import Info from "../../components/Info/Info";
import LearningPath from "../../components/LearningPath/LearningPath";
import TopCourses from "../../components/TopCourses/TopCourses";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";


const Home = () => {
    return (
        <div>
           <Navbar />
           <Banner />
           <Info />
           <TopCourses />
           <LearningPath />
           <Feedback />
           <Footer />
        </div>
    );
};

export default Home;