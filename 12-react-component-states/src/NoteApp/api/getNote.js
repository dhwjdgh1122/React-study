import notesData from '@/data/notes';
import usersData from '@/data/users';

export function getNoteList() {
  return notesData.map((note) => {
    const user = usersData.find((user) => user.id === note.userId);
    if (user) {
      note.expand = { user };
    }
    return note;
  });
}

export function getNoteItem(noteId) {
  const notes = getNoteList();
  const note = notes.find((note) => note.id === noteId);
  return note ? note : null;
}
