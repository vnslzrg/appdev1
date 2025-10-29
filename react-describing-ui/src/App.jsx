import ComponentA from './ComponentA';
import ComponentC from './ComponentC';
import {rootGreet} from './RootModule';

function RootComponent() {
  rootGreet();
  return (
    <div>
      <h1>Root Component</h1>
      <ComponentA />
      <ComponentC />
    </div>
  );
}

export default RootComponent;
