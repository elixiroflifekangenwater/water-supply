import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SimpleSlider from "./componensts/HomeSlider";
import V1 from "./v1";
const App = () => {
    return (
        <div>
            <V1/>
            {/* <SimpleSlider/> */}
        </div>
    );
};
export default App;