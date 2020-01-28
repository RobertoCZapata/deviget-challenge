import reducer, { initialState } from "./itemListReducer";
import * as actions from "../actions/itemListActions";
import * as detailActions from "../actions/itemDetailActions";

describe("item List Reducer Actions", () => {
	test("default action return initial state", () => {
		const action = {};

		const state = reducer(undefined, action);

		expect(state).toEqual(initialState);
	});

	test("SEARCH_ITEMS_SUCCESS, FETCH_ITEMS_SUCCESS action modifies state correctly", () => {
		const payload = [];

		const action = actions.fetchItems(payload);

		const state = reducer(initialState, action);

		expect(state.items).toEqual(payload);
	});

	test("SEARCH_ITEMS_ERROR, FETCH_ITEMS_ERROR action modifies state correctly", () => {
		const error = {};

		const newState = {
			items: [],
			itemSelected: [],
			error: {}
		};

		const action = actions.fetchItemsError(error);

		const state = reducer(initialState, action);

		expect(state).toEqual(newState);
	});

	test("FETCH_ITEM_SUCCESS action modifies state correctly", () => {
		const payload = [];

		const action = detailActions.fetchItemSuccess(payload);

		const state = reducer(initialState, action);

		expect(state.items).toEqual(payload);
	});
});
