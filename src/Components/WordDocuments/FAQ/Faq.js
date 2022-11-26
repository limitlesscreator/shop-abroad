import React from 'react';
import s from './Faq.module.sass'
import Accordion from "react-bootstrap/Accordion";

export const Faq = () => {
    return (
        <>
            <div className={s.main}>
                <div className={'titleForModals'}>
                    FAQ
                </div>
                <div className={s['wrapper']}>
                    <div className={s['container']}>

                        <Accordion   defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Как проходит оплата?</Accordion.Header>
                                <Accordion.Body>
                                    <div className={s.clasicSub}>
                                        Без наценок, очередей и лишних действий — всё для вашего удобства! Оплачивайте покупки онлайн картами<b> Visa, MasterCard и МИР </b>.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Как происходит оплата при помощи банковской карты?</Accordion.Header>
                                <Accordion.Body>
                                    <div className={s.clasicSub}>
                                        По факту подтверждения вами параметров заказа система предложит произвести оплату. Далее Вы будете перенаправлены на платежный шлюз CloudPayments для указания реквизитов банковской карты.
                                    </div>                                    <div className={s.clasicSub}>
                                    Система CloudPayments— это многопрофильный процессинговый центр, который позволяет не только производить моментальную оплату покупок, но и надежно защищает введенные данные банковской карты.
                                    </div>                                    <div className={s.clasicSub}>
                                    Обработка полученной информации в CloudPayments происходит по стандарту PCI DSS 3.0. После регистрации операции внутри нашей системы не отображается никаких персональных данных, введенных вами при оплате.
                                    </div>                                    <div className={s.clasicSub}>
                                    Для того, чтобы закончить платеж, может потребоваться ввод дополнительного пароля, подтверждающий покупку. Инициация дополнительной процедуры защиты зависит от банка, держателем карты которого вы являетесь.
                                    </div>                                    <div className={s.clasicSub}>
                                    Вводимые вами сведения не передаются третьим лицам и не могут быть переданы помимо тех случаев, что регулируются законодательством РФ.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Товар уже оплачен, можно ли отменить его покупку?</Accordion.Header>
                                <Accordion.Body>
                                    <div className={s.clasicSub}>
                                        Если товар оплачен, но еще не выкуплен, его можно отменить. Если процедура выкупа еще не начата, то Вы можете связаться с нашим менеджером, чтобы он предоставил вам форму возврата.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Что будет, если продавец не отправит товар или он потеряется по дороге на склад?</Accordion.Header>
                                <Accordion.Body>
                                    <div className={s.clasicSub}>
                                        Мы связываемся с продавцом и высняем, в чем причина задержки, если не получаем подтверждения отправки в течение нескольких дней после размещения заказа.
                                    </div>
                                    <div className={s.clasicSub}>
                                        Мы связываемся с продавцом и высняем, в чем причина задержки, если не получаем подтверждения отправки в течение нескольких дней после размещения заказа.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Должен ли я заполнять таможенную декларацию?</Accordion.Header>
                                <Accordion.Body>
                                    <div className={s.clasicSub}>
                                        Таможенную декларацию за вас заполняют сотрудники нашего сервиса.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Что делать после выкупа заказа?</Accordion.Header>
                                <Accordion.Body>
                                    <div className={s.clasicSub}>
                                        После того, как оператор выкупит заказ, вам необходимо проверить информацию на скриншоте - подтверждении заказа магазином. Если скриншот не был предоставлен оператором, необходимо оставить в чате с нашим сервисом комментарий с просьбой предоставить скриншот или написать в поддержку.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Когда мой заказ поступит на склад?</Accordion.Header>
                                <Accordion.Body>
                                    <div className={s.clasicSub}>
                                        Примерный срок доставки заказов из магазинов, расположенных на территории США, составляет около 3-7 рабочих дней, из европейских - 3-14 рабочих дней. Если заказ был выкуплен на частный адрес, то срок доставки немного увеличивается (с частного адреса на адрес склада доставка обычно занимает от 2 до 5 рабочих дней). В случае превышения указанных сроков доставки необходимо обратиться к оператору через комментарий в форме заказа и уточнить информацию по доставке.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>Куда доставляем?</Accordion.Header>
                                <Accordion.Body>
                                    <div className={s.clasicSub}>
                                        Shop Abroad доставляет ваши заказы по всей России.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header>Как и где я получу посылку?</Accordion.Header>
                                <Accordion.Body>
                                    <div className={s.clasicSub}>
                                        Место получения посылок зависит от выбранного способа доставки.
                                        При оформлении заказа, вы можете оформить доставку курьером до двери квартиры/офиса, а также самостоятельно забрать посылку в одном из
                                    </div>
                                    <ul className={s.clasicSub}>
                                        <li>Отделений почты</li>
                                        <li>Отделений СДЭКа</li>
                                        <li>BOXBERRY отделение или постамат </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
};
