import { MantineProvider } from '@mantine/core';
import React from 'react';

import Shell from '../Shell';

interface AppShellProps {
    children: React.ReactNode;
}

export default function Layout({ children }: AppShellProps) {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme: 'dark',
                fontFamily: 'Inconsolata, monospace',
            }}
        >
            <Shell/>
        </MantineProvider>
    );
}
