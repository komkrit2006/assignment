import React, { Fragment } from 'react'

export default props => {
    const { data1, data2, onClick } = props
    return (
        <Fragment>
            <h3>Assignment 3: จงเรียงลำดับข้อมูล ชื่อ กับ นามสกุลให้ถูกต้องตามลำดับ Id</h3>
            <div style={{ display: 'inline-flex' }}>
                {data1.map((data,index) => {
                    return (
                        <div key={index} style={{ marginLeft: '30px' }}>
                            <p>{`${data.id},`}</p>
                            <p>{`${data.fname},`}</p>
                            <p>lname 2</p>
                        </div>
                    )
                })}
            </div>
            <p><input type="button" value="click" onClick={onClick} /></p>
        </Fragment>
    )
}