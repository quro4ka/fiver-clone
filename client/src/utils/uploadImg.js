import axios from 'axios'

export const uploadImg = async (file) => {
  const data = new FormData()
  data.append('file', file)
  data.append('upload_preset', 'quro4ka')

  try {
    const res = await axios.post('https://api.cloudinary.com/v1_1/dhesj4zlb/image/upload', data)

    const { url } = res.data
    return url
  } catch (error) {
    console.log(error)
  }
}
