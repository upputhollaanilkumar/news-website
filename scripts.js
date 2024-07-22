function searchNews() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('.news-article');

    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        const content = article.querySelector('p').textContent.toLowerCase();
        if (title.includes(input) || content.includes(input)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
    function handlePersonButtonClick() {
    // Define what happens when the Profile button is clicked
    alert('Profile button clicked!');
}

}
function subscribeNewsletter() {
    const email = document.getElementById('subscribe-email').value;
    if (email) {
        alert(`Thank you for subscribing with email: ${email}`);
    } else {
        alert('Please enter a valid email address.');
    }
}
