import './App.css';
import {Header} from "./Components/Header/Header";
import {DollarRate} from "./Components/DollarRate/DollarRate";
import {HowIsItWorks} from "./Components/HowIsItWorks/HowIsItWorks";
import {FollowPackage} from "./Components/FollowPackage/FollowPackage";
import {ShopList} from "./Components/ShopList/ShopList";
import {Contacts} from "./Components/Contacts/Contacts";
import {Information} from "./Components/Information/Information";
import {Route, Routes, useNavigate} from "react-router";
import ModalTypeOne from "./Components/Modal/ModalTypeOne";
import {ModalTypeBiggest} from "./Components/Modal/ModalTypeBiggest";
import {Footer} from "./Components/Footer/Footer";
import {useState} from "react";
import {Tariffs} from "./Components/WordDocuments/Commission/Tariffs";
import {Faq} from "./Components/WordDocuments/FAQ/Faq";
import {Returns} from "./Components/WordDocuments/Returns/Returns";
import {ListBannedProducts} from "./Components/WordDocuments/ListBannedProducts/ListBannedProducts";
import {TariffComission} from "./Components/WordDocuments/Commission/TariffComission";
import {Commission} from "./Components/WordDocuments/Commission/Commission";

function App() {
    let [biggesModal, setBiggesModal] = useState(false)
    let [modalTypeOneOrder, setModalTypeOneOrder] = useState(false)
    let [modalCheckPackage, setModalCheckPackage] = useState(false)
    const changeUrl = useNavigate()

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route  path={'/'} element={<DollarRate modalCheckPackage={modalCheckPackage} setModalCheckPackage={setModalCheckPackage} changeUrl={changeUrl} setModalTypeOneOrder={setModalTypeOneOrder}/>}/>
                <Route path={'/howitworks'} element={<HowIsItWorks setModalTypeOneOrder={setModalTypeOneOrder}/>}/>
                <Route path={'/follow'} element={<FollowPackage modalCheckPackage={modalCheckPackage} setModalCheckPackage={setModalCheckPackage}/>}/>
                <Route path={'/list'} element={<ShopList setModalTypeOneOrder={setModalTypeOneOrder}/>}/>
                <Route path={'/contact'} element={<Contacts/>}/>
                <Route path={'/information'} element={<Information setBiggesModal={setBiggesModal}/>}/>

                <Route path={'/tarifComission'} element={<TariffComission changeUrl={changeUrl}/>}/>
                <Route path={'/tariffs'} element={<Tariffs/>}/>
                <Route path={'/commission'} element={<Commission/>}/>

                <Route path={'/faq'} element={<Faq/>}/>
                <Route path={'/returns'} element={<Returns/>}/>
                <Route path={'/bannedProducts'} element={<ListBannedProducts/>}/>
            </Routes>
            <ModalTypeOne  title={'Служба поддержки работает\n' +
            'с 11:00 до 22:00 по МСК'}/>
            <ModalTypeOne modal={modalTypeOneOrder} setModal={setModalTypeOneOrder} title={'Заказы обрабатываются\n' +
            'с 11:00 до 22:00 по МСК'}/>
            <ModalTypeBiggest modal={biggesModal} setModal={setBiggesModal}/>
            <div className={'wrapperFooter'}><Footer changeUrl={changeUrl}/></div>
        </div>
    );
}

export default App;
