const verifyLoggedIn = res => {
  res.status === '401' && window.location.reload();
};

export default verifyLoggedIn;
