import TitleBar from "../../components/TitleBar"
import Footer from "../../components/Footer"
import SidebarMenu from "../../components/SidebarMenu"
import MainContent from "../../components/MainContent"
import './style.css'


const Screening3 = () =>{
    return(
        <div className="layout">
            <TitleBar title='ini page Screening 3'/>
            <div className="main">
                <SidebarMenu/>
                <MainContent
                    title='Screening 3'
                    detailPage='/sc3/detail/'
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Screening3