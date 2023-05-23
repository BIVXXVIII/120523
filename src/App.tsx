import Customers from "./components/Customers/Customers";
import Layaout from "./components/Layaout";

function App() {
    return (
        <div className="App">
            <Layaout>
                <Customers />
            </Layaout>
        </div>
    );
}

export default App;
