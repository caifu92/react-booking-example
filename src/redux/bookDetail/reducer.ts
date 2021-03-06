import { Action, State } from './types';

const initialState: State = {
  loading: false,
  bookDetail: null
};

export default function booksReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'react-book-search/bookDetail/GET_BOOK_DETAIL':
      return {
        ...state,
        loading: true,
        bookDetail: null
      };
    case 'react-book-search/bookDetail/BOOK_DETAIL_RECEIVED':
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    default:
      return state;
  }
}
