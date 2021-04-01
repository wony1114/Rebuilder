import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const ItemAll = () => {
    const [items, setItems] = useState([])
    const itemAll = () => {
        axios.get(`http://localhost:8080/items`)
        .then(res=>{
            setItems(res.data)
        }).catch(err=> {
            alert(err.response)
        })
    }
    useEffect(()=>itemAll(), [])
    return(<>
        <div>
         <h3>Item All</h3>
         <table>
             <tr>
                <td>Item Num</td>
                <td>Item Name</td>
                <td>Item Desc</td>
                <td>Item Price</td>
             </tr>
             {items ? items.map((item, id)=>{
                 return(
                 <tr key={id}>
                    <td>{item.itemNum}</td>
                    <td><Link to={`/item-one/${item.itemNum}`}>{item.itemName}</Link></td>
                    <td>{item.itemDesc}</td>
                    <td>{item.itemPrice}</td>
                 </tr>)              
             }):
             <tr><td colSpan={4}>등록된 상품이 없습니다.</td></tr>
             }
             
         </table>
     </div>
    </>)
}
export default ItemAll