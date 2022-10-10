import React, {FC, lazy} from 'react';
import {Routes, Route} from 'react-router-dom';

const DashboardLayout = lazy(() => import('../layout/DashboardLayout'));

const Test = lazy(() => import('../components/Test'));

const Router: FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/dashboard/*" element={<DashboardLayout />}>
                <Route path="test" element={<Test />} />
            </Route>
        </Routes>
    );
};

export default Router;
