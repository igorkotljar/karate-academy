import { Button } from '@mui/material';
import React, {useState} from 'react'

function MyTestState() {

    let [count, setCount] = useState(null);
    let msg = "You clicked this amount of times: "
 
    if (count === 11) {
        count = null;
        msg = "Lets try again"
    }
    

  return (
    <div style={{textAlign: "center", margin: 10, padding: 10}}>
    <Button onClick={() => setCount(count + 1)} variant='outlined'> Click to count</Button>
      <p>{msg} {count} </p>
    </div>
  )
}

export default MyTestState;