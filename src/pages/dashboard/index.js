import React from "react";
import DefaultLayout from "../../components/layout";
import { useSelector } from "react-redux"

const Dashboard = () => {

    useSelector(state => console.log(state))

    return (
        <DefaultLayout>
            <section>
                <h1>ADMIN DASHBOARD</h1>
                <h2>MI PRIMER SPINNER DIOSITO</h2>
            </section>
        </DefaultLayout>
    );
};

export default Dashboard;