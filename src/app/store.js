import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from '../features/Username/UsernameSlice'


export default configureStore({
  reducer: {
    username: usernameReducer,
  },
})