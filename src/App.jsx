import React from 'react';

import './InputStyles.css';
import './ScrollStyles.css';

import {RouterProvider} from 'react-router-dom';

import {router} from './Router.jsx';
import ThemeWithDarkModeContextProvider
    from './hooks/ThemeWithDarkModeContextProvider.jsx';


const App = () => {
    return (
        <ThemeWithDarkModeContextProvider>
            <RouterProvider router={router} />
        </ThemeWithDarkModeContextProvider>
    );
};

export default App;
