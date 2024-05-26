import { Children } from "react"
import Navbar from "./navbar"
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import Link from "next/link";

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
                            <h3>&copy; Arnold Morales Obando</h3>
                            <p>2022-{new Date().getFullYear()}</p>
                            <p>All rights Reserverd</p>
                            
                            <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" class="btn btn-Dark">
                                    Linkedin Profile Arnold Morales
                            </Link>

                            <Link href="https://www.instagram.com/obandoaaron/" class="btn btn-Dark">
                                    Instagram Profile Arnold Morales
                            </Link>

                            <Link href="https://wa.me/+50683578230" class="btn btn-Dark">WhatsApp Profile</Link>

                        </div>
                    </footer>
                )
            }
            
        </>
    )
}

export default Layout;