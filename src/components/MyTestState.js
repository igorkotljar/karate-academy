import { Button } from '@mui/material';
import React, {useState} from 'react'

function MyTestState() {

    const [count, setCount] = useState(0);


  return (
    <div style={{textAlign: "center", margin: 10, padding: 10}}>
    <Button onClick={() => setCount(count + 1)} variant='outlined'> Click to count</Button>
      <p>You clicked {count} times</p>
    </div>
  )
}

export default MyTestState;