import React from 'react'
import {useSelector} from 'react-redux';
import Slider from "react-slick"

const SliderComp = () => {
  const {products} = useSelector(state => state.products)
  const getRandomIndex = () => {
    return Math.floor(Math.random()*products.length);
  };
  const settings = {
    dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1
  };
  const handleRandomClick = () => {
    const randomIndex = getRandomIndex();
    const randomProduct = products[randomIndex];
    window.location.href = `/products/${randomProduct.id}`;
  };
  return (<div>
    <h1 className="text-center text-4xl font-bold mb-4 my-16">Trending <span className=' text-yellow-500'> Sales </span>!
    </h1>
    <Slider {...settings}>
      <div className='!flex items-center rounded-3xl bg-gray-200 p-6'>
        <div className='p-6 px-8'>
          <div className='text-5xl font-bold text-red-600'>Top Deal</div>
          <div className='text-xl my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptate nemo expedita quisquam at repellendus dolor in aut, sed mollitia vitae reprehenderit cum recusandae harum ad provident id possimus necessitatibus?</div>
          <button onClick={handleRandomClick} className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-red-200'>
            Check it out!
          </button>
        </div>
        <img className='w-[250px]' src="src/assets/luck.png" alt="luck cube"/>
      </div>
    </Slider>
  </div>);
}
export default SliderComp