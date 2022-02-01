
import './components/styles/app.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import Home from './components/pages/Home';
import Boards from './components/pages/Boards';
import Apparel from './components/pages/Apparel';
import Sales from './components/pages/Sales';
import Footer from './components/Footer';
import CurrentPage from './components/pages/CurrentPage';
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
      <Route path ="/apparel/tees" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'tees'} type ={'apparel'}/>}/>
      <Route path ="/apparel/longsleeves" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'longsleeves'} type ={'apparel'}/>}/>
      <Route path="/apparel/hoodies" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'hoodies'} type ={'apparel'}/>}/>
      <Route path="/apparel/jeans" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'jeans'} type ={'apparel'}/>}/>
      <Route path="/apparel/joggers" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'joggers'} type ={'apparel'}/>}/>
      <Route path="/apparel/shorts" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'shorts'} type ={'apparel'}/>}/>
      <Route path="/apparel/skateshoes" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'skateshoes'} type ={'apparel'}/>}/>
      <Route path="/apparel/hightops" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'hightops'} type ={'apparel'}/>}/>
      <Route path="/apparel/rollerskates" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'rollerskates'} type ={'apparel'}/>}/>
      <Route path="/apparel/hats" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'hats'} type ={'apparel'}/>}/>
      <Route path="/apparel/socks" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'socks'} type ={'apparel'}/>}/>
      <Route path="/apparel/underwear" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'underwear'} type ={'apparel'}/>}/>
      <Route path ="/apparel" component={Apparel}/>
      <Route path="/boards/skateboards" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'skateboards'} type={'boards'}/>}/>
      <Route path="/boards/longboards" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'longboards'} type={'boards'}/>}/>
      <Route path="/boards/cruisers" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'cruisers'} type={'boards'}/>}/>
      <Route path="/boards/wheels" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'wheels'} type={'boards'}/>}/>
      <Route path="/boards/trucks" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'trucks'} type={'boards'}/>}/>
      <Route path="/boards/griptape" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'griptape'} type={'boards'}/>}/>
      <Route path="/boards/helmets" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'helmets'} type={'boards'}/>}/>
      <Route path="/boards/kneepads" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'kneepads'} type={'boards'}/>}/>
      <Route path="/boards/elbowpads" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'elbowpads'} type={'boards'}/>}/>
      <Route path="/boards" component={Boards}/>
      <Route path="/accessories" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'accessories'} type={'accessories'}/>}/>
      <Route path="/sales" component={() => <CurrentPage cartCount = {cartCount} setCartCount={setCartCount}  cartItems ={cartItems} setCartItems={setCartItems} page={'sales'} type={'accessories'}/>}/>
      
    </Switch>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
