import React from 'react'
import {Link, Route} from 'react-router-dom'
import ItemSave from './ItemSave'
import ItemAll from './ItemAll'
import ItemEdit from './ItemEdit'
import ItemOne from './ItemOne'

const App = () => {
  return(<>
  <ul>
    <li><Link to='/item-save'>Item Save</Link></li>
    <li><Link to='/item-all'>Item All</Link></li>
  </ul>
  <Route path='/' exact component={ItemSave}></Route>
  <Route path='/item-save' component={ItemSave}></Route>
  <Route path='/item-all' component={ItemAll}></Route>
  <Route path='/item-one/:id' component={ItemOne}></Route>
  <Route path='/item-edit' component={ItemEdit}></Route>
  
  </>)
}

export default App;
