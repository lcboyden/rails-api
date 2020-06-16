import React from "react";
import Menu from "./Menu";

const MenuList = ({ updateMenu, deleteMenu, menus }) => {
  return (
    <div>
      {menus.map((menu) => {
        return (
          <Menu
            key={menu.id}
            x={deleteMenu}
            // updateMenu={updateMenu}
            // deleteMenu={deleteMenu}
            {...menu}
          />
        );
      })}
    </div>
  );
};

export default MenuList;