import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import fetchingData from "../actions";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchingData();
    // call our action
  }

  render() {
    if (this.props.fetching) {
      console.log("currently fetching data")
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters : state.characters,
  fetching : state.fetching,
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps, /* mapStateToProps replaces null here */
  {
    fetchingData
    /* action creators go here */
  }
)(CharacterListView);
