import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    wrapper: {
        display: `flex`,
        alignItems: `center`,
        gridColumnGap: `15px`,
        marginLeft: `4rem`,
    },
    icons: {
        display: `flex`,
        alignItems: `center`,
        gridColumnGap: `15px`,
    },
    glowText: {
        color: `#429bb8`,
        textShadow: `0 0 5px #429bb8`,
    },
}));
