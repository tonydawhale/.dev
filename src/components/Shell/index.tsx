import type { ReactNode } from 'react';
import React, { useEffect, useRef, useState } from 'react';

import Ascii from '../Ascii';
import InitText from '../InitText';
import ShellWrapper from '../Shell/ShellWrapper';
import useStyles from './Shell.styles';
import ShellInput from './ShellInput';
import ShellResponse from './ShellResponse';

export default function Shell() {
    const { classes } = useStyles();
    const scrollRef = useRef<HTMLDivElement>(null);

    const [components, setComponents] = useState<ReactNode[]>([
        <Ascii key={0} />,
        <InitText key={1} />,
    ]);

    const submitCommand = (command: string) => {
        setComponents([
            ...components,
            <ShellInput
                key={components.length + 1}
                readOnly={true}
                submit={submitCommand}
                val={command}
            />,
            <ShellResponse
                key={components.length + 2}
                command={command}
                setComponents={setComponents}
            />,
        ]);
    };

    useEffect(() => {
        if (components.length) {
            scrollRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'nearest',
            });
        }
    }, [components.length]);

    return (
        <div className={classes.root}>
            <ShellWrapper>
                {components.map((component) => component)}
                <ShellInput
                    key={2}
                    readOnly={false}
                    submit={submitCommand}
                    scrollRef={scrollRef}
                />
            </ShellWrapper>
        </div>
    );
}
