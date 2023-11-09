import { TextInput } from '@mantine/core';
import { getHotkeyHandler, useFocusTrap } from '@mantine/hooks';
import { useState } from 'react';

import { commands as ShellCommands } from '@/data/constants';

import classes from './ShellInput.module.css';

const commands = ShellCommands.map(({ command }) => command);

export default function ShellInput({
    readOnly,
    submit,
    val = '',
    scrollRef,
}: {
    readOnly: boolean;
    submit: (command: string) => void;
    val?: string;
    scrollRef?: React.RefObject<HTMLElement>;
}) {
    const focusTrapRef = useFocusTrap(true);
    const [usedCommands, setUsedCommands] = useState<string[]>([]);
    const [value, setValue] = useState<string>(val);

    return (
        <div
            className={classes.wrapper}
            // @ts-ignore
            ref={scrollRef}
        >
            <span className={classes.user}>you@tonydoes.dev</span>
            <span className={classes.tilda}>~</span>
            <span>%</span>
            <TextInput
                data-autofocus
                unstyled
                data-valid={
                    commands.includes(value)
                        ? 'true'
                        : value != '' && !commands.includes(value)
                        ? 'false'
                        : undefined
                }
                classNames={{
                    input: classes.inputWrapperInput,
                    root: classes.inputWrapperRoot,
                }}
                ref={!readOnly ? focusTrapRef : null}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={getHotkeyHandler([
                    [
                        'enter',
                        () => {
                            submit(value);
                            setUsedCommands([...usedCommands, value]);
                            setValue('');
                        },
                    ],
                    [
                        'ArrowUp',
                        () => {
                            setValue(usedCommands[usedCommands.length - 1]);
                            setUsedCommands(usedCommands.slice(0, -1));
                        },
                    ],
                    [
                        'Tab',
                        () => {
                            setValue(
                                commands.find((command) =>
                                    command.startsWith(value),
                                ) || value,
                            );
                        },
                    ],
                    [
                        'ctrl+c',
                        () => {
                            setValue('');
                        },
                    ],
                ])}
                readOnly={readOnly}
            />
        </div>
    );
}
