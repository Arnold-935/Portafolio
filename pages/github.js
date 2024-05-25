//import { getServerSideProps } from "next/dist/build/templates/pages";
import Layout from "../components/layout";
import _error from "./_error";

const Github  = ({user, statusCode}) => {

    if(statusCode) {
        return <Error statusCode={statusCode}/>
    }

    return (
        <Layout>
           <div class="row">
                <div class="col-md-4 offset-md-4">
                    <div class="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt=""/>
                        <p>{user.bio}</p>
                        <a href={user.blog} target="_blank" class="btn btn-outline-primary my-2">My Blog</a>
                        <a href={user.html_url} target="_blank" class="btn btn-outline-primary">
                            go to github
                        </a>
                    </div>
                </div>
           </div>
        </Layout>  
    ) 
}

export async function getServerSideProps(){

    const res= await fetch('https://api.github.com/users/Arnold-935')
    const data= await res.json();

    const statusCode= res.status > 200 ? res.status : false;

    return {
        props: {
            user: data,
            statusCode
        }
    }
}

export default Github;