import React, {FC, lazy} from 'react';
import {Routes, Route} from 'react-router-dom';

const DashboardLayout = lazy(() => import('../layout/DashboardLayout'));

const Test = lazy(() => import('../components/Test'));
const ContentLayout = lazy(() => import('../layout/ContentLayout'));

const Router: FC = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/dashboard/*" element={<DashboardLayout />}>
                <Route path="test" element={<Test />} />
                <Route path="outbox" element={<ContentLayout />}>
                    <Route path="test" element={<h2>sadasd</h2>} />
                </Route>
            </Route>
        </Routes>
    );
};

export default Router;
