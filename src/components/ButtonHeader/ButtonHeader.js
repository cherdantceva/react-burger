import style from './button-header.module.css'
import cn from 'classnames'

const ButtonHeader = (props) => {
    const {text, active, functionClick} = props;
    console.log(text, active, functionClick)
    const buttonClass = cn( {
        [style['button-header']]: true,
        [style['button-header_active']]: active === true,
    });

    const iconClass = cn( {
        [style.icon]: true,
        [style.icon_active]: active === true,
    });

    const textClass = cn( {
        [style.text]: true,
        [style.text_active]: active === true,
    });
    return (
        <button className={buttonClass} onClick={functionClick}>
            <span className={iconClass}>
                 {props.icon}
            </span>
           <span className={textClass}>
                {text}
           </span>
        </button>
    );
};

export default ButtonHeader;