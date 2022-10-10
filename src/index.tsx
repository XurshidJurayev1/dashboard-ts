import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './App';
import {setupStore} from './redux/store';
import history from './helpers/history';
import './i18Next';
import SidebarContextProvider from "./hooks/SidebarContextProvider";

export const Loader = () => {
    return (
        <div
            style={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <h1>Loading...</h1>
        </div>
    );
};

export const store = setupStore();

ReactDOM.render(
    <Provider store={store}>
        <SidebarContextProvider>
            <HistoryRouter history={history}>
                <Suspense fallback={<Loader />}>
                    <App />
                </Suspense>
            </HistoryRouter>
        </SidebarContextProvider>
    </Provider>,
    document.getElementById('root')
);
