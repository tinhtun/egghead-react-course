import React from 'react';
import ChildrenDemo from './Children.js';
import ValidationDemo from './Validation.js';
import EventDemo from './Event.js';
import RefsDemo from './Refs.js';
import LifeCycleDemo from './Lifecycles.js';
import LifeCycleDemoTwo from './LifecyclesTwo.js';
import MapToReactCompsDemo from './MapToReactComps.js';
import HigherOrderComponentDemo from './HigherOrderComponent.js';
import JSXLiveCompilerDemo from './JSXLiveCompiler.js';
import ChildrenUtilitiesDemo from './React.ChildrenUtilities.js';
import ExtendChildrenFunctionalityDemo from './ExtendChildrenFunctionality.js';
import ReusableComponentsDemo from './ReusableComponents.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <ChildrenDemo />
        <hr/>
        <ValidationDemo />
        <hr/>
        <EventDemo />
        <hr/>
        <RefsDemo />
        <hr/>
        <LifeCycleDemo />
        <hr/>
        <LifeCycleDemoTwo />
        <hr/>
        <MapToReactCompsDemo />
        <hr/>
        <HigherOrderComponentDemo />
        <hr/>
        <JSXLiveCompilerDemo />
        <hr/>
        <ChildrenUtilitiesDemo />
        <hr/>
        <ExtendChildrenFunctionalityDemo />
        <hr/>
        <ReusableComponentsDemo />
        <hr/>
      </div>
    );
  }
}



export default App;
