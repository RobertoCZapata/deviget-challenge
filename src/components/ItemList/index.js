import React, { useEffect } from "react";
import ItemCard from "../ItemCard";
import { getItems } from "../../actions/itemListActions";
import { useDispatch, useSelector } from "react-redux";

const ItemList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchItem = () => dispatch(getItems());
		fetchItem();
	}, []);

	const items = useSelector(state => state.items.items);

	return (
		<>
			{items.map((item, key) => (
				<ItemCard {...item} key={key.toString()} />
			))}
		</>
	);
};

export default ItemList;
