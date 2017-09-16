import * as APIUtil from '../utils/book_api_utils';
export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const BOOK_ERROR= 'BOOK_ERROR';
// export const CLEAR_ERRORS= 'CLEAR_ERRORS';
// export const RECEIVE_ERRORS= 'RECIEVE_ERRORS';



export const receiveBook = book => ({
  type: RECEIVE_BOOK,
  book
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  book
});

export const BookError = error => ({
  type: Book_ERROR,
  error
})

//-----------------------------------------------------------------------------
// async actions
export const createBook = data => dispatch => (
  APIUtil.createBook(data)
  .then(book =>  dispatch(receiveBook(book)),
  err => dispatch(receiveErrors(err.responseJSON)))
);


export const fetchBooks = () => dispatch => (
  APIUtil.fetchBooks()
    .then(books => dispatch(receiveBooks(books)))
);


export const fetchBook = id => dispatch => (
	APIUtil.fetchBook(id)
    .then(book => dispatch(receiveBook(book)))
);

export const editBook = (book, id) => dispatch => (
  APIUtil.updateBook(book, id)
    .then(editedBook => dispatch(receiveBook(editedBook)))
);

export const deleteBook = id => dispatch => (
  APIUtil.deleteBook(id)
  .then(book => dispatch(removeBook(book)))
);