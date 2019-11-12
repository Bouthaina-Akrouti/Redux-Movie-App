import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import { searchMovie } from './actions/MoviesActions';
export class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rating: 3,
          text: ''
        };
      }
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue}, () => this.props.search({rating: this.state.rating, keyword: this.state.text}));
      }
      handleChange= texte => {
        this.setState({text: texte}, () => this.props.search({rating: this.state.rating, keyword: this.state.text}))
      }
    render() {
        return (
            <div>
                <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
         <input type="text" name="lname" placeholder="Search Movies" onChange={(e)=>this.handleChange(e.target.value)}/>
            </div>
        );
    }

}
const mapDispatchToProps = dispatch => {
  return {
    search: rating => dispatch(searchMovie(rating))
  }
}
export default connect(null, mapDispatchToProps)(Nav);

