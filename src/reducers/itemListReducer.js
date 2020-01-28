import {
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_ERROR,
	DELETE_ITEM
} from "../actions/itemListActions";

import {
	SEARCH_ITEMS_ERROR,
	SEARCH_ITEMS_SUCCESS
} from "../actions/searchActions";

import {
	FETCH_ITEM_SUCCESS,
	FETCH_ITEM_ERROR
} from "../actions/itemDetailActions";

export const initialState = {
	items: [],
	itemSelected: []
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
				itemSelected: action.payload.map(item => {
					const itemData = {
						...item.data,
						visited: true
					};

					return {
						kind: item.kind,
						data: itemData
					};
				})
			};
		}
		case FETCH_ITEM_ERROR: {
			return {
				...state,
				itemSelected: null,
				error: action.error
			};
		}
		case DELETE_ITEM: {
			return {
				...state,
				items: state.items.filter(item => {
					return item.data.id !== action.payload;
				})
			};
		}
		default:
			return state;
	}
}
