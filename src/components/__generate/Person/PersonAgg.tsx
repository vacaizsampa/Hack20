import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet, Route } from 'react-router';

import { PersonList } from './Person/PersonList'
import { PersonBase } from './Person/PersonBase';
import { PersonCreate } from './Person/PersonCreate';
import { PersonUpdate } from './Person/PersonUpdate';import { PersonDelete } from './Person/PersonDelete';

const { Sider } = Layout;

export const PersonAgg: FC = () => {
    return (
        <Layout>
            <Sider>
                <Menu mode='vertical' >

                    <Menu.Item key='Person'>
                        <Link to={'/PersonAgg/Person/List'}>Person</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Outlet />
        </Layout>
    )
}

export const PersonAggRouteList = () => {
    return <>

        <Route key={"Person"} path="Person" element={<PersonBase />}>
            <Route key={"List"} path="List" element={<PersonList />} />
            <Route key={"ListWithFilter"} path="List/:filterStr" element={<PersonList />} />
            <Route key={"Create"} path="Create" element={<PersonCreate />} />
            <Route key={"CreateWithFilter"} path="Create/:filterStr" element={<PersonCreate />} />
            <Route key={"Update"} path="Update/:personId" element={<PersonUpdate />} />            <Route key={"Delete"} path="Delete/:personId" element={<PersonDelete />} />
        </Route>
    </>;
}
