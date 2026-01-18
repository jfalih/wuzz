import { Routes } from '@navigation/navigation.types';
import { ROOT_ROUTES } from './_routes';
import ClipDetail from '@pages/(bottom)/(clip)/clip-detail';
import { SwipeNavigation } from '@navigation/swipe-navigation';
import UserDetail from '@pages/(user)/user-detail';
import Notification from '@pages/notification';
import NewsPopup from '@pages/(sheet)/news-popup';
import Onboarding from '@pages/(auth)/onboarding';
import Login from '@pages/(auth)/login';
import Register from '@pages/(auth)/register';
import ForgotPassword from '@pages/(auth)/forgot-password';
import Verification from '@pages/(auth)/verification';

const defaultConfig = {
  initialRouteName: ROOT_ROUTES.ONBOARDING,
  screenOptions: {
    freezeOnBlur: true,
    // Only show header if screen explicitly requests it via options
    headerShown: false,
  },
};

// Auth routes
const onboardingConfig: Routes = {
  name: ROOT_ROUTES.ONBOARDING,
  components: Onboarding,
  auth: false,
};

const loginConfig: Routes = {
  name: ROOT_ROUTES.LOGIN,
  components: Login,
  auth: false,
  options: {
    presentation: 'formSheet',
    headerShown: false,
    sheetAllowedDetents: 'fitToContents',
  },
};

const registerConfig: Routes = {
  name: ROOT_ROUTES.REGISTER,
  components: Register,
  auth: false,
  options: {
    presentation: 'formSheet',
    headerShown: false,
    sheetAllowedDetents: 'fitToContents',
  },
};

const forgotPasswordConfig: Routes = {
  name: ROOT_ROUTES.FORGOT_PASSWORD,
  components: ForgotPassword,
  auth: false,
  options: {
    presentation: 'formSheet',
    headerShown: false,
    sheetAllowedDetents: 'fitToContents',
  },
};

const verificationConfig: Routes = {
  name: ROOT_ROUTES.VERIFICATION,
  components: Verification,
  auth: false,
  options: {
    presentation: 'formSheet',
    headerShown: false,
    sheetAllowedDetents: 'fitToContents',
  },
};

// Main app routes
const bottomConfig: Routes = {
  name: ROOT_ROUTES.BOTTOM,
  components: SwipeNavigation,
  auth: false,
};

const clipDetailConfig: Routes = {
  name: ROOT_ROUTES.CLIP_DETAIL,
  components: ClipDetail,
  auth: false,
  // Add header only if needed
  // options: {
  //   headerShown: true,
  //   header: (props: NativeStackHeaderProps) => <Navbar {...props} />,
  // },
};

const userDetailConfig: Routes = {
  name: ROOT_ROUTES.USER_DETAIL,
  components: UserDetail,
  auth: false,
  // Add header only if needed
  // options: {
  //   headerShown: true,
  //   header: (props: NativeStackHeaderProps) => <Navbar {...props} />,
  // },
};

const notificationConfig: Routes = {
  name: ROOT_ROUTES.NOTIFICATION,
  components: Notification,
  auth: false,
  // Add header only if needed
  // options: {
  //   headerShown: true,
  //   header: (props: NativeStackHeaderProps) => <Navbar {...props} />,
  // },
};

const newsPopupConfig: Routes = {
  name: ROOT_ROUTES.NEWS_POPUP,
  components: NewsPopup,
  auth: false,
  options: {
    presentation: 'transparentModal',
    animation: 'slide_from_bottom',
    headerShown: false,
  },
};

export const rootNavigationConfigs = {
  default: defaultConfig,
  // Auth routes
  [ROOT_ROUTES.ONBOARDING]: onboardingConfig,
  [ROOT_ROUTES.LOGIN]: loginConfig,
  [ROOT_ROUTES.REGISTER]: registerConfig,
  [ROOT_ROUTES.FORGOT_PASSWORD]: forgotPasswordConfig,
  [ROOT_ROUTES.VERIFICATION]: verificationConfig,
  // Main app routes
  [ROOT_ROUTES.BOTTOM]: bottomConfig,
  [ROOT_ROUTES.CLIP_DETAIL]: clipDetailConfig,
  [ROOT_ROUTES.USER_DETAIL]: userDetailConfig,
  [ROOT_ROUTES.NOTIFICATION]: notificationConfig,
  [ROOT_ROUTES.NEWS_POPUP]: newsPopupConfig,
};

export const rootRoutes: Routes[] = [
  // Auth routes
  rootNavigationConfigs[ROOT_ROUTES.ONBOARDING],
  rootNavigationConfigs[ROOT_ROUTES.LOGIN],
  rootNavigationConfigs[ROOT_ROUTES.REGISTER],
  rootNavigationConfigs[ROOT_ROUTES.FORGOT_PASSWORD],
  rootNavigationConfigs[ROOT_ROUTES.VERIFICATION],
  // Main app routes
  rootNavigationConfigs[ROOT_ROUTES.BOTTOM],
  rootNavigationConfigs[ROOT_ROUTES.CLIP_DETAIL],
  rootNavigationConfigs[ROOT_ROUTES.USER_DETAIL],
  rootNavigationConfigs[ROOT_ROUTES.NOTIFICATION],
  rootNavigationConfigs[ROOT_ROUTES.NEWS_POPUP],
];

