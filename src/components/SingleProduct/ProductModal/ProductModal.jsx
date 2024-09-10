import React, {useEffect, useState, memo} from 'react';
import { GrClose } from 'react-icons/gr';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Navigation, Pagination } from "swiper";

import './ProductModal.scss';
import "swiper/css/zoom";

function  ProductModal({ show, showimageModal, images, index }) {
  console.log(index);
  const [activeIndex, setActiveIndex] = useState(0);
   const customNavigation = {
    nextEl: '.custom-swiper-button-next',
    prevEl: '.custom-swiper-button-prev',
    disabledClass: 'custom-swiper-button-disabled',
  };
  const [swiper, setSwiper] = useState();
  const handleButtonClick = (index) => {
    setActiveIndex(index);
    swiper.slideTo(index);
  };
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  const handleNextClick = () => {
    swiper.slideNext();
  };
  const handlePrevClick = () => {
    swiper.slidePrev();
  };
  useEffect(()=>{
    console.log(swiper);
    if(swiper != undefined){
      handleButtonClick(index)
    }
  },[swiper])
  return (
    <>
      <Modal className='modal-product'
        size="xl"
        show={show}
        onHide={() => showimageModal(0)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Swiper modules={[Zoom, Navigation, Pagination]} navigation={customNavigation} zoom={true} className="mySwiper" onSlideChange={handleSlideChange} onSwiper={(s) => setSwiper(s)}>
            {images.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-zoom-container">
                <img src={imageUrl} alt={`Image ${index + 1}`} style={{height:'auto'}} />
                </div>
              </SwiperSlide>
            ))}
              <div class="thumbnail-small">
              {images.map((imageUrl, index) => (
                <button class="thumbnail-button" key={index} onClick={() => handleButtonClick(index)}>
                <img draggable="false" class="imageZoom" src={imageUrl} alt={`thumb ${index + 1}`} style={activeIndex === index ? {borderWidth: '1px',borderColor: '#ff517b'} : {borderWidth: '1px'} } />
                </button>
              ))}
              </div>
        </Swiper>
        <div className="buttons">
          <button className="modal-close-button" onClick={() => showimageModal(0)}>
            <GrClose style={{fontSize: 30, color:'#3e4152'}} />
          </button>
          <button className="custom-swiper-button-prev" onClick={handlePrevClick}>
            <BsChevronLeft style={{fontSize: 30, color:'#3e4152'}} />
          </button>
          <button className="custom-swiper-button-next" onClick={handleNextClick}>
            <BsChevronRight style={{fontSize: 30, color:'#3e4152'}} />
          </button>
        </div>
      </Modal>
    </>
  );
}
export default memo(ProductModal);