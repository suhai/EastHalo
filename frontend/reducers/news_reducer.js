import { RECEIVE_ALL_NEWS,
	RECEIVE_NEWS,
	REMOVE_NEWS
 } from '../actions/news_actions';
import merge from 'lodash/merge';

const NewsReducer = (state = {}, action) => {
	Object.freeze(state)
	let newState = merge({}, state)
	switch (action.type) {
		case RECEIVE_NEWS:
			newState[action.news.id] = action.news
			return newState

		case RECEIVE_ALL_NEWS:
      for (let key in action.all_news) {
        newState[key] = action.all_news[key];
      }
			return newState;

		case REMOVE_NEWS:
			delete newState[action.news.id];
			return newState;

		default:
			return state
	}
};

export default NewsReducer;