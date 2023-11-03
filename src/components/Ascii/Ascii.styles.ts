import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    ascii: {
        fontFamily: `monospace`,
        fontSize: `0.75rem`,
        whiteSpace: `pre`,

        [`@media (max-width: 900px)`]: {
            fontSize: `0.5rem`,
        },

        [`@media (max-width: 600px)`]: {
            fontSize: `0.35rem`,
        },

        [`@media (max-width: 400px)`]: {
            fontSize: `0.25rem`,
        },
    },
}));
