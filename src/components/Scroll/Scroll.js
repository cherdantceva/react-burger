import style from './scroll.module.css'
import PropTypes from "prop-types";

const Scroll = (props) => {
    const {children} = props;
    return (
    <div className={style.scroll}>
        {children}
    </div>
    );
};

Scroll.propTypes = {
    children: PropTypes.element.isRequired,
};


export default Scroll;