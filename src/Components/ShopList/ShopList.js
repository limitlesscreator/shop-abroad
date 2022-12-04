import React from 'react';
import s from './ShopList.module.sass'
import asos from '../../img/logos/asos.png'
import uniclo from '../../img/logos/uniclo.png'
import nike from '../../img/logos/nike.png'
import amazon from '../../img/logos/amazon.png'
import zara from '../../img/logos/zara.png'
import ikea from '../../img/logos/ikea.png'
import farfetch from '../../img/logos/farfetch.png'
import zaraHome from '../../img/logos/zaraHome.png'
import ebay from '../../img/logos/ebay.png'
import zalando from '../../img/logos/zalando.png'
import stockX from '../../img/logos/stockX.png'
import lego from '../../img/logos/lego.png'
import hm from '../../img/logos/HM.png'
import hmHome from '../../img/logos/HMHome.png'
import massimudoti from '../../img/logos/massimudoti.png'
import addidas from '../../img/logos/adiddas.png'
import victoria from '../../img/logos/victoria.png'
import decathlon from '../../img/logos/decathlon.png'
import burberry from '../../img/logos/burberry.png'
import monki from '../../img/logos/monki.png'
import pullBear from '../../img/logos/pullBear.png'
import Yvesant from '../../img/logos/Yvesant.png'
import mango from '../../img/logos/mango.png'
import oysno from '../../img/logos/oysno.png'
import dell from '../../img/logos/dell.png'
import swarovski from '../../img/logos/swarovski.png'
import mac from '../../img/logos/mac.png'
import shein from '../../img/logos/shein.png'
export const ShopList = ({setModalTypeOneOrder}) => {
    return (
        <div className={s.flexElems}>
            <h2 className={s.titleSicret}>Список магазинов</h2>
            <div className={s.logos}>
                <a href="https://www.asos.com/women/">
                    <img src={asos} alt="logos"/>
                </a>
                <a href="https://www.uniqlo.com/">
                    <img src={uniclo} alt="logos"/>
                </a>
                <a href="https://www.nike.com/">
                    <img src={nike} alt="logos"/>
                </a>
                <a href="https://www.amazon.de/">
                    <img src={amazon} alt="logos"/>
                </a>
                <a href="https://www.zara.com/">
                    <img src={zara} alt="logos"/>
                </a>
                <a href="https://www.ikea.com/">
                    <img src={ikea} alt="logos"/>
                </a>
                <a href="https://www.farfetch.com/shopping/men/items.aspx">
                    <img src={farfetch} alt="logos"/>
                </a>
                <a href="https://www.zarahome.com/eu/">
                    <img src={zaraHome} alt="logos"/>
                </a>
                <a href="https://www.ebay.de/">
                    <img src={ebay} alt="logos"/>
                </a>
                <a href="https://en.zalando.de/?_rfl=de">
                    <img src={zalando} alt="logos"/>
                </a>
                <a href="https://stockx.com/">
                    <img src={stockX} alt="logos"/>
                </a>
                <a href="https://www.lego.com">
                    <img src={lego} alt="logos"/>
                </a>
                <a href="https://www2.hm.com/en_eur/index.html">
                    <img src={hm} alt="logos"/>
                </a>
                <a href="https://www2.hm.com/en_us/home.html">
                    <img src={hmHome} alt="logos"/>
                </a>
                <a href="https://www.massimodutti.com/">
                    <img src={massimudoti} alt="logos"/>
                </a>
                <a href="https://www.adidas.com">
                    <img src={addidas} alt="logos"/>
                </a>
                <a href="https://www.victoriassecret.com/us/">
                    <img src={victoria} alt="logos"/>
                </a>
                <a href="https://www.decathlon.com/">
                    <img src={decathlon} alt="logos"/>
                </a>
                <a href="burberry.com">
                    <img src={burberry} alt="logos"/>
                </a>
                <a href="https://www.monki.com/">
                    <img src={monki} alt="logos"/>
                </a>
                <a href="https://www.pullandbear.com/">
                    <img src={pullBear} alt="logos"/>
                </a>
                <a href="https://www.ysl.com/en-us">
                    <img src={Yvesant} alt="logos"/>
                </a>
                <a href="https://shop.mango.com/us">
                    <img src={mango} alt="logos"/>
                </a>
                <a href="https://www.oysho.com/us/">
                    <img src={oysno} alt="logos"/>
                </a>
                <a href="https://www.dell.com/en-us">
                    <img src={dell} alt="logos"/>
                </a>
                <a href="https://www.swarovski.com/en-US/">
                    <img src={swarovski} alt="logos"/>
                </a>
                <a href="https://www.maccosmetics.com/">
                    <img src={mac} alt="logos"/>
                </a>
                <a href="https://us.shein.com/">
                    <img src={shein} alt="logos"/>
                </a>
            </div>
            <div className={s.rightSide}>
                <h2 className={s.title}>Список магазинов</h2>
                <div className={s.firstSub}>
                    <div className={s.mainPart}>В данном разделе представлены магазины, <br/>
                        с которыми отлажена система выкупа и доставки.</div>
                    <div className={s.halfMain}>Если в списке нет магазина, с которого вы хотите  <br/>
                        сделать заказ, то вы можете связаться с нами и мы <br/> оперативно ответим, сможем ли мы доставить.</div>
                </div>
                <div className={s.secondSub}>
                    <div className={s.mainPart}>
                        Если ссылка на магазин не открывается, <br/>
                        то попробуйте воспользоваться VPN сервисом.
                    </div>
                </div>
                <button onClick={() => setModalTypeOneOrder(true)} className={s.orderBtn}>Сделать заказ</button>
            </div>
        </div>
    );
};
