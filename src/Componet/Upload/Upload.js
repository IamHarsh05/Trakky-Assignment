import React, { useState } from 'react';
import { setImages } from '../Home/imagesSlice';
import { useDispatch, useSelector } from 'react-redux';

const Upload = () => {

  const dispatch = useDispatch();
  const allImages = useSelector((state) => state.images.allImages);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleImageChange = (e) => {
    setIsFormVisible(!isFormVisible);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveImage = () => {    
    setIsFormVisible(!isFormVisible);
    if (selectedImage) {
      // Save image to local storage
      const images = JSON.parse(localStorage.getItem('images')) || [];
      images.push(selectedImage);
      localStorage.setItem('images', JSON.stringify(images));

      // Reset selected image
      setSelectedImage(null);
    }
  };

  return (
    <div className='relative p-4 bg-slate-200 z-40'>
        <label htmlFor='image'>Upload</label>
      <input type="file" id='image' className='hidden' accept="image/*" onChange={handleImageChange} />
      {isFormVisible && 
        <div className='absolute flex flex-col justify-center p-4 bg-slate-100'>
            <img src={selectedImage} className='h-80 max-w-full' alt="Selected" />
            <button onClick={handleSaveImage}>Save Image</button>
        </div>
      }
      <button className='mx-4' onClick={() => dispatch(setImages(true))}>{allImages ? (`My Images`) : (`Show All`)}</button>
    </div>
  );
};

export default Upload;
