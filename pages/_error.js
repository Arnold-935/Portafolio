import Layout from "../components/layout";

const _error = ({statusCode}) => {
    return (
        <Layout>
            {
                statusCode ? (
                    <p class="text-center">Could not load your page: StatusCode {statusCode}</p>
                ):(
                    <P>Could not get this page</P>
                )
            }
            
        </Layout>
    )
}

export default _error;