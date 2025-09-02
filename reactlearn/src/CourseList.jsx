import Course from "./Course";

function CourseList() {
    const courses = [
        {
            name: "HTML",
            price: "$199",
            rating: 5
        },
        {
            name: "CSS",
            price: "$199",
            rating: 5
        },
        {
            name: "JS",
            price: "$499",
            rating: 5
        }
    ];

    const coursesList = courses.map((course, index) => (
        <Course 
            key={index} 
            name={course.name} 
            price={course.price} 
            rating={course.rating} 
            show={true} // Add this if you're using `props.show`
        />
    ));

    return <>{coursesList}</>;
}

export default CourseList;
