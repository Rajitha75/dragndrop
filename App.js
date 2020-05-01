import React from 'react';
import logo from './logo.svg';
import './App.css';
import LabelCard from './card/LabelCard';
import WidgetCard from './card/WidgetCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';
import DragThingsToBoxes from './DragThingsToBoxes/DragThingsToBoxes';

function App() {
  return (
    <div className="App">
      <DragThingsToBoxes/>
    </div>
  );
}

export default App;
