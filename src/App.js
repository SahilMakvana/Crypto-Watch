import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from "@material-ui/core";

const App = () => {
    const useStyles = makeStyles(() => ({
        App: {
            backgroundColor: "#14161a",
            color: "white",
            minHeight: "100vh",
        },
    }));

    const Classes = useStyles();

    return (
        <BrowserRouter>
            <div className={Classes.App}>
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/coins/:id" element={<Coinpage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
// Developed by SahilMakvana
// Developed by SahilMakvana

// Developed by SahilMakvana