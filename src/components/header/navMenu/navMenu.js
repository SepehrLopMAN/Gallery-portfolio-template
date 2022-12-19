import React from "react";
import { NavLink } from "react-router-dom";
import shortid from "shortid";
import styles from "./navMenu.module.css";

function NavMenu() {
  return (
    <React.Fragment>
      {/* Logo */}
      <div></div>
      {/* Haburger Sign Menu */}
      <label
        className={styles["navbar__side-menu--hamburger-sign"]}
        htmlFor="hamburger_sign--checkbox"
      >
        &#9776;
      </label>
      <input
        id="hamburger_sign--checkbox"
        className={styles["navbar__side-menu--checkbox"]}
        type="checkbox"
      />
      {/* Menu */}
      <nav className={styles.navbar__menu}>
        <ul>
          {["Home", "About", "Background", "Gallery", "Commissions"].map(
            (val) => (
              <li key={shortid.generate()} className={styles.menu__item}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles["menu__item--active"] : ""
                  }
                  to={val}
                >
                  {val}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default NavMenu;
