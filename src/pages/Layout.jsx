import { Header } from "../components/organisms/Header"

function Layout ({ children }){
    return(
        <>
            <Header/>
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
        </>
    )
}

export default Layout