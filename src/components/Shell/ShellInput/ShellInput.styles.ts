import { createStyles } from '@mantine/core';

export default createStyles(() => ({
    wrapper: {
        display: `flex`,
        alignItems: `center`,
        gridColumnGap: `15px`,
        marginLeft: `2rem`,
        userSelect: `none`,
    },
    inputWrapperInput: {
        backgroundColor: `transparent`,
        border: `transparent`,
        color: `white`,
        outline: `none`,

        width: `100%`,

        fontFamily: `Inconsolata, monospace`,
    },
    inputWrapperInvalidCommand: {
        color: `#fe5f58`,
    },
    inputWrapperValidCommand: {
        color: `#29c740`,
    },
    inputWrapperRoot: {
        width: `75%`,
    },
    tilda: {
        color: `#429bb8`,
        fontSize: `1.5rem`,
        fontWeight: `bold`,
        textShadow: `0 0 5px #429bb8`,
    },
    user: {
        fontWeight: `bold`,
    },
}));
