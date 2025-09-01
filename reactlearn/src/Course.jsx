const Course1="HTML"

function Course(props){
    if(props.show==true){
    return(
        <div className="card">
            <img src=" " alt=" "></img>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
        </div>

    )
}
else{
    return(
        <div className="card">Course not available</div>
    )
}
}

Course.defaultProps={
    name:"HTML",
    price:"$199"
    
}

export default Course;
