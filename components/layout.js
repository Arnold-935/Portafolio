import { Children } from "react"
import Navbar from "./navbar"
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";

const Layout = ({children, footer = true}) => {

    const router = useRouter();

    useEffect(() =>{

        const handleRouteChange = url=> {
            console.log(url)
            nProgress.start();
        }        
        
        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => nProgress.done());

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (
         <>
            <Navbar/>
            <main class="container py-4">
                {children}
            </main>
            
            {
                footer &&(
                    <footer class="bg-dark text-light text-center">
                        <div class="container p-4">
                            <h1>&copy; Arnold Morales Obando</h1>
                            <p>2022-{new Date().getFullYear()}</p>
                            <p>All rights Reserverd</p>
                        </div>
                    </footer>
                )
            }
            
        </>
    )
}

export default Layout;