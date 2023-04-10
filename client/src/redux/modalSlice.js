import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpenAuth: false,
  isOpenRegister: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalAuth(state, action) {
      state.isOpenAuth = action.payload
    },
    setModalRegister(state, action) {
      state.isOpenRegister = action.payload
    },
  },
})

export const { setModalAuth, setModalRegister } = modalSlice.actions

export default modalSlice.reducer
