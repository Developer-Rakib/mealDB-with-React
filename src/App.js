import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import Cart from './components/cart/Cart';
import './App.css';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  let [cartItems, setCartItems] = useState([]);


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const cartHandle = (meal) => {
    setCartItems([...cartItems, meal])
  }


  return (
    <div className="App">
      <Header openModal={openModal} cartCount={cartItems.length}></Header>
      <Meals cartHandle={cartHandle}></Meals>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button className='close-icon' onClick={closeModal}> <AiOutlineCloseSquare /> </button>
          <div className='cart-items'>
            {
              cartItems.map(cartItem => <Cart key={cartItem.idMeal} cartItem={cartItem}></Cart>)
            }
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
