import * as APIUtil from '../utils/news_api_utils';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export const RECEIVE_ALL_NEWS = 'RECEIVE_ALL_NEWS';
export const REMOVE_NEWS = 'REMOVE_NEWs';
export const RECEIVE_ERRORS= 'RECIEVE_ERRORS';

export const receiveNews = news => ({
  type: RECEIVE_NEWS,
  news
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveAllNews = all_news => ({
  type: RECEIVE_ALL_NEWS,
  all_news
});

export const removeNews = news => ({
  type: REMOVE_NEWS,
  news
});

//-----------------------------------------------------------------------------
// async actions
export const createNews = data => dispatch => (
  APIUtil.createNews(data)
  .then(news =>  dispatch(receiveNews(news)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchAllNews = () => dispatch => (
  APIUtil.fetchAllNews()
    .then(all_news => dispatch(receiveAllNews(all_news)))
);


export const fetchNews = id => dispatch => (
	APIUtil.fetchNews(id)
    .then(news => dispatch(receiveNews(news)))
);

export const editNews = (news, id) => dispatch => (
  APIUtil.updateNews(news, id)
    .then(editedNews => dispatch(receiveNews(editedNews)))
);

export const deleteNews = id => dispatch => (
  APIUtil.deleteNews(id)
  .then(news => dispatch(removeNews(news)))
);