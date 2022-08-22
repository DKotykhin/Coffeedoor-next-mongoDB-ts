import Footer from "./Footer";
import React from "react";

export interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div style={{ 'minHeight': 'calc(100vh - 260px)' }}>
                {children}
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default Layout;
