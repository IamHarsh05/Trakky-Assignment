import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Componet/Login/loginSlice';
import imagesReducer from '../Componet/Home/imagesSlice';


const store = configureStore({
  reducer: {
    isloggedIn: loginReducer,
    images: imagesReducer
  },
});

export default store;
