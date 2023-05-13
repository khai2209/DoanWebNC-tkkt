function addEvent() {
    var showContentButton = document.getElementById('show-content');
    var hiddenContent = document.getElementById('hidden-content');
  
    if(hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
        showContentButton.textContent = 'Ẩn';
    }else {
        hiddenContent.style.display = 'none';
        showContentButton.textContent = 'Hiện thêm';
    }
}
document.getElementById('show-content').addEventListener('click', addEvent);