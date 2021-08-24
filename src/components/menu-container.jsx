import MenuItem from "./menu-item";
import "./menu-container.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../redux/directory/directory.selector";

const MenuContainer = ({ sections }) => {
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

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(MenuContainer);
