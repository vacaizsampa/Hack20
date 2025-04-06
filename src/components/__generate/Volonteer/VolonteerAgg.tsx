import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet, Route } from 'react-router';

import { VolonteerList } from './Volonteer/VolonteerList'
import { VolonteerBase } from './Volonteer/VolonteerBase';
import { VolonteerCreate } from './Volonteer/VolonteerCreate';
import { VolonteerUpdate } from './Volonteer/VolonteerUpdate';import { VolonteerDelete } from './Volonteer/VolonteerDelete';
import { VolonteerEventRequestList } from './VolonteerEventRequest/VolonteerEventRequestList'
import { VolonteerEventRequestBase } from './VolonteerEventRequest/VolonteerEventRequestBase';
import { VolonteerEventRequestCreate } from './VolonteerEventRequest/VolonteerEventRequestCreate';
import { VolonteerEventRequestUpdate } from './VolonteerEventRequest/VolonteerEventRequestUpdate';import { VolonteerEventRequestDelete } from './VolonteerEventRequest/VolonteerEventRequestDelete';

const { Sider } = Layout;

export const VolonteerAgg: FC = () => {
    return (
        <Layout>
            <Sider>
                <Menu mode='vertical' >

                    <Menu.Item key='Volonteer'>
                        <Link to={'/VolonteerAgg/Volonteer/List'}>Volonteer</Link>
                    </Menu.Item>
                    <Menu.Item key='VolonteerEventRequest'>
                        <Link to={'/VolonteerAgg/VolonteerEventRequest/List'}>VolonteerEventRequest</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Outlet />
        </Layout>
    )
}

export const VolonteerAggRouteList = () => {
    return <>

        <Route key={"Volonteer"} path="Volonteer" element={<VolonteerBase />}>
            <Route key={"List"} path="List" element={<VolonteerList />} />
            <Route key={"ListWithFilter"} path="List/:filterStr" element={<VolonteerList />} />
            <Route key={"Create"} path="Create" element={<VolonteerCreate />} />
            <Route key={"CreateWithFilter"} path="Create/:filterStr" element={<VolonteerCreate />} />
            <Route key={"Update"} path="Update/:volonteerId" element={<VolonteerUpdate />} />            <Route key={"Delete"} path="Delete/:volonteerId" element={<VolonteerDelete />} />
        </Route>
        <Route key={"VolonteerEventRequest"} path="VolonteerEventRequest" element={<VolonteerEventRequestBase />}>
            <Route key={"List"} path="List" element={<VolonteerEventRequestList />} />
            <Route key={"ListWithFilter"} path="List/:filterStr" element={<VolonteerEventRequestList />} />
            <Route key={"Create"} path="Create" element={<VolonteerEventRequestCreate />} />
            <Route key={"CreateWithFilter"} path="Create/:filterStr" element={<VolonteerEventRequestCreate />} />
            <Route key={"Update"} path="Update/:volonteerEventRequestId" element={<VolonteerEventRequestUpdate />} />            <Route key={"Delete"} path="Delete/:volonteerEventRequestId" element={<VolonteerEventRequestDelete />} />
        </Route>
    </>;
}
