import TitleBar from "../../components/TitleBar"
import Footer from "../../components/Footer"
import SidebarMenu from "../../components/SidebarMenu"
import MainContent from "../../components/MainContent"
import './style.css'


const Screening2 = () =>{
    return(
        <div className="layout">
            <TitleBar title='ini page Screening 2'/>
            <div className="main">
                <SidebarMenu/>
                <MainContent/>
            </div>
            <Footer/>
        </div>
    )
}

export default Screening2