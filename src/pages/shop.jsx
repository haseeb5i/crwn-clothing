import React from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../components/collection-preview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: SHOP_DATA
        }
    }

    render() {
        const {collection} = this.state;
        return (
        <div className="shop-page">
            {
                collection.map(({id, title, items}) => {
                   return <CollectionPreview key={id} title={title} items={items}/>
                })
            }
        </div>)
    }
} 

export default ShopPage;