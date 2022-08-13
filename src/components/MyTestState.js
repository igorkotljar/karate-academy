import { Button } from '@mui/material';
import React, {useState} from 'react'

function MyTestState() {

    let [count, setCount] = useState(null);
    let msg = "Try to hit 11 times "
 
    if (count === 7) {
        msg = "Almost there! "
    } else if (count == 11) {
        count = null;
        msg = "NOT EVEN CLOSE"
    } else {
        
    }
    

  return (
    <div style={{textAlign: "center", margin: 10, padding: 10}}>
    <Button onClick={() => setCount(count + 1)} variant='outlined'> Click to count</Button>
      <p>{msg} {count} </p>
    </div>
  )
}

export default MyTestState;