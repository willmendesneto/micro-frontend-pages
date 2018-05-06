import { ListingItemsPage } from 'micro-frontend-react-pages';
import renderAsyncProps from '../shared/hoc/render-async-props';
import fixtureItems from '../shared/fixtures/items';

import 'micro-frontend-react-pages/src/scss/pages/list-items.scss';

const Items = ({ items }) => <ListingItemsPage items={items} />

Items.getInitialProps = async () => {
  const data = await Promise.resolve({
    items: fixtureItems,
  });

  return { items: data.items, pageTitle: 'Product item page' }
}

export default renderAsyncProps(Items);
