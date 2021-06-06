import style from './scroll.module.css'

const Scroll = (props) => {

    return (
    <div className={style.scroll}>
        {props.children}
    </div>
    );
};

export default Scroll;