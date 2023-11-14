import Sidebar from "./components/Sidebar";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import DataCards from "./components/DataCards";


export default function Dashboard({ Component, pageProps }) {
 return(
    <Sidebar>
        <Provider store={store}>
            {/* <Component {...pageProps} /> */}
            <DataCards />
        </Provider>
    </Sidebar>

 );

}
