import React from 'react'
import { RiBarChartFill } from 'react-icons/ri'
import { Card } from 'antd'

const Partners = () => {
    return (
        <div className="page-wrapper">
            <div className="page-wrapper__header">
                <h2 className="page-wrapper__title">
                    <RiBarChartFill /> Partners
                </h2>
            </div>

            <Card bordered>Partners</Card>
        </div>
    )
}

export default Partners
