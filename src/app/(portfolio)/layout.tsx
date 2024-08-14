'use client';

import '@/styles/globals.css';

import { LuHome, LuMaximize2, LuMinus, LuX } from 'react-icons/lu';

import { ScrollArea } from '@/components/ui/scroll-area';
import { useViewportSize } from '@/hooks/use-viewport-size';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { height, width } = useViewportSize();
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@500&display=swap"
          rel="stylesheet"
        />
        <title>tonydoes.dev</title>
      </head>
      <body>
        <div className="m-[5%] mb-0">
          <div className="min-w-[75vw] h-[75vh] max-h-[75vh] rounded-lg bg-[#1e1e1e] border-[#767676] border-[1px] shadow-[0_0_0_1px_#525252]">
            <div className="bg-[#393938] rounded-t-lg border-b-[1px] border-[#191919] h-[2.5vh] flex justify-between items-center p-2 select-none">
              <div className="flex gap-1 grid-flow-col">
                <div className="windowAction bg-[#fe5f57] text-[#990000]">
                  <LuX className="opacity-0 hover:opacity-100" size={16} />
                </div>
                <div className="windowAction bg-[#febb2e] text-[#985601]">
                  <LuMinus className="opacity-0 hover:opacity-100" size={16} />
                </div>
                <div className="windowAction bg-[#29c740] text-[#016200]">
                  <LuMaximize2
                    className="opacity-0 hover:opacity-100"
                    size={16}
                  />
                </div>
              </div>
              <div className="font-bold text-[0.75rem] flex items-center">
                <LuHome className="h-[1.15vh] w-[1.15vw]" />
                tony - / - {Math.floor(width * 0.75)}x
                {Math.floor(height * 0.75)}
              </div>
              <div />
            </div>
            <ScrollArea className="pt-[1.5rem] pl-[1.5rem] h-[95%] max-w-full">
              {children}
            </ScrollArea>
          </div>
        </div>
      </body>
    </html>
  );
}
