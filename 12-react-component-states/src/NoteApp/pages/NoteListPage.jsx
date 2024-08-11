import { func } from 'prop-types';
import NoteList from '../components/NoteList';
import { ROUTES } from '../constants/routes';
import { NoteListType } from '../types/note';
import './NoteListPage.css';

NoteListPage.propTypes = {
  list: NoteListType.isRequired,
  onChangeRoute: func.isRequired,
};

function NoteListPage({ list, onChangeRoute }) {
  const handleClick = (e) => {
    e.preventDefault();
    onChangeRoute(ROUTES.create);
  };

  return (
    <div className="NoteListPage">
      <NoteList list={list} onChangeRoute={onChangeRoute} />
      <a onClick={handleClick} className="createNoteLink" href="#create-note">
        노트 작성
      </a>
    </div>
  );
}

export default NoteListPage;
