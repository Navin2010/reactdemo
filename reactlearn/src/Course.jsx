import PropTypes from 'prop-types';
import { useState } from 'react';

function Course(props) {
    // let purchased=false;
    const [purchased,setPurchased]=useState(false);
    function Buy(discount){
        console.log(props.name,"Purchased with",discount,"% discount");
        // purchased=true;
        setPurchased(true);
        console.log(purchased)

        
    }
    
        return (
            props.name && <div className="card">
                {/* <img src="" alt="" /> */}
                <h1>{props.name}</h1>
                <p>{props.price}</p>
                <button onClick={(event)=>{Buy(20,event);console.log(event)}}>buy now</button>
                <button onClick={()=>props.delete(props.id)}>Delete</button>
                <p>{purchased ? "Already purchased": "Get it now"}</p>
            </div>
        );
    }

  

Course.defaultProps = {
    name: "HTML",
    price: "$199",
    show: true
};

Course.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    show: PropTypes.bool
};

export default Course;
