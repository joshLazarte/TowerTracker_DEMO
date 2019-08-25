module.exports = (req, res, next) => {
  if (process.env.MODE === 'DEMO') {
    return res.status(401).json({
      status: '405',
      error: 'Demo Mode is Read Only'
    });
  } else {
    next();
  }
};
