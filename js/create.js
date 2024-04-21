const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();
    
    // Fetch existing posts to find the maximum ID
    const response = await fetch('http://localhost:3000/posts');
    const posts = await response.json();
    
    // Find the maximum ID among existing posts
    let maxId = 0;
    posts.forEach(post => {
        maxId = Math.max(maxId, parseInt(post.id));
    });
    
    // Increment the maximum ID by 1 for the new post
    let newId = maxId + 1;
        newId = maxId + '';
    // Create the new post object
    const doc = {
        id: newId,
        image: document.getElementById('output').src, // Get the image source (URL)
        title: form.title.value,
        body: form.body.value,
        likes: 10
    };

    // Send a POST request to create the new post
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    });

    window.location.replace('/index.html');
};

form.addEventListener('submit', createPost);

// Function to preview the selected image
function loadFile(event) {
    const output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
}
