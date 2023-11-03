import { Tooltip } from '@mantine/core';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import React from 'react';

import {
    commands,
    experience,
    icons,
    links,
    projects,
} from '../../../data/constants';
import Ascii from '../../Ascii';
import InitText from '../../InitText';
import useStyles from './ShellResponse.styles';

export default function ShellResponse({
    command,
    setComponents,
}: {
    command: string;
    setComponents: Dispatch<SetStateAction<ReactNode[]>>;
}) {
    const { classes } = useStyles();

    const res = (command: string) => {
        switch (command) {
            case 'init':
                return (
                    <div>
                        <Ascii />
                        <InitText />
                    </div>
                );
            case 'help':
                return (
                    <div>
                        {commands.map(({ command, description }, index) => (
                            <div key={index}>
                                {command} - {description}
                            </div>
                        ))}
                        <br />
                        <div>[Up Arrow] - Go to Previous Command</div>
                        <div>[Tab] - Autocomplete command</div>
                    </div>
                );
            case 'about':
                return (
                    <div>
                        <div>
                            My name is Tony. I am a Computer Science Student
                            from Los Angeles, CA studying at the University of
                            San Diego Shiley Marcos School of Engineering.
                        </div>
                        <div>
                            I am a self-taught Software Engineer who began
                            teaching myself how to code at the end of 2020 and
                            have been enjoying my experience ever since.
                        </div>
                        <div>
                            I started off with small projects such as discord
                            bots and then exponentially began learning more and
                            more concepts and am now a full-stack developer.
                        </div>
                        <div>
                            Right now, I am learning React, NextJS, HTML, and
                            CSS.
                        </div>
                        <div>
                            <h3>Technologies I Use:</h3>
                            <div className={classes.icons}>
                                {icons.map((icon, index) => (
                                    <Tooltip label={icon.label} key={index}>
                                        {icon.icon}
                                    </Tooltip>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            case 'projects':
                return (
                    <div>
                        <p>Major Projects:</p>
                        <ul>
                            {projects.map((project, index) => (
                                <li key={index}>
                                    <a
                                        href={project.link}
                                        target={'_blank'}
                                        rel={'noreferrer'}
                                        className={classes.glowText}
                                    >
                                        {project.name}
                                    </a>{' '}
                                    - {project.date}
                                    <ul>
                                        {project.description.map(
                                            (description, index) => (
                                                <li key={index}>
                                                    {description}
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                        <p>For more check out my GitHub!</p>
                    </div>
                );
            case 'experience':
                return (
                    <div>
                        <ul>
                            {experience.map((job, index) => (
                                <li key={index}>
                                    <p>
                                        <span className={classes.glowText}>
                                            {job.company}
                                        </span>{' '}
                                        - {job.position} in {job.location} from{' '}
                                        {job.startDate} to {job.endDate}
                                    </p>
                                    <ul>
                                        {job.description.map(
                                            (description, index) => (
                                                <li key={index}>
                                                    {description}
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case 'clear':
                return setComponents([]);
            case 'links':
                return (
                    <div>
                        <ul>
                            {links.map(({ label, link }, idx) => (
                                <li key={idx}>
                                    <a
                                        className={classes.glowText}
                                        href={link}
                                        target={'_blank'}
                                        rel={'noreferrer'}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return <div>zsh: command not found: {command}</div>;
        }
    };

    return (
        <div className={command != 'init' ? classes.wrapper : undefined}>
            {res(command) || null}
        </div>
    );
}
