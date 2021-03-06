import React, { Fragment } from 'react'

export default props => {
    const { data, onClick } = props
    return (
        <Fragment>
            <h3>Assignment 4: ทุกครั้งที่ กด button ข้อมูลต้องไม่อยู่ตำแหน่งเดิม</h3>
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