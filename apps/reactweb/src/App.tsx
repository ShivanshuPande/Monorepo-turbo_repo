
import './App.css'
import { Button } from "@repo/ui/button";
import {VALUE} from "@repo/common/config"

function App() {
  const value = VALUE
  return (
    <>
    <Button appName='the is from the react '>Press Me!!</Button>
      
      Hello there , this is the from the react - turborepo things , join the journey 

      console.log({value})
    </>
  )
}

export default App
