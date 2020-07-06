import React from "react";
import DefaultLayout from "../../components/layout";
import { useSelector } from "react-redux"

const Dashboard = () => {

    useSelector(state => console.log(state))

    return (
        <DefaultLayout>
            <div>DASHBOARD</div>
        </DefaultLayout>
    );
};

export default Dashboard;