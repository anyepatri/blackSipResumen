import { getDefaultNormalizer } from '@testing-library/dom';
import React from 'react'
import Edit from './Edit';

export default function Product() {
    const [product, setProduct] = React.useState([]);
    React.useEffect(()=>{
        getData();
    },[])
    const getData = async()=>{
        const data = await fetch("https://blackisp.herokuapp.com/products");
        const products = await data.json();
        setProduct(products);
    }
    let subTotal = 0;
    return (
        <>
            {
                product.map(item =>{
                    return(
                        <div className="containerItems">
                            <img src = {item.image}/>
                            <p className="description">{item.name}</p>
                            <h5 className="piceUnit">
                            {
                            new Intl.NumberFormat('es-CO',
                                {
                                    style: 'currency', currency: 'COP'
                                }
                            ).format(item.price)}
                            </h5>
                        </div>
                    )
                })
            }
            <Edit/>
            <>{
                product.map(item =>{
                    subTotal = subTotal + parseInt(item.price);
                })
            }</>
            <div className="subtotal">
                <h5 className="textSubTotal">SUBTOTAL
                    <br/>
                    ENVIO
                </h5>
                <h5>
                {
                    new Intl.NumberFormat('es-CO',
                        {
                            style: 'currency', currency: 'COP'
                        }
                    ).format(subTotal)
                }
                {/* <span>
                    A calcular
                </span> */}
                </h5>
            </div>
            <div class="Total">
                <h4 class="textTotal">TOTAL</h4>
                <h4>{
                    new Intl.NumberFormat('es-CO',
                        {
                            style: 'currency', currency: 'COP'
                        }
                    ).format(subTotal)
                }</h4>
            </div>
        </>
    )
}