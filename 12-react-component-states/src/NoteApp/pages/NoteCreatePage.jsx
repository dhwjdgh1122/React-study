import { func, number } from 'prop-types';
import { ROUTES } from '../constants/routes';
import BackLink from '../components/BackLink';
import NoteForm from '../components/NoteForm';
import './NoteCreatePage.css';

NoteCreatePage.propTypes = {
  newNoteId: number.isRequired,
  onCreate: func.isRequired,
  onChangeRoute: func.isRequired,
};

function NoteCreatePage({ newNoteId, onCreate, onChangeRoute }) {
  const handleBackToList = () => onChangeRoute(ROUTES.list);

  return (
    <div className="NoteCreatePage">
      <BackLink onClick={handleBackToList} />
      <NoteForm
        mode="create"
        onCreate={onCreate}
        onBackToList={handleBackToList}
        newNoteId={newNoteId}
      />
    </div>
  );
}

export default NoteCreatePage;
