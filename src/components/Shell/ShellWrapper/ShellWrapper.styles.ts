import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
    root: {
        minWidth: '75vw',
        minHeight: '75vh',
        borderRadius: '0.6rem',
        backgroundColor: `#1e1e1e`,
        boxShadow: `0 0 0 1px ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
        border: `1px solid #767676`,
    },
    header: {
        backgroundColor: `#393938`,
        borderRadius: `0.6rem 0.6rem 0rem 0rem`,
        borderBottom: `1px solid #191919`,
        height: `2.5vh`,

        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,

        padding: `0.5rem`,
        userSelect: 'none',
    },
    windowActionsWrapper: {
        display: `flex`,

        gridAutoFlow: `column`,
        gridColumnGap: `5px`,
    },
    windowAction: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,

        height: `1.25vh`,
        width: `1.25vh`,
        borderRadius: `50%`,

        '&:hover': {
            cursor: `default`,
        },
    },
    closeHoverIcon: {
        color: `#990000`,
    },
    close: {
        backgroundColor: `#fe5f58`,
    },
    minimize: {
        backgroundColor: `#febb2e`,
    },
    minimizeHoverIcon: {
        color: `#985601`,
    },
    maximize: {
        backgroundColor: `#29c740`,
    },
    maximizeHoverIcon: {
        color: `#016200`,
    },
    titleWrapper: {
        wordSpacing: `1px`,
        fontWeight: `bold`,
        fontSize: `0.75rem`,
        display: `flex`,
        alignItems: `center`,
    },
    content: {
        paddingTop: `1.5rem`,
        paddingLeft: `1.5rem`,
    },
}));
