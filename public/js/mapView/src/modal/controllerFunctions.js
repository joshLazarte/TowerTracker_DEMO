const showModal = modal => {
    $(modal).modal('show');
};

const closeModal = modal => {
    $(modal).modal('hide');
};

export {showModal, closeModal};