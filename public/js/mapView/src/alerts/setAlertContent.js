const setAlertContent = (type, content) => {
  return `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  ${content}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
};

export default setAlertContent;
