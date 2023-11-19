document.getElementById('searchInput').addEventListener('input', function() {
    let filter = this.value.toUpperCase();
    let items = document.getElementById('itemList').getElementsByTagName('li');
  
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let h2 = item.querySelector('h2');
        let txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
});





