import React, { Fragment } from 'react'

export default props => {
    const { data, answer, onClick } = props
    return (
        <Fragment>
            <h3>Assignment 5: เมื่อ กด button ให้ check ว่าข้อมูลเรียงตามอายุจากมากไปน้อยหรือไม่ ถ้าใช่ ให้ check box ถ้าไม่ ไม่ต้อง check box</h3>
            <div style={{ display: 'inline-flex' }}>
                {data.map((data, index) => {
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
            <div>
                <input type="checkbox" checked={answer} />
            </div>
            <p><input type="button" value="click" onClick={onClick} /></p>
        </Fragment>
    )
}