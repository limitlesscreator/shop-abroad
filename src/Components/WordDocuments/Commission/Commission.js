import React, {useState} from 'react';
import s from './Commission.module.sass'
import Accordion from "react-bootstrap/Accordion";


export const Commission = () => {
    return (
        <div className={s.main}>
            <div  className={s.title}>
                Комиссия сервиса
            </div>
            <div className={s['wrapper']}>
                <div className={s['container']}>
                    <Accordion   defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Одежда, обувь и косметика: от 5 до 15%</Accordion.Header>
                            <Accordion.Body>
                                <div className={s.clasicSub}>Сумма заказа</div>
                                <ul className={s.uls}>
                                    <li>до 100€ комиссия 15%</li>
                                    <li>от 100€ до 300€ комиссия 10%</li>
                                    <li>от 300€ до 500€ комиссия 7%</li>
                                    <li>Свыше 500€ комиссия 5%</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Техника: от 3 до 15%</Accordion.Header>
                            <Accordion.Body>
                                <ul className={s.uls}>
                                    <li>до 100€ комиссия 15%</li>
                                    <li>от 100€ до 300€ комиссия 12%</li>
                                    <li>от 300€ до 500€ комиссия 10%</li>
                                    <li>от 500€ до 1000€ комиссия 5%</li>
                                    <li>от 500€ до 1000€ комиссия 5%</li>
                                    <li>от 1500€ комиссия 3%</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Мебель: от 10 до 15%</Accordion.Header>
                            <Accordion.Body>
                                <div className={s.clasicSub}>Сумма заказа</div>
                                <ul className={s.uls}>
                                    <li>до 1000€ комиссия 15%</li>
                                    <li>от 1000€ комиссия 10%</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Автозапчасти: 15%</Accordion.Header>
                            <Accordion.Body>
                                <div className={s.clasicSub}>Комиссия сервиса на все автозапчасти равна 15%</div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                    {/*<div className={s.clasicSub}>Комиссия нашего сервиса составляет от 3 до 15% от стоимости заказа, без учета доставки</div>*/}
                    {/*<div className={s.mainText}>Минимальная комиссия сервиса 15€</div>*/}
                    {/*<div className={s.mainText}>-Одежда, обувь и косметика: от 5 до 15%</div>*/}
                    {/*<div className={s.clasicSub}>Сумма заказа</div>*/}
                    {/*<ul className={s.uls}>*/}
                    {/*    <li>до 100€ комиссия 15%</li>*/}
                    {/*    <li>от 100€ до 300€ комиссия 10%</li>*/}
                    {/*    <li>от 300€ до 500€ комиссия 7%</li>*/}
                    {/*    <li>Свыше 500€ комиссия 5%</li>*/}
                    {/*</ul>*/}
                    {/*<div className={s.mainText}>Техника: от 3 до 15% </div>*/}
                    {/*<div className={s.clasicSub}>Сумма заказа</div>*/}
                    {/*<ul className={s.uls}>*/}
                    {/*    <li>до 100€ комиссия 15%</li>*/}
                    {/*    <li>от 100€ до 300€ комиссия 12%</li>*/}
                    {/*    <li>от 300€ до 500€ комиссия 10%</li>*/}
                    {/*    <li>от 500€ до 1000€ комиссия 5%</li>*/}
                    {/*    <li>от 500€ до 1000€ комиссия 5%</li>*/}
                    {/*    <li>от 1500€ комиссия 3%</li>*/}
                    {/*</ul>*/}
                    {/*<div className={s.mainText}>Мебель: от 10 до 15%</div>*/}
                    {/*<div className={s.clasicSub}>Сумма заказа</div>*/}
                    {/*<ul className={s.uls}>*/}
                    {/*    <li>до 1000€ комиссия 15%</li>*/}
                    {/*    <li>от 1000€ комиссия 10%</li>*/}
                    {/*</ul>*/}
                    {/*<div className={s.mainText}>-Автозапчасти: 15%</div>*/}
                </div>
            </div>
        </div>
    );
};
