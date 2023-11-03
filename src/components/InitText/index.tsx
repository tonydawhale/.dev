import { Text } from '@mantine/core';
import React from 'react';

import useStyles from './InitText.styles';

export default function InitText() {
    const { classes } = useStyles();

    return (
        <Text>
            Welcome to my Portfolio! Execute the command{' '}
            <span className={classes.glowText}>&apos;help&apos;</span> to find a
            list of commands to use.
        </Text>
    );
}
