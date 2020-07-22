import { THEME_SET } from './types';

const setTheme = (theme) => ({
    type: THEME_SET,
    payload: theme,
});

export default setTheme