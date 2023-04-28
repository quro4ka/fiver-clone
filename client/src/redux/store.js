import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './modalSlice'
import popupSlice from './popupSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    popup: popupSlice,
  },
})
