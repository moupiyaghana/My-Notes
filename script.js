window.onload = function() {
  loadNotes();
};

function loadNotes() {
  let notes = JSON.parse(localStorage.getItem('notes')) || [];
  let notesList = document.getElementById('notesList');
  notesList.innerHTML = '';

  notes.forEach((note, index) => {
    let noteDiv = document.createElement('div');
    noteDiv.className = 'note';

    let noteText = document.createElement('p');
    noteText.innerText = note;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = '🗑️ Delete';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = function() {
      deleteNote(index);
    };

    noteDiv.appendChild(noteText);
    noteDiv.appendChild(deleteBtn);
    notesList.appendChild(noteDiv);
  });
}

function addNote() {
  let noteInput = document.getElementById('noteInput');
  let noteText = noteInput.value.trim();

  if (noteText === '') {
    alert('Please write something!');
    return;
  }

  let notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.push(noteText);
  localStorage.setItem('notes', JSON.stringify(notes));

  noteInput.value = '';
  loadNotes();
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  loadNotes();
}
