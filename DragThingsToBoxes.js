import React from 'react';
import Boxable from './Boxable';
import Box from './Box';
import './DragThingsToBoxes.css';


export default class DragThingsToBoxes extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
        jsonData: []
      }
  }

  componentDidMount() {

      fetch('http://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(json => {
              this.setState({
                    isLoaded: true,
                    items: json,
              })
          });
  }

  fetchDataFromChild(data) {
    console.log(data);
    this.setState(
      {
        jsonData: data
      }
    )
  }

  displayData(data) {
    return data.map((data) => {
      return (
        <div class = 'col-md-5' >
          <li key={data.name}>{(data.name)}</li>
          {/* <h4>Email</h4>
          <li key={data.email}>{(data.email)}</li> */}
          {/* <li key={data.username}>{(data.username)}</li> */}
        </div>
      );
    });
  }

  render() {

    var { isLoaded, items } = this.state;

    if(!isLoaded) {
        return <div>Loading...</div>
    }
    else {

      return (
        <div className="drag_things_to_boxes">
          <div className="things_to_drag">
            <Boxable targetKey="box" divId="dataamount" label="Data Amount"  bgcolor="danger" title="Data Amount" returnData={(data) => this.fetchDataFromChild(data)} />
            <Boxable targetKey="box" divId="users" label="Users"  bgcolor="warning" title="Users" returnData={(data) => this.fetchDataFromChild(data)}/>
            <Boxable targetKey="box" divId="datasets" label="Data Sets"  bgcolor="success" title="Data Sets" returnData={(data) => this.fetchDataFromChild(data)}/>
          </div>
          <div className="boxes">
            <Box targetKey="box"/>
            {/* <Box targetKey="box"/> */}
          </div>
          { this.state.jsonData.length === 0 ? [] : this.displayData(this.state.jsonData) }
        </div>
      )
    }
  }
}