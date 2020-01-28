import * as actions from "./itemListActions";

describe("Item list actions test", () => {
	test("deleteItem creates DELETE_ITEM action", () => {
		const itemId = 10;

		const actionResponse = actions.deleteItem(itemId);

		const finalResult = {
			type: actions.DELETE_ITEM,
			payload: itemId
		};

		expect(actionResponse).toEqual(finalResult);
	});

	test("fetchItems creates FETCH_ITEMS action", () => {
		const actionResponse = actions.fetchItems();

		const finalResult = {
			type: actions.FETCH_ITEMS
		};

		expect(actionResponse).toEqual(finalResult);
	});

	test("fetchItemsSuccess creates FETCH_ITEMS_SUCCESS action", () => {
		const payload = [];

		const actionResponse = actions.fetchItemsSuccess(payload);

		const finalResult = {
			type: actions.FETCH_ITEMS_SUCCESS,
			payload
		};

		expect(actionResponse).toEqual(finalResult);
	});

	test("fetchItemsError creates FETCH_ITEMS_ERROR action", () => {
		const error = {};

		const actionResponse = actions.fetchItemsError(error);

		const finalResult = {
			type: actions.FETCH_ITEMS_ERROR,
			error
		};

		expect(actionResponse).toEqual(finalResult);
	});
});
