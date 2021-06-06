import style from './button-header.module.css'
import cn from 'classnames'
import PropTypes from 'prop-types'

const ButtonHeader = (props) => {
    const {text, icon, active, functionClick} = props;
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
                 {icon}
            </span>
           <span className={textClass}>
                {text}
           </span>
        </button>
    );
};

ButtonHeader.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool,
    functionClick: PropTypes.func,
};

export default ButtonHeader;