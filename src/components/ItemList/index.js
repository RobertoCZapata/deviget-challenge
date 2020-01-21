import React, { Component } from "react";
import axios from "axios";
import { ItemCard } from "../ItemCard";

class ItemList extends Component {
  state = {
    items: []
  };

  componentDidMount = () => {
    axios.get("https://www.reddit.com/top/.json?limit=50").then(response => {
      console.log(response);
      this.setState({
        items: response.data.data.children
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.items.map((item, key) => (
          <ItemCard {...item} key={key.toString()} />
        ))}
      </div>
    );
  }
}

export default ItemList;
