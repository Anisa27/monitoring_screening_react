
import TitleBar from "../../components/TitleBar"
import Footer from "../../components/Footer"
import MainContent from "../../components/MainContent"
import './style.css'
import SidebarMenu from "../../components/SidebarMenu"

const Home =()=>{
    return(
        <div className="layout">
            <TitleBar title='ini page home'/>
            <div className="main">
                <SidebarMenu/>
                <MainContent/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;