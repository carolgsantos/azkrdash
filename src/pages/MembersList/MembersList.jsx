import React from 'react'

/** UI */
import { Card } from 'antd'
import { RiBarChartFill } from 'react-icons/ri'

const MembersList = () => {
    return (
        <div className="page-wrapper">
            <div className="page-wrapper__header">
                <h2 className="page-wrapper__title">
                    <RiBarChartFill /> Lista de Sócios
                </h2>
            </div>

            <div className="page-wrapper__content wrapper-mempers-list">
                <Card bordered>MembersList</Card>
            </div>
        </div>
    )
}

export default MembersList
