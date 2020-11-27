import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory-selectors";

import { DirectoryItemContainer } from "./directory.styles.jsx";

import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => (
  <DirectoryItemContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryItemContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
