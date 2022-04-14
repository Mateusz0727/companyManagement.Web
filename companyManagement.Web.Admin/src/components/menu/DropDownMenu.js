import React,{useRef} from "react";
import { useDetectOutsideClick } from "../useDetectOutsideClick";
import './dropDownMenu.css';

import authService from "../../services/auth/auth.service";
import avatar from '../../assets/avatar.png'
export const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const logOut = () => {
    authService.logout();
  };
  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span>User</span>
          <img className="avatar"
            src={avatar}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src={avatar};
            }}
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="/account">Profil</a>
            </li>
            <li>
              <a href="/" onClick={logOut}>Wyloguj</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    );
  };
  export default DropdownMenu;