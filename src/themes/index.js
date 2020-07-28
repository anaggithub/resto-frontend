import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { light, dark } from './constants';
import { getCurrentTheme } from '../reducers/themes'; // The theme selector

const themes = {
    light,
    dark,
};

export const ConnectedThemeProvider = ({ children }) => {
    const currentTheme = useSelector(getCurrentTheme);
    return (
        <ThemeProvider theme={themes[currentTheme]}>
            {children}
        </ThemeProvider>
    );
};
export default ConnectedThemeProvider;