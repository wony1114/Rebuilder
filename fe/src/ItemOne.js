import axios from 'axios'
import React, {useEffect, useState} from 'react'

const ItemOne = (props) => {
    const [item, setItem] = useState('')
    const itemOne = () => {
        axios.get(`http://localhost:8080/items/${props.match.params.id}`)
        .then(res => {
            setItem(res.data)
        }).catch(err => { alert(err.response)})
    }
    const editor = e => {
        e.preventDefault()
        localStorage.setItem("item", JSON.stringify(item))
        props.history.push(`/item-edit/${item.itemNum}`)
    }
    const itemDelete = e => {
        e.preventDefault()
        axios({
            url:`http://localhost:8080/items/${props.match.params.id}`,
            method:'delete',
            headers:{'Content-Type':'application/json', 'Authorization':'JWT fefege...'},
            data:{}
        }).then(res=>{
            props.history.push('/item-all')
        }).catch(err=>{
            alert(err.response)
        })
    }
    useEffect(()=>itemOne(), [])
    return(<>
    <div>
         <h3>Item One</h3>
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
                <td>{item.itemDesc}</td>
                <td>{item.itemPrice}</td>
            </tr>
            <tr>
                <td colSpan={2}><button onClick={editor}>EDIT</button></td>
                <td colSpan={2}><button onClick={itemDelete}>DELETE</button></td>
            </tr>
         </table>
     </div>
    </>)
}
export default ItemOne