import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Journey = ({setSteps}) => {
  const journey = [
    {
      "img": "https://www.pngall.com/wp-content/uploads/12/Illustration-PNG.png",
      "title": "Open an account",
      "description": "Get started on your financial journey by opening an account with us. It's quick and easy. Enjoy secure access to a range of banking services."
    },
    {
      "img": "https://png.pngtree.com/png-vector/20220801/ourmid/pngtree-people-business-activities-smartphone-communication-png-image_6051535.png",
      "title": "Explore products",
      "description": "Once you've opened your account, explore our diverse range of products and services. From savings accounts to loans and investment options."
    },
    {
      "img": "https://i.pinimg.com/originals/d9/9e/15/d99e156ba0b07feefbabef871eda0f23.png",
      "title": "Generate Link",
      "description": "Easily generate shareable links for your purchases and transactions. Share your favorite products and deals with friends and family, and earn rewards."
    },
    {
      "img": "https://png.pngtree.com/png-vector/20220614/ourmid/pngtree-support-helping-customer-with-login-problem-png-image_5089033.png",
      "title": "Get Cashback",
      "description": "Start earning cashback rewards on your transactions. Whether you're shopping, investing, or using our services, you can enjoy cashback benefits."
    }
  ];

  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
      >
        {journey?.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <img src={item?.img} alt="" className='h-[220px] object-contain mx-auto' />
              <h2 className={`text-gray-500 uppercase w-fit`}>Step {index + 1}</h2>
              <h2 className={`text-xl text-gray-700 font-bold`}>{item?.title}</h2>
              <p className='text-sm text-gray-500'>{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div onClick={() => setSteps(1)} className='flex justify-end items-center gap-2 mt-4 text-primaryColor lg:hidden md:hidden block'>
        Get Started 
        <HiOutlineArrowNarrowRight className='text-lg mt-0.5'/>
      </div>
    </div>
  );
}

export default Journey;
