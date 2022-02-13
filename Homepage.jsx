import React from 'react'
import Navbar from './Navbar';
import { useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import Cars from './Cars';

export default function Homepage() {
    return (
        <>
            <main id="main_id">
                <Navbar top='-8' id1="main_id"/>
                <Cars />
            </main>
            <Sidebar id1="main_id"/>
        </>
    )
}
