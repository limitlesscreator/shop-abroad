import './App.css';
import {Header} from "./Components/Header/Header";
import {DollarRate} from "./Components/DollarRate/DollarRate";
import {HowIsItWorks} from "./Components/HowIsItWorks/HowIsItWorks";
import {FollowPackage} from "./Components/FollowPackage/FollowPackage";
import {ShopList} from "./Components/ShopList/ShopList";
import {Contacts} from "./Components/Contacts/Contacts";
import {Information} from "./Components/Information/Information";
import {Gallery} from "./Components/Gallery/Gallery";
import {Route, Routes, useNavigate} from "react-router";
import ModalTypeOne from "./Components/Modal/ModalTypeOne";
import {ModalTypeTwo} from "./Components/Modal/ModalTypeTwo";
import {ModalTypeBiggest} from "./Components/Modal/ModalTypeBiggest";
import {Footer} from "./Components/Footer/Footer";
import {useState} from "react";
import {Accordion} from "./Components/Acordion/Accordion";

function App() {
    let [biggesModal, setBiggesModal] = useState(false)
    let [modalTypeOneOrder, setModalTypeOneOrder] = useState(false)
    let [modalCheckPackage, setModalCheckPackage] = useState(false)
    const changeUrl = useNavigate()

    return (
        <div className="App">
            <Accordion/>
            <Header/>
            <Routes>
                <Route  path={'/'} element={<DollarRate modalCheckPackage={modalCheckPackage} setModalCheckPackage={setModalCheckPackage} changeUrl={changeUrl} setModalTypeOneOrder={setModalTypeOneOrder}/>}/>
                <Route path={'/howitworks'} element={<HowIsItWorks setModalTypeOneOrder={setModalTypeOneOrder}/>}/>
                <Route path={'/follow'} element={<FollowPackage modalCheckPackage={modalCheckPackage} setModalCheckPackage={setModalCheckPackage}/>}/>
                <Route path={'/list'} element={<ShopList setModalTypeOneOrder={setModalTypeOneOrder}/>}/>
                <Route path={'/contact'} element={<Contacts/>}/>
                <Route path={'/information'} element={<Information setBiggesModal={setBiggesModal}/>}/>
            </Routes>
            {/*<DollarRate/>*/}
            {/*<HowIsItWorks/>*/}
            {/*<FollowPackage/>*/}
            {/*<ShopList/>*/}
            {/*<Contacts/>*/}
            {/*<Information/>*/}
            <ModalTypeOne  title={'Служба поддержки работает\n' +
            'с 11:00 до 22:00 по МСК'}/>
            <ModalTypeOne modal={modalTypeOneOrder} setModal={setModalTypeOneOrder} title={'Заказы обрабатываются\n' +
            'с 11:00 до 22:00 по МСК'}/>
            <ModalTypeBiggest modal={biggesModal} setModal={setBiggesModal}/>
            <div><Footer changeUrl={changeUrl}/></div>
        </div>
    );
}

export default App;
