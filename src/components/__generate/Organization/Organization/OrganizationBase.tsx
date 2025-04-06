
import React, { FC } from 'react';
import { Outlet } from 'react-router';


export const OrganizationBase: FC = () => {
    return (
        <>
            <Outlet />
        </>
    )
}