function searchList() {
    var input, filter, list, lis, a, i, txtValue, keywords;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    list = document.getElementById('myList');
    lis = list.getElementsByTagName('li');

    if (filter === '') {
        list.style.display = 'none'; // Hide the list if no input
    } else {
        list.style.display = 'block'; // Show the list if input is present
    }

    for (i = 0; i < lis.length; i++) {
        a = lis[i].getElementsByTagName('a')[0];
        keywords = lis[i].getAttribute('data-keywords');
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 || keywords.toUpperCase().indexOf(filter) > -1) {
            lis[i].style.display = '';
        } else {
            lis[i].style.display = 'none';
        }
    }
}
