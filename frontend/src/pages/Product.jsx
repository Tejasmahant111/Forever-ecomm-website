import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    const item = products.find(item => item._id === productId);
    if (item) {
      setProductData(item);
      setImage(item.image[0]);
    }
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Left: product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setImage(img)}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt={`preview-${index}`}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt='selected' />
          </div>
        </div>

        {/* Right: product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

          {/* Rating */}
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className="w-3.5" />
            ))}
            <img src={assets.star_dull_icon} alt="dull star" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>

          {/* Price */}
          <p className='mt-5 text-3xl font-medium'>
            {currency}
            {productData.price}
          </p>

          {/* Description */}
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          {/* Size selection */}
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((s, index) => (
                <button
                  key={index}
                  onClick={() => setSize(s)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    s === size ? 'border-orange-500' : ''
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=>addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5' />

          {/* Extra Info */}
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and Reviews Tabs */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam ipsum dolores vel, doloremque ut fugiat nemo delectus sunt laboriosam commodi incidunt iure corrupti nobis veniam id obcaecati beatae? Vitae.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta ipsam, quod modi consequatur ab id beatae quidem inventore magni rem quam nihil non blanditiis, error placeat doloribus odio illum accusamus!</p>
        </div>
      </div>
      {/*display related products */}
      <RelatedProducts category={productData.category} subCategory = {productData.subCategory }/>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
