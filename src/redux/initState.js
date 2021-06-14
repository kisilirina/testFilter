const initState = () => {
  const init = {
    users: [],
    foundUsers: [],
  }
  return JSON.parse(localStorage.getItem('store')) || init;
}


export default initState;