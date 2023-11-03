import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    ascii: {
        fontFamily: 'monospace',
        whiteSpace: 'pre',
    },
}));

export default function Custom404() {
    const { classes } = useStyles();
    return <div>The resource you have reached is not found ):</div>;
}
