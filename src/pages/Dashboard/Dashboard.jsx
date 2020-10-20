import React from 'react'

/** UI */
import { Card } from 'antd'
import { RiBarChartFill } from 'react-icons/ri'

const Dashboard = () => {
    return (
        <div className="page-wrapper">
            <div className="page-wrapper__header">
                <h2 className="page-wrapper__title">
                    <RiBarChartFill /> Painel de Controle
                </h2>
            </div>

            <div className="page-wrapper__content wrapper-dashboard">
                <Card bordered>Dashboard</Card>
            </div>
        </div>
    )
}

export default Dashboard
