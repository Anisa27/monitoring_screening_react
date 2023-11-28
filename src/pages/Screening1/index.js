import TitleBar from "../../components/TitleBar"
import Footer from "../../components/Footer"
import SidebarMenu from "../../components/SidebarMenu"
import MainContent from "../../components/MainContent"
import './style.css'


const Screening1 = () =>{
    return(
        <div className="layout">
            <TitleBar title='ini page Screening 1'/>
            <div className="main">
                <SidebarMenu/>
                <MainContent
                    title='Screening 1'
                    detailPage='/sc1/detail/'
                    scoring='getScoring'
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Screening1