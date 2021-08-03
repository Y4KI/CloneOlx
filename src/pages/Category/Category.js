import React from 'react'
import Container from '../../containers/container'
import './Category.css'
import datas from '../../data/data'
import { useParams } from 'react-router-dom'

function Category() {
    const { category } = useParams()
    const data = datas.filter(i => i.category === category)[0].data
    console.log(data);
    return (
        <Container>
            <div className="category container">
                <h1>Category: <b>{category}</b></h1>
                {data.map((i,index) => <div className="col-12 d-flex shadow my-3 row" key={index}>
                    <img src={i.img} alt="pics" className="col-3"/>
                    <div className="category_right-side col-9">
                        <div className="d-flex justify-content-between">
                            <div className="img_box"></div>
                            <p>{i.title}</p>
                            <p>{i.price}</p>
                        </div>
                        <span className="location">{i.location}</span>
                    </div>
                </div>)}
            </div>
        </Container>
    )
}

export default Category
