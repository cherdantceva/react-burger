import React, { useState } from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './header.module.css'
import ButtonHeader from "../ButtonHeader/ButtonHeader";

const Header = () => {
    const [tab, setTab] = useState("constructor")

    return (
        <section className={style.header}>
            <div className={style.inner}>
                <div className={style.buttons}>
                    <ButtonHeader
                        icon = {<BurgerIcon />}
                        text = 'Конструктор'
                        functionClick = {() => setTab("constructor")}
                        active = {(tab === "constructor")}
                    />
                    <ButtonHeader
                        icon = {<ListIcon/>}
                        text = 'Лента заказов'
                        functionClick = {() => setTab("timeline")}
                        active = {(tab === "timeline")}
                    />
                </div>
                <div className={style.logo}>
                    <Logo />
                </div>

                <div className={style.cabinet}>
                    <ButtonHeader
                        icon = {<ProfileIcon/>}
                        text = 'Личный кабинет'
                        active = {(tab === "account")}
                    />
                </div>
            </div>
        </section>
    );
};

export default Header;