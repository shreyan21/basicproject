document.addEventListener('DOMContentLoaded', () => {
    fetchNotes();
});


async function fetchNotes() {
    try {
        const response = await fetch('http://localhost:8000/');
        const notes = await response.json();

        const notesTableBody = document.getElementById('notesTable').getElementsByTagName('tbody')[0];
        notesTableBody.innerHTML = '';  // Clear previous content

        notes.forEach(note => {
            const row = notesTableBody.insertRow();
            row.setAttribute('data-id', note.id);  // Add data-id attribute

            const cellId = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellDescription = row.insertCell(2);
            const cellAction = row.insertCell(3);

            cellId.textContent = note.id;
            cellName.textContent = note.name;
            cellDescription.textContent = note.description;

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '🗑️';
            deleteButton.style.cursor = 'pointer';
            deleteButton.onclick = () => deleteNote(note.id);

            cellAction.appendChild(deleteButton);
        });

    } catch (error) {
        console.error('Error fetching notes:', error);
    }
}

async function deleteNote(noteId) {
    try {
        const response = await fetch(`http://localhost:8000/deletenote/${noteId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log('Note deleted:', noteId);

            // Find the table row that corresponds to the deleted note
            const rowToDelete = document.querySelector(`tr[data-id='${noteId}']`);

            // Add the fade-out class to initiate the smooth transition
            rowToDelete.classList.add('fade-out');

            // Wait for the animation to finish (500ms in this case)
            setTimeout(() => {
                rowToDelete.remove();  // Remove the row from the DOM after fade-out
            }, 500);
        } else {
            console.error('Failed to delete note');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
async function addNote() {
    const noteName = document.getElementById('noteName').value.trim();
    const noteDescription = document.getElementById('noteDescription').value.trim();

    if (noteName && noteDescription) {
        try {
            const response = await fetch('http://localhost:8000/addnote/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: noteName,
                    description: noteDescription
                })
            });

            const responseData = await response.json();
            console.log('Response:', responseData); // Log the response for debugging

            if (response.ok) {
                console.log('New note added:', responseData);
                document.getElementById('noteName').value = ''; // Clear input fields
                document.getElementById('noteDescription').value = '';
            } else {
                console.error('Failed to add note:', responseData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        alert('Please fill out both fields');
    }
}
