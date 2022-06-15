import "./styles.css";
import GoogleAnalytics from "react-ga";
import GoogleAnalytics4 from "react-ga4";
import {useState} from "react";

export default function App() {
    const [value, setValue] = useState();
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <input type='text' onChange={e => setValue(e.target.value)} defaultValue="home"/>
            <button onClick={() => {
                GoogleAnalytics.pageview(value);
                GoogleAnalytics4.send("pageview", value);
            }}>click
            </button>
        </div>
    );
}
