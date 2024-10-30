import Footer from "../components/layout/footer/Footer"
import Header from "../components/layout/header/Header"
import Main from "../components/layout/main/Main"
import '../styles/app.css'
function LayoutPublic() {
  return (
    <>
    <div className="header-wrapper" >
    <Header/>
    </div>
    <div className="principal-wrapper">
    <Main  />
  
    </div>
    <Footer/>
    </>
   
  )
}

export default LayoutPublic