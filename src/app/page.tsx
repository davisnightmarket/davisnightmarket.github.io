import { Html } from "next/document";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap" rel="stylesheet" />
            </Head>
            <body>

            <Image
                src="/name.png"
                width={100}
                height={75}
                alt="logo"
            />
            <div style={{
                margin: "auto",
                width: 600,
                font: 20,
                paddingTop: 20,
                fontFamily: '"Poetsen One", sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
            }}>
                The Davis Night Market
            </div>
            </body>
        </html>
    );
}
