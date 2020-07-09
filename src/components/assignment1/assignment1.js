import React, { Fragment } from 'react'

export default props => {
    const { data, onClick } = props
    return (
        <Fragment>
            <h3>Assignment 1: จงเปลี่ยนคำว่า text1 เป็น home</h3>
            {data.map((data,index) => {
                return <span key={index}>{`${data}, `}</span>
            })}
            <p><input type="button" value="click" onClick={onClick}/></p>
        </Fragment>
    )
}