
import './components/styles/app.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import Home from './components/Home';
import Boards from './components/Boards';
import Accessories from './components/Accessories';
import Apparel from './components/apparel/Apparel';
import Sales from './components/Sales';
import Footer from './components/Footer';
import ApparelCategories from './components/apparel/ApparelCategories';
import Cart from './components/Cart';
import firebase from './firebase.js'
import { doc, getFirestore, setDoc, collection, getDocs } from "firebase/firestore"; 


const db = getFirestore()

function App() {

  let [cartCount, setCartCount] =useState(0)
  let [cartItems, setCartItems] = useState([])
  let [cartVisible, setCartVisible] = useState(false)
  let [currentPage, setCurrentPage] = useState('')
  let items = []

  async function getItems() {
    
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach((doc) => {
      items.push(doc.data())
    })
  }



  useEffect(() => {
    getItems().then(() => {
      setCartItems(items)
    setCartCount(items.length)
    })
    
  },[])

  useEffect(() => {
    cartItems.map( async (item) => {
      await setDoc(doc(db, "items", item.title + item.id), {
        image: item.image,
        title: item.title,
        price: item.price,
        size: item.size,
        id: item.id
      })
    })
    })

  return (
    <BrowserRouter>
    <Cart cartCount={cartCount} setCartCount = {setCartCount} cartVisible ={cartVisible} setCartVisible={setCartVisible} cartItems ={cartItems} setCartItems={setCartItems}/>
    <Navbar cartCount={cartCount} setCartVisible ={setCartVisible}/>
    
    <Switch>
      <Route path exact ="/" component={Home}/>
      <Route path ="/apparel/tees" component={() => <ApparelCategories cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems}/>}/>
      <Route path ="/apparel/longsleeves" component={() => <ApparelCategories cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems}/>}/>
      <Route path="/apparel/hoodies" component={() => <ApparelCategories cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems}/>}/>
      <Route path="/apparel/jeans" component={() => <ApparelCategories cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems}/>}/>
      <Route path="/apparel/joggers" component={() => <ApparelCategories cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems}/>}/>
      <Route path="/apparel/shorts" component={() => <ApparelCategories cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems}/>}/>
      <Route path="/apparel/skateshoes" component={() => <ApparelCategories cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems}/>}/>
      <Route path="/apparel/hightops" component={() => <ApparelCategories cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems}/>}/>
      <Route path="/apparel/crocs" component={() => <ApparelCategories cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems}/>}/>
      <Route path="/apparel/hats" component={() => <ApparelCategories cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems}/>}/>
      <Route path="/apparel/socks" component={() => <ApparelCategories cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems}/>}/>
      <Route path="/apparel/underwear" component={() => <ApparelCategories cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems}/>}/>
      <Route path ="/apparel" component={Apparel}/>
      <Route path="/boards" component={Boards}/>
      <Route path="/accessories" component={Accessories}/>
      <Route path="/sales" component={Sales}/>
      
    </Switch>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
