document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a[data-page]');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      
      const page = this.getAttribute('data-page');
      fetch(it_security.html)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status} ${response.statusText}`);
          }
          return response.text();
        })
        .then(html => {
          document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
          console.error('Error loading the page:', error);
          document.getElementById('content').innerHTML = '<p>Error loading content. Please try again later.</p>';
        });
    });
  });
});
