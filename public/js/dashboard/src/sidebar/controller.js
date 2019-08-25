const sidebarController = () => {
    $(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });  
  });
};
 
export default sidebarController;