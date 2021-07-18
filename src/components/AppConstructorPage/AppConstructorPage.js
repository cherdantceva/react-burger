import React, { useState, useRef } from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './constructor-page.module.css'
import Scroll from '../Scroll/Scroll';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

const ConstructorPage = () => {
    const [current, setCurrent] = useState('one');
    const scrollContainerRef = useRef(null);
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);


    const handleScroll = () => {
        if (scrollContainerRef && firstRef && secondRef) {
            const scrollContainerPosition = scrollContainerRef.current.getBoundingClientRect()
                .top;
            const firstHeaderPosition = firstRef.current.getBoundingClientRect().top;
            const secondHeaderPosition = secondRef.current.getBoundingClientRect().top;
            const thirdHeaderPosition = thirdRef.current.getBoundingClientRect().top;
            const firstDiff = Math.abs(scrollContainerPosition - firstHeaderPosition);
            const secondDiff = Math.abs(scrollContainerPosition - secondHeaderPosition);
            const thirdDiff = Math.abs(scrollContainerPosition - thirdHeaderPosition);
            if (firstDiff < secondDiff && firstDiff < thirdDiff) {
                setCurrent("one");
            } else if (secondDiff < firstDiff && secondDiff < thirdDiff) {
                setCurrent("two");
            }   else if (thirdDiff < secondDiff && thirdDiff < firstDiff) {
                setCurrent("three");
            }
        }
    };

    return (
        <section className={style.page}>
            <h1 className={style.title}>
                Соберите бургер
            </h1>
            <div className={style.parts}>
                <div className={style.part}>
                    <div className={style.tabs}>
                        <Tab value='one' active={current === 'one'} onClick={setCurrent}>
                            Булки
                        </Tab>
                        <Tab value='two' active={current === 'two'} onClick={setCurrent}>
                            Соусы
                        </Tab>
                        <Tab value='three' active={current === 'three'} onClick={setCurrent}>
                            Начинки
                        </Tab>
                    </div>
                    <Scroll refScroll={scrollContainerRef} onScroll={handleScroll}>
                        <BurgerIngredients firstRef={firstRef} secondRef={secondRef} thirdRef={thirdRef}/>
                    </Scroll>
                </div>
                <div className={style.part}>
                    <BurgerConstructor/>
                </div>
            </div>
        </section>
    );
};

export default ConstructorPage;