import { MantineProvider } from '@mantine/core';
import React from 'react';

import Shell from '@/components/Shell';

interface AppShellProps {
    children: React.ReactNode;
}

export default function Layout({}: AppShellProps) {
    return (
        <MantineProvider
            defaultColorScheme="dark"
            theme={{
                fontFamily: 'Inconsolata, monospace',
            }}
        >
            <Shell />
        </MantineProvider>
    );
}
