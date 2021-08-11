import MenuItem from "./menu-item";
import "./menu-container.scss";
// import { useState } from "react";
import * as data from "./menu-container.data";


const MenuContainer = () => {
  // const [sections, setSections] = useState(data.default);
  const sections = data.default;
  return (
    <div className="menu-container">
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          size={section.size}
          linkUrl={section.linkUrl}
        />
      ))}
    </div>
  );
};

export default MenuContainer;
