document.getElementById('myInput').addEventListener('input', function() {
    const inputText = this.value; 
    document.getElementById('myHeader').textContent = inputText; 
});