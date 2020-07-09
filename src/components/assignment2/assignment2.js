import React, { Fragment } from 'react'

export default props => {
    const { data, onClick } = props
    return (
        <Fragment>
            <h3>Assignment 2: จงเรียงข้อมูลตามลำดับอายุน้อยไปมาก</h3>
            <div style={{ display: 'inline-flex' }}>
                {data.map((data,index) => {
                    return (
                        <div key={index} style={{ marginLeft: '30px' }}>
                            <p>{`${data.command},`}</p>
                            <p>{`${data.fname},`}</p>
                            <p>{`${data.lname},`}</p>
                            <p>{`age ${data.age},`}</p>
                        </div>
                    )
                })}
            </div>
            <p><input type="button" value="click" onClick={onClick} /></p>
        </Fragment>
    )
}