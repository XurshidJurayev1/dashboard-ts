import React, {FC, lazy} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../components/home';

const DashboardLayout = lazy(() => import('../layout/DashboardLayout'));

const ContentLayout = lazy(() => import('../layout/ContentLayout'));

const Router: FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/dashboard/*" element={<DashboardLayout />}>
                <Route path='home' element={<Home />} />
                <Route path="outbox" element={<ContentLayout />}>
                    <Route path="test" element={<h2>sadasd</h2>} />
                </Route>
            </Route>
        </Routes>
    );
};

export default Router;
