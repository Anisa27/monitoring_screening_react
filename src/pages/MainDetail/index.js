import "./style.css";
import Detail from "../../components/Detail";
import SidebarMenu from "../../components/SidebarMenu";
import TitleBar from "../../components/TitleBar";
import Footer from "../../components/Footer";

const MainDetail = () => {
    return(
        <div className="layout">
            <TitleBar title='ini page Screening 1'/>
            <div className="main">
                <SidebarMenu/>
                <Detail/>
            </div>
            <Footer/>
        </div>
    )
};

export default MainDetail;
