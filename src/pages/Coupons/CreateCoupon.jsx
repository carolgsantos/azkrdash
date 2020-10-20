import React from 'react'
import { Card } from 'antd'
import { RiBarChartFill } from 'react-icons/ri'

const CreateCoupon = () => {
    return (
        <div className="page-wrapper">
            <div className="page-wrapper__header">
                <h2 className="page-wrapper__title">
                    <RiBarChartFill /> CreateCoupon
                </h2>
            </div>

            <Card bordered>CreateCoupon</Card>
        </div>
    )
}

export default CreateCoupon
