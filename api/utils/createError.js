export const createError = (status = '404', message = 'Err...') => {
  const error = new Error()
  error.status = status
  error.message = message

  return err
}
