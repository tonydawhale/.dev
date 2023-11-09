import { Text } from '@mantine/core';
import React from 'react';

import classes from './InitText.module.css';

export default function InitText() {
    return (
        <Text>
            Welcome to my Portfolio! Execute the command{' '}
            <span className={classes.glowText}>&apos;help&apos;</span> to find a
            list of commands to use.
        </Text>
    );
}
