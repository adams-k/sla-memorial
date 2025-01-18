import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main class="min-h-[100vh - 8em] mt-auto pb-[4em]">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
            
        </div>
    )
}

export default Layout;