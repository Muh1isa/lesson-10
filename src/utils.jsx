export const getStore = () => {
  return localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : []
}

export const getUser = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : false
}