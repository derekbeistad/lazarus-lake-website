import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                ></link>
                {/* Favicon */}
                <link rel="icon" href="/images/favicon.ico" />
                {/* Bootstrap CSS */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />
                {/* OG Protocol Meta Tags */}
                <meta
                    property="og:url"
                    content="https://www.lazaruslakemusic.com"
                />
                          
                <meta property="og:title" content="Lazarus Lake" />
                          
                <meta
                    property="og:description"
                    content="Family Tree out now!"
                />
                          
                <meta property="og:image" content="/images/photo-2.jpg" />
                          
                <meta property="og:site_name" content="Lazarus Lake" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
