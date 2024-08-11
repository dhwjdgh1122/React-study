import { func, number } from 'prop-types';
import { convertSlug } from '@/utils/convertSlug';
import { getNoteItem } from '../api/getNote';
import BackLink from '../components/BackLink';
import PrintError from '../components/PrintError';
import { ROUTES } from '../constants/routes';
import './NoteDetailPage.css';

NoteDetailPage.propTypes = {
  noteId: number.isRequired,
  onChangeRoute: func,
};

function NoteDetailPage({ noteId, onChangeRoute }) {
  const note = getNoteItem(noteId);

  const handleBackToList = () => onChangeRoute?.(ROUTES.list);

  const handleEditNoteView = (e) => {
    e.preventDefault();
    onChangeRoute?.(ROUTES.edit, noteId);
  };

  const createMarkup = () => ({ __html: note.content });

  return (
    <div className="NoteDetailPage">
      <BackLink onClick={handleBackToList} />
      {!note && <PrintError>`{noteId}` 노트가 존재하지 않습니다.</PrintError>}
      {note && (
        <>
          <h2>{note.title}</h2>
          <span>
            {note.expand.user.name}{' '}
            <a
              href={`#/edit/${convertSlug(note.title)}`}
              onClick={handleEditNoteView}
            >
              수정
            </a>
          </span>
          <div dangerouslySetInnerHTML={createMarkup()} />
        </>
      )}
    </div>
  );
}

export default NoteDetailPage;
