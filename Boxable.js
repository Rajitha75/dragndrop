import React from 'react';
import  DragDropContainer  from './DragDropContainer';
import  LabelCard from '../card/LabelCard';
/*
    Boxable -- a thing you can drag into a Box
*/

export default class Boxable extends React.Component {
  fetchData() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      console.log("json")
      console.log(json)
      this.props.returnData(json);
        // this.setState({
        //       isLoaded: true,
        //       items: json,
        // })
    });
  }
    render() {
      return (
        <div className="boxable_component" style={{display: 'inline-block'}}>
          <DragDropContainer
            targetKey={this.props.targetKey}
            dragData={{label: this.props.label}}
            customDragElement={this.props.customDragElement}
            onDragStart={()=>(console.log('start'))}
            onDrag={()=>(console.log('dragging'))}
            onDragEnd={()=>(this.fetchData())}
            onDrop={(e)=>(console.log(e))}
            divId = {this.props.divId}
          >
            <LabelCard bgcolor={this.props.bgcolor} title={this.props.title} parentFn={this.props.returnData}  style={{ marginLeft: 40}}/>
          </DragDropContainer>
        </div>
      );
    }
  }