import axios from "axios";
import { useEffect, useState } from "react";
import CourseCard from "../../components/Dashboard/CourseCard";

const Course = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`https://learning-management-server-ten.vercel.app/get-all-course`);
                console.log(response?.data?.result);
                setCourses(response.data?.result);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <>
            <h3 className="text-3xl text-blue-600 text-center">All Courses</h3>
            <div className="grid grid-cols-4 gap-5 p-10">
                {
                    courses.map(course => (
                        <CourseCard className="" key={course._id}>
                            {course?.title}
                        </CourseCard>
                    ))
                }
            </div>
        </>
    );
};

export default Course;
