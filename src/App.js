import './App.css';
import {Header} from "./Components/Header/Header";
import {DollarRate} from "./Components/DollarRate/DollarRate";
import {HowIsItWorks} from "./Components/HowIsItWorks/HowIsItWorks";
import {FollowPackage} from "./Components/FollowPackage/FollowPackage";
import {ShopList} from "./Components/ShopList/ShopList";
import {Contacts} from "./Components/Contacts/Contacts";
import {Information} from "./Components/Information/Information";
import {Gallery} from "./Components/Gallery/Gallery";

function App() {
    return (
        <div className="App">
            <Header/>
            <DollarRate/>
            <HowIsItWorks/>
            <Gallery/>
            <FollowPackage/>
            <ShopList/>
            <Contacts/>
            <Information/>
        </div>
    );
}

export default App;
