import { useState } from "react";
import Course from "./Course";

function CourseList() {
    const [courses, setCourses] = useState([
        {
            id: 1,
            name: "HTML",
            price: 199,
            rating: 5
        },
        {
            id: 2,
            name: "CSS",
            price: 999,
            rating: 5
        },
        {
            id: 3,
            name: "JS",
            price: 499,
            rating: 5
        }
    ]);

    function handleDelete(id) {
        const newCourses = courses.filter((course) => course.id !== id);
        setCourses(newCourses);
    }

    const sortedCourses = [...courses].sort((x, y) => x.price - y.price);

    const coursesList = sortedCourses.map((course) => (
        <Course
            key={course.id}
            name={course.name}
            price={course.price}
            rating={course.rating}
            show={true}
            id={course.id}
            delete={handleDelete}
        />
    ));

    return (
        <div>
            <h2>Available Courses</h2>
            {coursesList}
        </div>
    );
}

export default CourseList;
