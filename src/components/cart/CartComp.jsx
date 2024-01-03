import React from 'react';
import {clearCart, removeFromCart} from '../../redux/CartSlice';
import {useDispatch} from 'react-redux';

const CartComp = ({cart}) => {
  const dispatch = useDispatch();
  
  return (<div className='my-10 flex flex-col md:flex-row items-center justify-between'>
    <img className='w-[150px] h-[150px] object-cover mb-4 md:mb-0' src={cart?.image} alt={cart?.title}/>
    <div className='w-[100%] md:w-[476px] md:ml-4'>
      <div className='text-xl font-bold'>{cart?.title}</div>
      <div className='text-gray-600'>{cart?.description}</div>
    </div>
    <div className='text-xl font-bold mt-4 md:mt-0'>{cart?.price}TL ({cart?.quantity})</div>
    <div onClick={() => dispatch(removeFromCart(cart?.id))} className='bg-red-200 w-[120px] text-lg cursor-pointer rounded-md h-16 flex items-center justify-center mt-4 md:mt-0'>
      Delete Item
    </div>
  </div>);
};

export default CartComp;
