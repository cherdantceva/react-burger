import { Logo, Icons, BurgerIcon, ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './header.module.css'
import ButtonHeader from "../AppButtonHeader/AppButtonHeader";

const Header = () => {

    return (
        <section className={style.header}>
            <div className={style.inner}>
                <div className={style.buttons}>
                    <ButtonHeader
                        icon = {<BurgerIcon />}
                        text = 'Конструктор'
                    />
                    <ButtonHeader
                        icon = {<ListIcon/>}
                        text = 'Лента заказов'
                    />
                </div>
                <div className={style.logo}>
                    <Logo />
                </div>

                <div className={style.cabinet}>
                    <ButtonHeader
                        icon = {<ListIcon/>}
                        text = 'Лента заказов'
                    />
                </div>
            </div>
        </section>
    );
};

export default Header;