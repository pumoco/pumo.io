document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('find');
  const searchResults = document.querySelector('.search_results');

  // Fetch the JSON data containing blog post information
  fetch('/index.json')
      .then(response => response.json())
      .then(data => {
          // Define search keys and options
          const searchKeys = ['title', 'link', 'body', 'id', 'section', 'tags'];
          const searchOptions = {
              ignoreLocation: true,
              findAllMatches: true,
              includeScore: true,
              shouldSort: true,
              keys: searchKeys,
              threshold: 0.0
          };

          // Initialize Fuse.js with the blog post data and search options
          const fuse = new Fuse(data, searchOptions);

          // Function to perform search and update results
          function updateSearchResults() {
              const query = searchInput.value;
              const results = fuse.search(query);

              // Clear previous search results
              searchResults.innerHTML = '';

              // Display search results
              results.forEach(result => {
                  const post = result.item;
                  const li = document.createElement('li');
                  li.innerHTML = `<a href="${post.link}">${post.title}</a>`;
                  searchResults.appendChild(li);
              });
          }

          // Event listener for input changes in the search box
          searchInput.addEventListener('input', updateSearchResults);
      })
      .catch(error => console.error('Error fetching blog data:', error));
});
