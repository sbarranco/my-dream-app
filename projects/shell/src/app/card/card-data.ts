import { Card } from './card.model';

export const CARDS: Card[] = [
  {
    title: 'Your dreams',
    content: 'See the list of your dreams and check if they become reality',
    buttonText: 'See dreams list',
    path: 'dreams/list',
  },
  {
    title: 'Add new Dream',
    content: 'Do you want to share your last night dream? Post it!',
    buttonText: 'Create new dream',
    path: 'dreams/create',
  },
  {
    title: 'Find new friends',
    content: 'Do you want to find a friend to share common dreams?',
    buttonText: 'Find new friends',
    path: '',
  },
];
