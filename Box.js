import React from 'react';
import  DragDropContainer  from './DragDropContainer';
import  DropTarget  from './DropTarget';
import BoxItem from './BoxItem';
var shortid = require('shortid');

export default class Box extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }
  
    handleDrop = (e) => {
      let items = this.state.items.slice();
      items.push({divId: e.dragData.divId, label: e.dragData.label, uid: shortid.generate()});
      this.setState({items: items});
      e.containerElem.style.visibility="hidden";
    };
  
    swap = (fromIndex, toIndex, dragData) => {
      let items = this.state.items.slice();
      const item = {divId: dragData.divId, label: dragData.label, uid: shortid.generate()};
      items.splice(toIndex, 0, item);
      this.setState({items: items});
    };
  
    kill = (uid) => {
      let items = this.state.items.slice();
      const index = items.findIndex((item) => {
        return item.uid == uid
      });
      if (index !== -1) {
        items.splice(index, 1);
      }
      this.setState({items: items});
    };
  
    render() {
        // console.log(this.props)
      /*
          Note the two layers of DropTarget. 
          This enables it to handle dropped items from 
          outside AND items dragged between boxes.
      */
      return (
        <div className="component_box">
            <DropTarget
              onHit={this.handleDrop}
              targetKey="box"
              dropData={{data: this.state.items[0]}}
            >
              <DropTarget
                onHit={this.handleDrop}
                targetKey="box1"
                dropData={{data: this.state.items[0]}}
              >
                <DropTarget
                onHit={this.handleDrop}
                targetKey="box2"
                dropData={{data: this.state.items[0]}}
              >


                <div className="box">
                  {this.state.items.map((item, index) => {
                    return (
                      <BoxItem key={item.uid} divId={this.props.divId} uid={item.uid} kill={this.kill} index={index} swap={this.swap}>
                        {item.label}
                        {this.props.jsonData.length !== 0 ? this.props.jsonData[0].name : ''}
                      </BoxItem>
                    )
                  })}
                </div>
              </DropTarget>
            </DropTarget>
            </DropTarget>
        </div>
      );
    }
  }