'use client'
import React from "react";
import { createPopper } from '@popperjs/core';
import MenuBtn from './MenuBtn';
import NavLink from './NavLink';


type Props = {
  pages: {name: string, to: string}[]
}

const Dropdown = ({pages}: Props) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.useRef<HTMLButtonElement>(null);
  const popoverDropdownRef = React.useRef<HTMLDivElement>(null);

  const openDropdownPopover = () => {

    if(btnDropdownRef?.current && popoverDropdownRef?.current){
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "bottom-start"
      });
      setDropdownPopoverShow(true);
    }
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
      <div className="flex flex-wrap md:hidden">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">

            <MenuBtn
              open={dropdownPopoverShow}
              passRef={btnDropdownRef}
              handleOpenMenu={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }} />

            <nav
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-th-secondary p-4 space-y-3 z-50 py-2 list-none mt-1 fade-in rounded border-2 border-th-primary"
              }
            >
              {pages.map(({name, to}) => <NavLink key={name} name={name} to={to} />)}
            </nav>
        </div>
      </div>
  );
};

export default Dropdown;
