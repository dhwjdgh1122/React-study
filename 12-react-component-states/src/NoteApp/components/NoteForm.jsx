import { useId, useState } from 'react';
import { oneOf, func, number } from 'prop-types';
import { NoteType } from '../types/note';
import { getUserList, getUser } from '../api/getUser';
import {
  convertHTMLToText,
  convertTextToHTMLString,
} from '@/utils/convertTextToHTMLString';
import './NoteForm.css';

// 데이터를 1회 가져오도록 설정
const userList = getUserList();

NoteForm.propTypes = {
  newNoteId: number,
  onCreate: func,
  onEdit: func,
  onDelete: func,
  onBackToList: func,
  mode: oneOf(['create', 'edit']),
  note: NoteType, // optional
};

function NoteForm({
  mode = 'create',
  newNoteId,
  onCreate,
  onEdit,
  onDelete,
  onBackToList,
  note,
}) {
  const titleId = useId();
  const contentId = useId();
  const userId = useId();

  // [상태 선언]
  const [formData, setFormData] = useState(() => {
    // 초기화 함수 실행
    // 노트 생성 모드인 경우
    if (mode === 'create') {
      return {
        title: '',
        content: '',
        userId: 0,
      };
    }

    // 노트 데이터가 존재하고, 편집 모드인 경우
    if (mode === 'edit' && note) {
      return {
        title: note.title,
        content: convertHTMLToText(note.content),
        userId: note.userId,
      };
    } else {
      throw new Error('노트(note) 데이터가 존재하지 않습니다.');
    }
  });

  // [상태 업데이트 기능]
  // 폼의 데이터 관리 방식 선택
  // - [x] 폼의 데이터를 리액트로 관리할 것인가? (객체 타입으로 관리: 성능 이슈 주의!!!!!)
  // - [ ] 아니면 네이티브(웹)로 관리할 것인가? (성능 이슈 없어요~)
  // - 노트 제목, 내용, 작성자 정보를 하나의 핸들러를 사용해 업데이트 수행해야 함
  const handleUpdateFormData = (e) => {
    const { name, value } = e.target;

    const nextFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(nextFormData);
  };

  // 노트 생성 기능
  const handleCreateNote = (e) => {
    e.preventDefault();

    const { title, content, userId } = formData;

    // 유효성 검사 (클라이언트 측)
    // if (title.trim().length === 0) {
    //   console.error('title 정보가 비었습니다.');
    // }

    // 상태 업데이트 요청
    // 추가할 사용자 정보

    const newUserId = Number(userId);

    const newNote = {
      id: newNoteId,
      title: title.trim(),
      content: convertTextToHTMLString(content),
      userId: newUserId,
      expand: {
        user: getUser(newUserId),
      },
    };

    // 리액트의 상태 업데이트 요청
    onCreate?.(newNote);
    // 상태 업데이트 후에 리스트 페이지로 이동
    onBackToList?.();
  };

  // 노트 수정 기능
  const handleEditNote = (e) => {
    e.preventDefault();

    const willEditNote = {
      ...note,
      ...formData,
    };

    onEdit?.(willEditNote);
    onBackToList?.();
  };

  // 노트 초기화 기능
  const handleReset = (e) => {
    e.preventDefault();
  };

  // 노트 삭제 기능
  const handleDelete = () => {
    onDelete?.(note.id);
    onBackToList?.();
  };

  // [파생된 상태]
  // "생성" 또는 "수정" 모드 여부 확인
  const isCreateMode = mode.includes('create');
  // "생성" 또는 "수정" 모드에 따라 화면에 표시될 버튼 레이블 설정
  const submitButtonLabel = isCreateMode ? '추가' : '수정';

  const handleSubmit = isCreateMode ? handleCreateNote : handleEditNote;

  return (
    <form className="NoteForm" onSubmit={handleSubmit} onReset={handleReset}>
      <div className="formControl">
        <label htmlFor={titleId}>제목</label>
        <input
          type="text"
          id={titleId}
          name="title"
          value={formData.title}
          onChange={handleUpdateFormData}
        />
      </div>

      <div className="formControl">
        <label htmlFor={contentId}>내용</label>
        <textarea
          id={contentId}
          name="content"
          value={formData.content}
          onChange={handleUpdateFormData}
        />
      </div>

      {isCreateMode && (
        <div className="formControl">
          <label htmlFor={userId}>작성자</label>
          <select
            id={userId}
            name="userId"
            value={formData.userId}
            onChange={handleUpdateFormData}
          >
            <option>작성자 선택</option>
            {userList.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="buttonGroup">
        <button type="submit">{submitButtonLabel}</button>

        {isCreateMode ? (
          <button type="reset">초기화</button>
        ) : (
          <button type="button" onClick={handleDelete}>
            삭제
          </button>
        )}
      </div>
    </form>
  );
}

export default NoteForm;
