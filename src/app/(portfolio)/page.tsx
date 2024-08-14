'use client';

import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

import Ascii from '@/components/ascii';
import Input from '@/components/input';
import Response from '@/components/response';
import Start from '@/components/start';

export default function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [components, setComponents] = useState<ReactNode[]>([
    <Ascii key={0} />,
    <Start key={1} />,
  ]);

  const submitCommand = (val: string) => {
    setComponents([
      ...components,
      <Input key={components.length} readonly={true} val={val} />,
      <Response
        key={components.length + 1}
        command={val}
        setComponents={val === 'clear' ? setComponents : undefined}
      />,
    ]);
  };

  useEffect(() => {
    if (components.length) {
      scrollRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }, [components.length]);

  return (
    <>
      {components.map((component) => component)}
      <Input readonly={false} submit={submitCommand} scrollRef={scrollRef} />
    </>
  );
}
