module.exports = (user, req, res) => {
  req.session.user = {
    userName: user.userName,
    id: user._id,
    email: user.email,
    isAdmin: user.isAdmin,
    region: user.region
  };

  if (!user.isAdmin) {
    req.session.user.PID = user.PID;
    req.session.user.techNumber = user.techNumber;
    req.session.user.market = user.market;
  }

  return req.session.user;
};
