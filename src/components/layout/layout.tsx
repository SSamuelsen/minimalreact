import React from "react"
import Footer from "./footer"
import Header from "./header"
import './layout.css';

const Layout = (props: any) => {
    return (
        <div className="Layout">
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}

export default Layout;