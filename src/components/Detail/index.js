import React, { useEffect } from "react";
import { ItemCard } from "../ItemCard";
import { getItem } from "../../actions/itemDetailActions";
import { useDispatch, useSelector } from "react-redux";

const ItemDetail = ({ itemId }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchItem = () => dispatch(getItem(itemId));
		fetchItem();
	}, []);

	const item = useSelector(state => state.items.itemSelected);

	console.log(item);

	if (item && item.length > 0) {
		const itemSelected = item[0];

		return <ItemCard {...itemSelected} />;
	}

	return null;
};

export default ItemDetail;
