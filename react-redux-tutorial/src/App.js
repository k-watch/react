import React from 'react';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import SampleContainer from './containers/SampleContainer';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
      <SampleContainer />
    </div>
  );
};

export default App;