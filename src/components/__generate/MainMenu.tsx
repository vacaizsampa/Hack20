import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import { Home } from '../Home';

import { OrganizationAgg, OrganizationAggRouteList } from './Organization/OrganizationAgg'
import { PersonAgg, PersonAggRouteList } from './Person/PersonAgg'
import { VolonteerAgg, VolonteerAggRouteList } from './Volonteer/VolonteerAgg'

const { Header } = Layout;


export const MainMenu: FC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Header>
                    <Menu mode='horizontal' >

                        <Menu.Item key='OrganizationAgg'>
                            <Link to={'/OrganizationAgg'}>OrganizationAgg</Link>
                        </Menu.Item>
                        <Menu.Item key='PersonAgg'>
                            <Link to={'/PersonAgg'}>PersonAgg</Link>
                        </Menu.Item>
                        <Menu.Item key='VolonteerAgg'>
                            <Link to={'/VolonteerAgg'}>VolonteerAgg</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Routes>
                    <Route key={"Home"} path="/" element={<Home />}>

                        <Route key={"OrganizationAgg"} path="OrganizationAgg" element={<OrganizationAgg />}>
                            {OrganizationAggRouteList()}
                        </Route>
                        <Route key={"PersonAgg"} path="PersonAgg" element={<PersonAgg />}>
                            {PersonAggRouteList()}
                        </Route>
                        <Route key={"VolonteerAgg"} path="VolonteerAgg" element={<VolonteerAgg />}>
                            {VolonteerAggRouteList()}
                        </Route>
                    </Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}