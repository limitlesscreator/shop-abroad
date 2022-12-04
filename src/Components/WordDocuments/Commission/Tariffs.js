import React, {useState} from 'react';
import s from './Tariffs.module.sass'
import Accordion from 'react-bootstrap/Accordion';

export const Tariffs = () => {
    return (
        <div className={s.main}>
            <div  className={s.title}>
                Тарифы
            </div>
            <div className={s['wrapper']}>
                <div className={s['container']}>
                    <Accordion   defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Стандартный</Accordion.Header>
                            <Accordion.Body>
                               <div className={s.mainText}>- Доставка от 16 дней после поступления заказа на склад</div>
                               <div className={s.mainText}>- Стоимость доставки 8 € за кг, но не менее 15 € за посылку</div>
                                <br/>
                                <div className={s.clasicSub}>
                                    Доставка производится до одного из наших складов в
                                </div>
                                <div className={s.list}>
                                    -Москве <br/>
                                    -Санкт-Петербурге <br/>
                                    -Новосибирске <br/>
                                    -Казани <br/>
                                    -Челябинске
                                </div>
                                <br/>
                                <div className={s.clasicSub}>
                                    Забрать посылки со склада вы можете самостоятельно или мы отправим транспортной компанией. <br/><br/>
                                    Оплата за доставку от нашего склада до клиента производится отдельно любыми транспортными компаниями действующими в вашем регионе.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Экспресс</Accordion.Header>
                            <Accordion.Body>
                                <div className={s.mainText}>- Доставка от 12 дней после поступления заказа на склад</div>
                                <div className={s.mainText}>- Стоимость доставки 14 € за кг, но не менее 20 € за посылку</div>
                                <br/>
                                <div className={s.clasicSub}>
                                    Доставка производится до одного из наших складов в
                                </div>
                                <div className={s.list}>
                                    -Москве <br/>
                                    -Санкт-Петербурге <br/>
                                    -Новосибирске <br/>
                                    -Казани <br/>
                                    -Челябинске
                                </div>
                                <br/>
                                <div className={s.clasicSub}>
                                    Забрать посылки со склада вы можете самостоятельно или мы отправим транспортной компанией. <br/><br/>
                                    Оплата за доставку от нашего склада до клиента производится отдельно любыми транспортными компаниями действующими в вашем регионе.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Экспресс плюс</Accordion.Header>
                            <Accordion.Body>
                                <div className={s.clasicSub}>
                                    Тариф доступен не для всех интернет-магазинов, подробности уточняйте у оператора при заказе
                                </div>
                                <br/>
                                <div className={s.mainText}>- Доставка от 8 дней после поступления заказа на склад</div>
                                <div className={s.mainText}>- Стоимость доставки 20 € за кг, но не менее 30 € за посылку</div>
                                <br/>
                                <div className={s.clasicSub}>
                                    Доставка производится до одного из наших складов в
                                </div>
                                <div className={s.list}>
                                    -Москве <br/>
                                    -Санкт-Петербурге <br/>
                                    -Новосибирске <br/>
                                    -Казани <br/>
                                    -Челябинске
                                </div>
                                <br/>
                                <div className={s.clasicSub}>
                                    Забрать посылки со склада вы можете самостоятельно или мы отправим транспортной компанией.
                                </div>
                                <br/>
                                <div className={s.clasicSub}>
                                    Оплата за доставку от нашего склада до клиента производится отдельно любыми транспортными компаниями действующими в вашем регионе.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
