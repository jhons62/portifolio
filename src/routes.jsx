import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Contatos from './pages/Contatos'
import Page404 from './pages/Page404'
import Conteiner from './components/Conteiner'
import Header from './components/Header'
import Footer from './components/Footer'

function AppRoutes() {
    return (
        <BrowserRouter>
        <Header/>
        <Conteiner>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/Sobre" element={<Sobre />} ></Route>
                <Route path="/Projetos" element={<Projetos />} ></Route>
                <Route path="/Contatos" element={<Contatos />} ></Route>
                <Route path="*" element={ <Page404 /> }></Route>
            </Routes>
            </Conteiner>
            <Footer/>

    </BrowserRouter>
    )
}

export default AppRoutes
