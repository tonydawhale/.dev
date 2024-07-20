import {
  cloneElement,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

import {
  EXPERIENCE,
  LINKS,
  PROGRAMMING_LANGUAGES,
  PROJECTS,
  SHELL_COMMANDS,
} from '@/data';

import Ascii from './ascii';
import Start from './start';

export default function Response({
  command,
  setComponents,
}: {
  command: string;
  setComponents?: Dispatch<SetStateAction<ReactNode[]>>;
}) {
  const handleCommand = (command: string) => {
    switch (command) {
      case 'init':
        return (
          <>
            <Ascii />
            <Start />
          </>
        );
      case 'help':
        return (
          <>
            {SHELL_COMMANDS.map(({ command, description }, idx) => (
              <div key={idx}>
                {command} - {description}
              </div>
            ))}
            <br />
            <p>[Up Arrow] - Go to Previous Command</p>
            <p>[Tab] - Autocomplete Command</p>
          </>
        );
      case 'about':
        return (
          <>
            <p>
              My name is Tony. I am a Computer Science Student from Los Angeles,
              CA studying at the University of San Diego Shiley Marcos School of
              Engineering.
            </p>
            <p>
              I am a self-taught Software Engineer who began teaching myself how
              to code at the end of 2020 and have been enjoying my experience
              ever since.
            </p>
            <p>Right now, I&apos;m learning Docker, Go, and React.</p>
            <div>
              <h2 className="my-3">Technologies I use:</h2>
              <div className="flex items-center gap-4">
                {PROGRAMMING_LANGUAGES.map((Icon, idx) => (
                  <>{cloneElement(Icon, { key: idx })}</>
                ))}
              </div>
            </div>
          </>
        );
      case 'projects':
        return (
          <>
            <p>Major Projects:</p>
            <ul className="list-disc list-outside">
              {PROJECTS.map((project, idx) => (
                <li key={idx} className="list-item">
                  <a
                    href={project.link}
                    target={'_blank'}
                    rel={'noreferrer noopener'}
                    className="glow-text-blue"
                  >
                    {project.name}
                  </a>{' '}
                  - {project.date}
                  <ul className="list-disc list-inside">
                    {project.description?.map((line, idx) => (
                      <li key={idx} className="list-item">
                        {line}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </>
        );
      case 'experience':
        return (
          <>
            <ul className="list-disc list-outside">
              {EXPERIENCE.map((job, idx) => (
                <li key={idx} className={'list-item'}>
                  <p>
                    <span className="glow-text-blue">{job.company}</span> -{' '}
                    {job.position} in {job.location} from {job.startDate} to{' '}
                    {job.endDate}
                  </p>
                  <ul className="list-disc list-inside">
                    {job.description.map((line, idx) => (
                      <li key={idx} className="list-item">
                        {line}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </>
        );
      case 'links':
        return (
          <>
            <ul className="list-disc list-outside">
              {LINKS.map(({ link, label }, idx) => (
                <li key={idx} className="list-item">
                  <a
                    href={link}
                    target={'_blank'}
                    rel={'noreferrer noopener'}
                    className="glow-text-blue"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        );
      case 'clear':
        setComponents?.([]);
      default:
        return <p>zsh: command not found: {command}</p>;
    }
  };

  return (
    <div
      className={
        command != 'init' ? 'flex flex-col items-start gap-0 ml-16' : undefined
      }
    >
      {handleCommand(command)}
    </div>
  );
}
