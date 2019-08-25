const isBadRequest = res => {
    return res.status === 400 
    || res.status === 401
    || res.status === 500
    || res.status === 404;
};

export default isBadRequest;