'use client';

import type { RefObject } from 'react';
import { useState } from 'react';

import { SHELL_COMMANDS } from '@/data';

const commandsList = SHELL_COMMANDS.map(({ command }) => command);

export default function Input({
  submit,
  readonly = false,
  val = '',
  scrollRef,
}: {
  submit?: (val: string) => void;
  readonly?: boolean;
  val?: string;
  scrollRef?: RefObject<HTMLDivElement>;
}) {
  const [command, setCommand] = useState<string>(val);
  const [usedCommands, setUsedCommands] = useState<string[]>([]);

  return (
    <div className="flex items-center gap-4 ml-8 select-none" ref={scrollRef}>
      <span className="font-bold">you@tonydoes.dev</span>
      <span className="glow-text-blue text-[1.5rem] font-bold">~</span>
      <span>%</span>
      <input
        className={`bg-transparent focus:outline-none w-full`}
        style={{
          color: commandsList.includes(command)
            ? '#29c740'
            : command != '' && !commandsList.includes(command)
              ? '#fe5f57'
              : 'inherit',
        }}
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        readOnly={readonly}
        autoFocus={!readonly}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (command != '') {
              submit?.(command);
              setUsedCommands([...usedCommands, command]);
              setCommand('');
            }
          } else if (e.key === 'Tab') {
            e.preventDefault();
            if (command != '') {
              const filteredCommands = commandsList.filter((c) =>
                c.startsWith(command),
              );
              if (filteredCommands.length === 1) {
                setCommand(filteredCommands[0]);
              } else if (filteredCommands.length > 1) {
                const usedCommandsSet = new Set(usedCommands);
                const usedFilteredCommands = filteredCommands.filter(
                  (c) => !usedCommandsSet.has(c),
                );
                if (usedFilteredCommands.length === 1) {
                  setCommand(usedFilteredCommands[0]);
                }
              }
            }
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (usedCommands.length > 0) {
              setCommand(usedCommands[usedCommands.length - 1]);
            }
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (usedCommands.length > 0) {
              setCommand(usedCommands[0]);
            }
          } else if (e.key === 'c' && e.ctrlKey) {
            e.preventDefault();
            setCommand('');
          }
        }}
      />
    </div>
  );
}
