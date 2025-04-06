import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet, Route } from 'react-router';

import { EventList } from './Event/EventList'
import { EventBase } from './Event/EventBase';
import { EventCreate } from './Event/EventCreate';
import { EventUpdate } from './Event/EventUpdate';import { EventDelete } from './Event/EventDelete';
import { OrganizationList } from './Organization/OrganizationList'
import { OrganizationBase } from './Organization/OrganizationBase';
import { OrganizationCreate } from './Organization/OrganizationCreate';
import { OrganizationUpdate } from './Organization/OrganizationUpdate';import { OrganizationDelete } from './Organization/OrganizationDelete';

const { Sider } = Layout;

export const OrganizationAgg: FC = () => {
    return (
        <Layout>
            <Sider>
                <Menu mode='vertical' >

                    <Menu.Item key='Event'>
                        <Link to={'/OrganizationAgg/Event/List'}>Event</Link>
                    </Menu.Item>
                    <Menu.Item key='Organization'>
                        <Link to={'/OrganizationAgg/Organization/List'}>Organization</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Outlet />
        </Layout>
    )
}

export const OrganizationAggRouteList = () => {
    return <>

        <Route key={"Event"} path="Event" element={<EventBase />}>
            <Route key={"List"} path="List" element={<EventList />} />
            <Route key={"ListWithFilter"} path="List/:filterStr" element={<EventList />} />
            <Route key={"Create"} path="Create" element={<EventCreate />} />
            <Route key={"CreateWithFilter"} path="Create/:filterStr" element={<EventCreate />} />
            <Route key={"Update"} path="Update/:eventId" element={<EventUpdate />} />            <Route key={"Delete"} path="Delete/:eventId" element={<EventDelete />} />
        </Route>
        <Route key={"Organization"} path="Organization" element={<OrganizationBase />}>
            <Route key={"List"} path="List" element={<OrganizationList />} />
            <Route key={"ListWithFilter"} path="List/:filterStr" element={<OrganizationList />} />
            <Route key={"Create"} path="Create" element={<OrganizationCreate />} />
            <Route key={"CreateWithFilter"} path="Create/:filterStr" element={<OrganizationCreate />} />
            <Route key={"Update"} path="Update/:organizationId" element={<OrganizationUpdate />} />            <Route key={"Delete"} path="Delete/:organizationId" element={<OrganizationDelete />} />
        </Route>
    </>;
}
