import React from "react";
import "./header.scss";
import { TestButton, ThemeToggleButton } from "./header-buttons";

// You can add props to this interface in the future
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header-div1">
      <div className="header-div2-right">
        <img
          style={{ margin: "0 0 1px 0" }}
          src="/images/logo2.svg"
          alt="Houk website logo"
          width={175}
          height={52}
        />
      </div>
      <nav className="header-div2-center" aria-label="Main navigation">
        <ul>
          <li>سبد خرید</li>
          <li>حساب کاربری</li>
          <li>خروج</li>
          <li>ورود</li>
          <li>ثبت نام</li>
          <li>ارتباط با ما</li>
        </ul>
      </nav>
      <div className="header-div2-left">
        <TestButton />
        <ThemeToggleButton />
      </div>
    </header>
  );
};

export default Header;
