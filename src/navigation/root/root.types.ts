import { Category } from '@core/api/category.types';

export type BottomNavigationParamList = {
  home: undefined;
  history: undefined;
};

export type RootStackParamList = {
  bottom: undefined;
  checkout: undefined;
  walkthrough: undefined;
  // (auth) group
  login: undefined;
  onboarding: undefined;
  verification: any;
  register: undefined;

  // (bottom) group
  activity: undefined;
  chat: undefined;
  dashboard: undefined;
  home: undefined;
  profile: undefined;

  // (Gamification) group
  avatar: undefined;
  checkin: undefined;
  gatcha: undefined;
  league: undefined;
  level: undefined;
  shop: undefined;
  streak: undefined;
  //  (Gamification) milestone group
  milestonelist: undefined;
  milestonedetail: undefined;
  //  (Gamification) Challenge Group
  challengelist: undefined;
  challengedetail: undefined;

  // (Main) Group
  category: {
    activeID: number;
    onPress: (item: Category, index: number) => void;
  };
  changeprofile: undefined;
  chatdetail: undefined;
  explore: undefined;
  // (Main) Friend Group
  friendlist: undefined;
  frienddetail: undefined;
  notification: undefined;
  spot: undefined;
  stats: undefined;

  survey: undefined;
  webview: {
    uri: string;
  };
};
