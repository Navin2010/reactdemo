import PropTypes from 'prop-types';

function Course(props) {
    function Buy(discount){
        console.log(props.name,"Purchased with",discount,"% discount");
        
    }
    
        return (
            props.name && <div className="card">
                {/* <img src="" alt="" /> */}
                <h1>{props.name}</h1>
                <p>{props.price}</p>
                <button onClick={(event)=>{Buy(20,event);console.log(event)}}>buy now</button>
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
