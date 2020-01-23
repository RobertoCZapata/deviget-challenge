import React, { Component } from "react";
import { ItemCard } from "../ItemCard";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemListActions";

class ItemList extends Component {
	static mapStateToProps = state => {
		return {
			items: state.items.items
		};
	};

	static mapDispatchToProps = dispatch => {
		return {
			fetchItems: () => dispatch(getItems())
		};
	};

	componentDidMount = () => {
		this.props.fetchItems();
	};

	render() {
		return (
			<div>
				{this.props.items.map((item, key) => (
					<ItemCard {...item} key={key.toString()} />
				))}
			</div>
		);
	}
}

export default connect(
	ItemList.mapStateToProps,
	ItemList.mapDispatchToProps
)(ItemList);
