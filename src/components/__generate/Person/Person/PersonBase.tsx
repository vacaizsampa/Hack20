
import React, { FC } from 'react';
import { Outlet } from 'react-router';


export const PersonBase: FC = () => {
    return (
        <>
            <Outlet />
        </>
    )
}