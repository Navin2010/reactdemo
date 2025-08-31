const Course1="HTML"

function Course(props){
    return(
        <div className="card">
            <img src=" " alt=" "></img>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
        </div>

    )
}

Course.defaultProps{
    name:"HTML"
    price:"$199"
}

export default Course;
