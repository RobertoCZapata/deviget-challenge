import {
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_ERROR
} from "../actions/itemListActions";

const initialState = {
	items: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_ITEMS_SUCCESS: {
			return {
				...state,
				items: action.payload
			};
		}
		case FETCH_ITEMS_ERROR: {
			return {
				...state,
				items: [],
				error: action.error
			};
		}
		default:
			return state;
	}
}
