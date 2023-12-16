import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../Componet/Login/loginSlice';


const store = configureStore({
  reducer: {
    isloggedIn: loginReducer
  },
});

export default store;
