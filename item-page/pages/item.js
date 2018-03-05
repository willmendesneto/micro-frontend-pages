import { ListingItemPage } from 'micro-frontend-react-pages';
import renderAsyncProps from '../shared/hoc/render-async-props';
import fixtureItems from '../shared/fixtures/items';

import 'micro-frontend-react-pages/src/scss/pages/list-items.scss';

const Item = ({ item }) => <ListingItemPage item={item} />

Item.getInitialProps = async ({ query: { id }}) => {
  const data = await Promise.resolve({
    item: fixtureItems[id],
  });

  return { item: data.item, pageTitle: 'Product items page' }
}

export default renderAsyncProps(Item);
