import PropTypes from 'prop-types';

function Course(props) {
    if (props.show === true) {
        return (
            <div className="card">
                <img src="" alt="" />
                <h1>{props.name}</h1>
                <p>{props.price}</p>
                <p>Rating:{props.rating}</p>
            </div>
        );
    }

    return null; // Return nothing if show is false
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
