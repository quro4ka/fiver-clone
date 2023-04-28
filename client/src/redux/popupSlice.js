import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpenPopup: false,
}

export const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setPopup(state, action) {
      state.isOpenPopup = action.payload
    },
  },
})

export const { setPopup } = popupSlice.actions

export default popupSlice.reducer
