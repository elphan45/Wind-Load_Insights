document.addEventListener('DOMContentLoaded', function() {
  var printBtn = document.querySelector('.print-button');
  if (printBtn) {
    printBtn.addEventListener('click', function() {
      window.print();
    });
  }
});
