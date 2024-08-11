import { number, func } from 'prop-types';
import { getNoteItem } from '../api/getNote';
import BackLink from '../components/BackLink';
import NoteForm from '../components/NoteForm';
import PrintError from '../components/PrintError';
import './NoteEditPage.css';
import { ROUTES } from '../constants/routes';

NoteEditPage.propTypes = {
  noteId: number.isRequired,
  onChangeRoute: func,
  onEdit: func,
  onDelete: func,
};

function NoteEditPage({ noteId, onChangeRoute, onEdit, onDelete }) {
  const note = getNoteItem(noteId);
  const handleBackToList = () => onChangeRoute(ROUTES.list);

  return (
    <div className="NoteEditPage">
      <BackLink onClick={handleBackToList} />
      {!note && <PrintError>`{noteId}` 노트가 존재하지 않습니다.</PrintError>}
      {note && (
        <>
          <h2>노트 편집</h2>
          <NoteForm
            mode="edit"
            note={note}
            onEdit={onEdit}
            onDelete={onDelete}
            onBackToList={handleBackToList}
          />
        </>
      )}
    </div>
  );
}

export default NoteEditPage;
