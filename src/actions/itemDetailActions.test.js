import * as actions from "./itemDetailActions";

describe("Item list actions test", () => {
	test("fetchItem creates FETCH_ITEM action", () => {
		const itemId = [];

		const actionResponse = actions.fetchItem(itemId);

		const finalResult = {
			type: actions.FETCH_ITEM,
			payload: itemId
		};

		expect(actionResponse).toEqual(finalResult);
	});

	test("fetchItemSuccess creates FETCH_ITEM_SUCCESS action", () => {
		const payload = [];

		const actionResponse = actions.fetchItemSuccess(payload);

		const finalResult = {
			type: actions.FETCH_ITEM_SUCCESS,
			payload
		};

		expect(actionResponse).toEqual(finalResult);
	});

	test("fetchItemError creates FETCH_ITEM_ERROR action", () => {
		const error = {};

		const actionResponse = actions.fetchItemError(error);

		const finalResult = {
			type: actions.FETCH_ITEM_ERROR,
			error
		};

		expect(actionResponse).toEqual(finalResult);
	});
});
