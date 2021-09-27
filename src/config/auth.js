const token = "UserToken"



const saveAuth = (data) => localStorage.setItem(token, JSON.stringify(data))
const getToken = () => {
    const data = JSON.parse(localStorage.getItem(token))
    if (data) {
      return data
    }
    return false
  }
  
const removeToken = () => localStorage.removeItem(token);

const isAuthenticated = () => {
    return getToken() !== false;
}


export {
    saveAuth,
    getToken,
    removeToken,
    isAuthenticated
}