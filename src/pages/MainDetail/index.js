import "./style.css";
import Detail from "../../components/Detail";
import SidebarMenu from "../../components/SidebarMenu";
import TitleBar from "../../components/TitleBar";
import Footer from "../../components/Footer";

const MainDetail = (props) => {
    return(
        <div className="layout">
            <TitleBar title='ini page Screening 1'/>
            <div className="main">
                <SidebarMenu/>
                <Detail
                detailGrading={props.detailGrading}
                payloadRes={props.payloadRes}
                payloadReq={props.payloadReq}
                />
            </div>
            <Footer/>
        </div>
    )
};

export default MainDetail;
