import { StackNavigationProp } from '@react-navigation/stack';

export enum Screens {
  Root = 'Root',
  Main = 'Main',
  Details = 'Details',
}

export type RootStackList = {
  [Screens.Root]: undefined;
  [Screens.Main]: undefined;
  [Screens.Details]: { photoId: string };
};

export type RootStackNavigationProp<T extends keyof RootStackList> =
  StackNavigationProp<RootStackList, T>;
