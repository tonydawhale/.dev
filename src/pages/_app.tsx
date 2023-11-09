import '@mantine/core/styles.css';
import '@/styles/global.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@/components/layout';

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>tonydoes.dev</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
