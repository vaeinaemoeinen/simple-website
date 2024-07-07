function searchList() {
    var input, filter, list, divs, a, i, txtValue, keywords;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    list = document.getElementById('myList');
    divs = list.getElementsByTagName('div');

    if (filter === '') {
        list.style.display = 'none'; // Hide the list if no input
    } else {
        list.style.display = 'block'; // Show the list if input is present
    }

    for (i = 0; i < divs.length; i++) {
        a = divs[i].getElementsByTagName('a')[0];
        keywords = divs[i].getAttribute('data-keywords');
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 || keywords.toUpperCase().indexOf(filter) > -1) {
            divs[i].style.display = '';
        } else {
            divs[i].style.display = 'none';
        }
    }
}
