import style from './button-header.module.css'

const ButtonHeader = (props) => {
    const {text} = props;
    return (
        <button className={style['button-header']}>
            <span className={style.icon}>
                 {props.icon}
            </span>
           <span className={style.text}>
                {text}
           </span>
        </button>
    );
};

export default ButtonHeader;