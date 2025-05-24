import React from 'react';
import Sidebar from '../../../components/Sidebar';

const Page = () => {
    return (
        <div>
            <div className="Dashboard flex">
                <Sidebar />
                <h1>Welcome to the Dashboard</h1>
            </div>
        </div>
    );
}

export default Page;
