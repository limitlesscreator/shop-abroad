import './App.css';
import {Header} from "./Components/Header/Header";
import {DollarRate} from "./Components/DollarRate/DollarRate";
import {HowIsItWorks} from "./Components/HowIsItWorks/HowIsItWorks";
import {FollowPackage} from "./Components/FollowPackage/FollowPackage";
import {ShopList} from "./Components/ShopList/ShopList";
import {Contacts} from "./Components/Contacts/Contacts";
import {Information} from "./Components/Information/Information";
import {Gallery} from "./Components/Gallery/Gallery";
import {Route, Routes} from "react-router";
import Modal from "./Components/Modal/Modal";

function App() {
    return (
        <div className="App">

            <Header/>
            <Routes>
                <Route path={'/'} element={<DollarRate/>}/>
                <Route path={'/howitworks'} element={<HowIsItWorks/>}/>
                <Route path={'/follow'} element={<FollowPackage/>}/>
                <Route path={'/list'} element={<ShopList/>}/>
                <Route path={'/contact'} element={<Contacts/>}/>
                <Route path={'/information'} element={<Information/>}/>
            </Routes>
            {/*<DollarRate/>*/}
            {/*<HowIsItWorks/>*/}
            {/*<FollowPackage/>*/}
            {/*<ShopList/>*/}
            {/*<Contacts/>*/}
            {/*<Information/>*/}
            <Modal/>

        </div>
    );
}

export default App;
