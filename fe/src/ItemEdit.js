import axios from 'axios'
import React, {useEffect, useState} from 'react'

const ItemEdit = (props) => {
    const [item, setItem] = useState('')
    const [itemDesc, setItemDesc] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const itemEdit = () => {
        setItem(JSON.parse(localStorage.getItem("item")))
    }
    const edit = e => {
        e.preventDefault()
        axios({
            url: `http://localhost:8080/items/${item.itemNum}`,
            method: 'put',
            headers:{'Content-Type':'application/json', 'Authorization':'JWT fefege...'},
            data:{itemNum:item.itemNum, itemName:item.itemName, itemDesc, itemPrice}
        }).then(res => {
            setItem(res.data)
        }).catch(err => {
            alert(err.response)
        })
    }
    useEffect(()=>itemEdit(), [])
    
    return(<>
    <div>
         <h3>Item Edit</h3>
         <table>
            <tr>
                <td>Item Num</td>
                <td>Item Name</td>
                <td>Item Desc</td>
                <td>Item Price</td>
            </tr> 
            <tr>
                <td>{item.itemNum}</td>
                <td>{item.itemName}</td>
                <td><input type="text" placeholder={item.itemDesc} onChange={e=>{setItemDesc(e.target.value)}}></input></td>
                <td><input type="text" placeholder={item.itemPrice} onChange={e=>{setItemPrice(e.target.value)}}></input></td>
            </tr>
            <tr>
                <td colSpan={2}><button onClick={edit}>SAVE</button></td>
                <td colSpan={2}><button onClick={()=>{props.history.push('/item-all')}}>CANCEL</button></td>
            </tr>
         </table>
     </div>
    </>)
}
export default ItemEdit