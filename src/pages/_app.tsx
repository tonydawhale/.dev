import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactNode } from 'react';
import { useState } from 'react';

import Layout from '../components/layout';

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
    const [shellComponents, setShellComponents] = useState<ReactNode[]>([]);

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