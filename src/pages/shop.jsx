import React from "react";
import { connect } from "react-redux";
import CollectionPreview from "../components/collection-preview";
import { selectCollections } from "../redux/shop/shop.selector";
import { Route } from "react-router-dom";
import CollectionPage from "./collection";
import "./shop.scss";

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

const CollectionOverview = connect(mapStateToProps)(({ collections }) => (
  <div className="collections-overview">
    {Object.keys(collections).map((collectionKey) => {
      const { id, title, items } = collections[collectionKey]
      return <CollectionPreview key={id} title={title} items={items} />;
    })}
  </div>
));

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route path={`${match.path}`} component={CollectionOverview} exact />
    <Route
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
      exact
    />
  </div>
);

export default ShopPage;
