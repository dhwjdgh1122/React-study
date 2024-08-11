import { func } from 'prop-types';
import { convertSlug } from '@/utils/convertSlug';
import { NoteListType } from '../types/note';
import { ROUTES } from '../constants/routes';
import './NoteList.css';

NoteList.propTypes = {
  list: NoteListType.isRequired,
  onChangeRoute: func,
};

function NoteList({ list, onChangeRoute }) {
  const handleClick = (pickNoteId) => (e) => {
    e.preventDefault();
    onChangeRoute?.(ROUTES.detail, pickNoteId);
  };

  return (
    <div className="NoteList">
      <h2>노트 필기 목록</h2>
      <ul>
        {list.map((item) => {
          const slug = `#${convertSlug(item.title)}`;

          return (
            <li key={item.id}>
              <a href={slug} onClick={handleClick(item.id)}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NoteList;
