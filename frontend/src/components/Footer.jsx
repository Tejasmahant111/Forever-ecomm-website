import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
       <div className='flex flex-col sm:grid grid-cols-[3fr-1fr-1fr] gap-14 my-10 mt-40 text-sm '>
         <div>
             <img stc={assets.logo} className='mb-5 w-32' alt=""/>
             <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eligendi exercitationem harum nulla iusto unde tempora vero cum laborum natus recusandae, nostrum consequatur? Iusto rem laudantium sit magni incidunt. 
            </p>
         </div>
       </div>
     </div>
  )
}

export default Footer
