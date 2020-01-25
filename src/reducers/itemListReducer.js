import {
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_ERROR
} from "../actions/itemListActions";

import {
	SEARCH_ITEMS_ERROR,
	SEARCH_ITEMS_SUCCESS
} from "../actions/searchActions";

import {
	FETCH_ITEM_SUCCESS,
	FETCH_ITEM_ERROR
} from "../actions/itemDetailActions";

const initialState = {
	items: [],
	itemSelected: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SEARCH_ITEMS_SUCCESS:
		case FETCH_ITEMS_SUCCESS: {
			return {
				...state,
				items: action.payload
			};
		}
		case SEARCH_ITEMS_ERROR:
		case FETCH_ITEMS_ERROR: {
			return {
				...state,
				items: [],
				error: action.error
			};
		}

		case FETCH_ITEM_SUCCESS: {
			return {
				...state,
				itemSelected: action.payload
			};
		}

		case FETCH_ITEM_ERROR: {
			return {
				...state,
				itemSelected: null,
				error: action.error
			};
		}

		default:
			return state;
	}
}
