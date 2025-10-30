import Checkout from '@pages/(order)/checkout';
import Bottom from './bottom';
import {Routes} from './navigation.types';

const routes: Routes[] = [
  {
    name: 'bottom',
    components: Bottom,
    auth: false,
    options: {
      freezeOnBlur: true, // Enable freeze on blur for better performance
    }
  },
  {
    name: 'checkout',
    components: Checkout,
    auth: false,
  }
];

export default routes;
