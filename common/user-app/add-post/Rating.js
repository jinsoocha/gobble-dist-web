import React, { Component } from 'react';

const Star = (props) => {
  if (props.selected) {
    return <i {...props} className={'fa fa-star'} />;
  }
  return <i {...props} className={'fa fa-star-o'} />;
};

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      hover: null,
    };
  }
  handleMouseOver(starNum) {
    this.state.hover = starNum + 1;
    this.forceUpdate();
  }
  handleMouseOut() {
    this.state.hover = null;
    this.forceUpdate();
  }
  handleClick(starNum) {
    this.state.rating = starNum + 1;
    this.props.handleRatingChange(this.state.rating);
    this.forceUpdate();
  }
  render() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      const onMouseOver = this.handleMouseOver.bind(this, i);
      const onMouseOut = this.handleMouseOut.bind(this, i);
      const onClick = this.handleClick.bind(this, i);
      const rating = this.state.hover != null ? this.state.hover : this.state.rating;
      let selected = (i < rating);
      stars.push(
        <Star
          key={i}
          selected={selected}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          onClick={onClick}
        />);
    }
    return (<div>{stars}</div>);
  }
}

export default Rating;
