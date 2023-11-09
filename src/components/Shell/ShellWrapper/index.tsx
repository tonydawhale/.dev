import { ScrollArea, UnstyledButton } from '@mantine/core';
import { useFullscreen, useHover, useViewportSize } from '@mantine/hooks';
import { IconArrowsMaximize, IconHome, IconMinus, IconX } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import classes from './ShellWrapper.module.css';

interface AppShellProps {
    children: React.ReactNode;
}

export default function ShellWrapper({ children }: AppShellProps) {
    const { height, width } = useViewportSize();
    const { hovered, ref } = useHover();
    const { toggle } = useFullscreen();
    const router = useRouter();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.header}>
                    <div className={classes.windowActionsWrapper} ref={ref}>
                        <Link href={'/'} passHref>
                            <UnstyledButton
                                className={classes.windowAction}
                                data-action={'close'}
                            >
                                {hovered && (
                                    <IconX
                                        width={`1.05vw`}
                                        height={`1.05vh`}
                                        className={classes.closeHoverIcon}
                                    />
                                )}
                            </UnstyledButton>
                        </Link>
                        <div
                            className={classes.windowAction}
                            data-action={'minimize'}
                        >
                            {hovered && (
                                <IconMinus
                                    width={`1.05vw`}
                                    height={`1.05vh`}
                                    className={classes.minimizeHoverIcon}
                                />
                            )}
                        </div>
                        <UnstyledButton
                            className={classes.windowAction}
                            data-action={'maximize'}
                            onClick={toggle}
                        >
                            {hovered && (
                                <IconArrowsMaximize
                                    width={`1.15vw`}
                                    height={`1.15vh`}
                                    className={classes.maximizeHoverIcon}
                                />
                            )}
                        </UnstyledButton>
                    </div>
                    <div className={classes.titleWrapper}>
                        <IconHome width={`1.15vw`} height={`1.15vh`} />
                        tony — {router.pathname} — {Math.floor(width * 0.75)}x
                        {Math.floor(height * 0.75)}
                    </div>
                    <div></div>
                </div>
                <div className={classes.content}>
                    <ScrollArea.Autosize mah={`77vh`}>
                        {children}
                    </ScrollArea.Autosize>
                </div>
            </div>
        </>
    );
}
