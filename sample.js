function createProductElement() {
    const div = document.createElement('div');
    div.classList.add('gallary', 'bg-red-400');

    const img = document.createElement('img');
    img.classList.add('sub');
    img.src = '';
    img.alt = 'images';
    div.appendChild(img);

    const offer = document.createElement('div');
    offer.classList.add('offer');
    offer.textContent = '-50%';
    div.appendChild(offer);

    const h3 = document.createElement('h3');
    h3.classList.add('font-extrabold');
    h3.textContent = 'Syltherine';
    div.appendChild(h3);

    const p1 = document.createElement('p');
    p1.classList.add('det', 'text-gray-300');
    p1.textContent = 'Style cafe chair';
    div.appendChild(p1);

    const p2 = document.createElement('p');
    p2.classList.add('price', 'font-bold', 'text-gray-950');
    p2.textContent = 'Rp 2,500.000';
    div.appendChild(p2);

    // Append the newly created element to the document body or any other desired parent element
    let ele=document.getElementById('cards');
    ele.appendChild(div);
}
// search button functionality

document.getElementById('searchIcon').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput');
    console.log(searchInput);
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }
});

document.getElementById('searchInput').addEventListener('input', function() {
    var searchTerm = this.value.toLowerCase();
    var paragraphs = document.getElementsByTagName('h3');
    var searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';
console.log(paragraphs);
    for (var i = 0; i < paragraphs.length; i++) {
        var paragraphText = paragraphs[i].textContent.toLowerCase();
        if (paragraphText.includes(searchTerm)) {
            var result = document.createElement('a');
            result.href='#cards';
            result.textContent = paragraphs[i].textContent;
            searchResults.appendChild(result);
        }
    }
});

// Call createProductElement function when needed
// createProductElement();
let cards = document.querySelectorAll('.gallary');
let itemsPerPage = 4; // Number of cards to show per page

function showPage(pageNumber) {
    let startIndex = (pageNumber - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;

    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Show the first page by default
showPage(1);