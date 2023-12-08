import Sidebar from "./components/Sidebar";
import { Layout } from "../Layout";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import DataCards from "./components/DataCards";
import Contributors from "./components/Contributors";
import { Header } from "../Header";
import Charts from "./components/Charts";
import { Layout2 } from "../Layout2";
import Notification from "./components/Notification";
import { Container } from "@mantine/core";


export default function AdminDashboard({ Component, pageProps }) {
 return(
    // <Sidebar>
    <Layout2>
        <Provider store={store}>
        <Container className="container container-fluid px-10">
              
            {/* <Component {...pageProps} /> */}
            <div className="row">
                <div className="col-12-md">
                    <DataCards />
                </div>  
            </div>
            
             {/*<div className="p-4 grid md:grid-cols-2 grid-cols-1 gap-4 overflow-hidden">   */}
             
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 overflow-auto"> 
                    <div className="overflow-auto"> 
                        <Notification />
                    </div>

                    <div className="overflow-auto"> 
                        <Contributors />
                    </div>
                </div>
            </Container>  
            
        </Provider>
        </Layout2>
    // </Sidebar>

 );

}
