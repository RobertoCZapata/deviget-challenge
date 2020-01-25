import axios from "axios";

export const FETCH_ITEM = "FETCH_ITEM";
export const FETCH_ITEM_SUCCESS = "FETCH_ITEM_SUCCESS";
export const FETCH_ITEM_ERROR = "FETCH_ITEM_ERROR";

export function fetchItem(itemId) {
	return {
		type: FETCH_ITEM,
		payload: itemId
	};
}

export function fetchItemSuccess(payload) {
	return {
		type: FETCH_ITEM_SUCCESS,
		payload
	};
}

export function fetchItemError(error) {
	return {
		type: FETCH_ITEM_ERROR,
		error
	};
}

export function getItem(itemId) {
	return async dispatch => {
		dispatch(fetchItem(itemId));

		try {
			const payload = await axios.get(`https://www.reddit.com/${itemId}/.json`);

			if (payload && payload.data && payload.data.length > 0) {
				const {
					data: { children }
				} = payload.data[0];

				dispatch(fetchItemSuccess(children));
			}
		} catch (error) {
			dispatch(fetchItemError(error));
		}
	};
}
