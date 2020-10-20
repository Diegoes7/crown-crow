import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectColectionsForPreview } from '../../redux/shop/shop-selectors';

import CollectionPreview from "../collection-preview/collection-preview.component";

import { CollectionOverviewContainerStyles } from './collection-overview.styles.jsx'

const CollectionOverview = ({ collections }) => (
  <CollectionOverviewContainerStyles>
{collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionOverviewContainerStyles>
)

const mapStateToProps = createStructuredSelector({
  collections: selectColectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)