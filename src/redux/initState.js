const initState = () => {
  const init = {
    users: [],
  }
  return JSON.parse(localStorage.getItem('store')) || init;
}


export default initState;