// document.addEventListener('DOMContentLoaded', () => {
//     const editButton = document.querySelector('.edit');
  
//     editButton.addEventListener('click', () => {
//       window.location.href = 'edit.html';
//     });
//   });


// document.addEventListener('DOMContentLoaded', (e) => {
//     const editForm = document.getElementById('editForm');
//     editForm.addEventListener('submit', async (e) => {
//       e.preventDefault();
  
//       const title = document.getElementById('title').value;
//       const content = document.getElementById('content').value;
//       const likes = document.getElementById('likes').value;
  
//       const updatedPost = {
//         title: title,
//         body: content,
//         likes: likes
//       };
  
//       try {
    
//         const response = await fetch(`http://localhost:3000/posts/${id}`, { 
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(updatedPost)
//         });
        
//         if (!response.ok) {
//           throw new Error('Failed to update post');
//         }
//         console.log('Post updated successfully');
//         window.location.replace('/json-server-final-version/index.html');
//       } catch (error) {
//         console.error('Error updating post:', error);
//       }
//     });
//   });
  