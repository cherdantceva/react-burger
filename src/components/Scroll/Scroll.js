import style from './scroll.module.css'
import PropTypes from "prop-types";

const Scroll = (props) => {
    const {children, onScroll, refScroll} = props;
    return (
    <div className={style.scroll} onScroll={onScroll} ref={refScroll}>
        {children}
    </div>
    );
};

Scroll.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Scroll;