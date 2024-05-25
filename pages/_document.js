import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx){
        const InitialProps = await Document.getInitialProps(ctx)
        return {...InitialProps}
    }

    render(){
        return (
            <Html>
                <Head>
                    <title>My Portfolio</title>
                    <meta name= "description" content="Arnold Morales Obando Portafolio Website"/>
                    <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css'/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;