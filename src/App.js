import './App.css';
import {Header} from "./Components/Header/Header";
import {DollarRate} from "./Components/DollarRate/DollarRate";
import {HowIsItWorks} from "./Components/HowIsItWorks/HowIsItWorks";
import {FollowPackage} from "./Components/FollowPackage/FollowPackage";
import {ShopList} from "./Components/ShopList/ShopList";

function App() {
    return (
        <div className="App">
            <Header/>
            <DollarRate/>
            <HowIsItWorks/>
            <FollowPackage/>
            <ShopList/>
        </div>
    );
}

export default App;
