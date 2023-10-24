function selectFile() {
  document.getElementById('fileInput').click();
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('fileInput').addEventListener('change', function() {
    var file = this.files[0];
    console.log('文件信息:', file);
  });
});
