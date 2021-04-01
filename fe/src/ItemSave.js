import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ItemSave = () => {
    const [itemName, setItemName] = useState('')
    const [itemDesc, setItemDesc] = useState('')
    const [itemPrice, setItemPrice] = useState('')
    const save = e => {
        e.preventDefault()
        axios({
            url:`http://localhost:8080/items`,
            method: 'post',
            headers: {'Content-Type': 'application/json', 'Authorization':'JWT fefege...'},
            data: {itemName, itemDesc, itemPrice}
        }).then(res => {
            document.getElementsByClassName("box").value=""
        }).catch(err=>{
            alert(err.response)
        })
    }
    return(<>
     <div>
         <h3>Item Save</h3>
         <table>
             <tr>
                 <td>Item Name</td>
                 <td>Item Desc</td>
                 <td>Item Price</td>
             </tr>
             <tr>
                 <td><input className="box" type="text" onChange={e=> setItemName(e.target.value)}></input></td>
                 <td><input className="box" type="text" onChange={e=> setItemDesc(e.target.value)}></input></td>
                 <td><input className="box" type="text" onChange={e=> setItemPrice(e.target.value)}></input></td>
             </tr>
             <tr><td colSpan={3}><button onClick={save}>SAVE</button></td></tr>
         </table>
     </div>
    </>)
}
export default ItemSave