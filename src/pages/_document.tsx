import { ColorSchemeScript } from '@mantine/core';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap"
                    rel="stylesheet"
                />
                <ColorSchemeScript defaultColorScheme="auto" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
