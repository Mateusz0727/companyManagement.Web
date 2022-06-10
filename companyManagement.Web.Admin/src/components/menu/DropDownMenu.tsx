
import React,{useRef, useState} from "react";
import { useDetectOutsideClick } from "../useDetectOutsideClick";
import './dropDownMenu.css';

import authService from "../../services/auth/auth.service";
import avatar from '../../assets/avatar.png'
export const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  let [isActive, setIsActive] = useState(false);
  function expand(){setIsActive(true)};
  function close(){setIsActive(false)};
  const logOut = () => {
    authService.logout();
  };
 
  return (
    <div className="container">
      <div className="menu-container">
        <button onFocus={expand} onBlur={close} className="menu-trigger">
          <span>User</span>
          <img className="avatar"
            src={avatar}
            alt="avatar"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src=avatar;
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
              <a href="/account">Profile</a>
            </li>
            <li>
              <a href="/" onClick={logOut}>Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    );
  };
  export default DropdownMenu;