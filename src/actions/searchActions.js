import axios from "axios";

export const SEARCH_ITEMS = "SEARCH_ITEMS";
export const SEARCH_ITEMS_SUCCESS = "SEARCH_ITEMS_SUCCESS";
export const SEARCH_ITEMS_ERROR = "SEARCH_ITEMS_ERROR";

export function searchItems(query) {
	return {
		type: SEARCH_ITEMS,
		payload: query
	};
}

export function searchItemsSuccess(items) {
	return {
		type: SEARCH_ITEMS_SUCCESS,
		payload: items
	};
}

export function searchItemsError(error) {
	return {
		type: SEARCH_ITEMS_ERROR,
		error
	};
}

export function getItemsSearch(query) {
	return async dispatch => {
		dispatch(searchItems(query));

		try {
			const payload = await axios.get(
				`https://www.reddit.com/search/.json?limit=50&q=${query}`
			);

			const {
				data: {
					data: { children }
				}
			} = payload;

			dispatch(searchItemsSuccess(children));
		} catch (error) {
			dispatch(searchItemsError(error));
		}
	};
}
