import axios from "axios";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_ERROR = "FETCH_ITEMS_ERROR";

export function fetchItems() {
	return {
		type: FETCH_ITEMS
	};
}

export function fetchItemsSuccess(payload) {
	return {
		type: FETCH_ITEMS_SUCCESS,
		payload
	};
}

export function fetchItemsError(error) {
	return {
		type: FETCH_ITEMS_ERROR,
		error
	};
}

export function getItems() {
	return async dispatch => {
		dispatch(fetchItems());

		try {
			const payload = await axios.get(
				"https://www.reddit.com/top/.json?limit=50&q=dogs"
			);

			const {
				data: {
					data: { children }
				}
			} = payload;

			dispatch(fetchItemsSuccess(children));
		} catch (error) {
			dispatch(fetchItemsError(error));
		}
	};
}
