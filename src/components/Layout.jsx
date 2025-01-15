import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main class=" bg-gray-50 h-full">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
            
        </div>
    )
}

export default Layout;