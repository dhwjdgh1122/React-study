// Web Standards - .js, .css, .html 확장자 필요
// Vite - .js, .jsx, .json, .ts, .tsx 자동으로 처리
import Avatar from "../components/Avatar";

function AvatarListPage() {
  return (
    <ul className="AvatarList">
      <li>
        <Avatar name="야무" photo="man-02.jpg" status="online" />
      </li>
      <li>
        <Avatar name="범쌤" photo="man-04.jpg" status="away" />
      </li>
      <li>
        <Avatar name="주원" photo="woman-04.jpg" status="dont-disturb" />
      </li>
      <li>
        <Avatar name="정민" photo="woman-01.jpg" />
      </li>
    </ul>
  );
}

export default AvatarListPage;