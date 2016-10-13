import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

/* We don't need any redux or component state, so this will just be a function-based
   component, rather than a Container or a class-based component. */
export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
}
