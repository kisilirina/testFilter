const initState = () => {
  const init = {
    users: [],
    allusers: [],
  }
  return JSON.parse(localStorage.getItem('store')) || init;
}


export default initState;