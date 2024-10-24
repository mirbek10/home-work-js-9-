document.getElementById('input').addEventListener('input', function() {
    const inputText = this.value; 
    document.getElementById('h1').textContent = inputText; 
});
