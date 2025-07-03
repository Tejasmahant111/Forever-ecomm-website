import React from 'react';

const NewsletterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }

  return (
    <div className="text-center px-4">
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get instant offers</p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <form onSubmit={onSubmitHandler} className="w-full sm:max-w-[500px] flex items-center gap-3 mx-auto my-6 border border-gray-300 rounded px-3 py-2">
        <input
          type="email"
          placeholder="Enter your E-mail"
          required
          className="flex-grow outline-none text-sm"
        />
        <button type="submit" className="bg-black text-white text-xs px-6 py-3 rounded">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
