import React from "react";
import { Provider } from "react-redux";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import ItemCard from "./index";
import thunk from "redux-thunk";

configure({ adapter: new Adapter() });
const mockStore = configureMockStore([thunk]);

describe("itemCard test", () => {
	test("component render correctly", () => {
		const data = {
			id: 1,
			title: "test",
			created: 878765576,
			thumbnail: null,
			author: "test",
			num_comments: 5,
			visited: false
		};

		const store = mockStore({});

		const itemComponent = shallow(
			<Provider store={store}>
				<ItemCard data={data} />
			</Provider>
		);
		expect(itemComponent).toMatchSnapshot();
	});
});
