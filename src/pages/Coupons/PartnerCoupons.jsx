import React from 'react'
import { Card } from 'antd'
import { RiBarChartFill } from 'react-icons/ri'

const PartnerCoupons = () => {
    return (
        <div className="page-wrapper">
            <div className="page-wrapper__header">
                <h2 className="page-wrapper__title">
                    <RiBarChartFill /> PartnerCoupons
                </h2>
            </div>

            <Card bordered>PartnerCoupons</Card>
        </div>
    )
}

export default PartnerCoupons
