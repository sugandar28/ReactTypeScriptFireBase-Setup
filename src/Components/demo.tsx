import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { demoAction } from '../Redux/Actions';

function Demo() {
  const dispatch = useDispatch();
    const { SayHi } = useSelector((state: any) => state.demoReducer);
    const AfterClick = "Hi ..!";
    const beforeClick = "";
  return (
    <div className="App">
      <div>{SayHi ? AfterClick : beforeClick}</div>
      <button onClick={()=>dispatch(demoAction())}>Click me</button>
    </div>
  );
}
export { Demo };