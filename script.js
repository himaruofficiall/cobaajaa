document.getElementById('convertButton').addEventListener('click', () => {
  const input = document.getElementById('imageInput').files[0];
  if (!input) {
    alert('Please select an image first!');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    const base64URL = event.target.result;
    document.getElementById('output').value = base64URL;
  };
  reader.readAsDataURL(input);
});
