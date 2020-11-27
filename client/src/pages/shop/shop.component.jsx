import React, { lazy, Suspense, useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop-actions";
import Spinner from "../../components/spinner/spinner.component";

import {ShopPageContainer} from './shop.styles'

const CollectionOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collections-overview.container")
);

const CollectionPageContainer = lazy(() =>
import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStart, match}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart])

    return (
      <ShopPageContainer>
        <Suspense fallback={<Spinner />}>
          <Route
            exact
            path={`${match.path}`}
            component={CollectionOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </Suspense>
        </ShopPageContainer>
    );
  }

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

/* this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectonsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectonsMap);
        this.setState({ loading: false });
      }
    ); */
