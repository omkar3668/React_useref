import { useRef } from "react"
import { useState } from "react"

export default function Player() {

  //by using useState
  // const [playerName , setPlayerName] = useState('')
  // const [submitted, setSubmitted] = useState(false)

  // function handelChange(event){
  //   setSubmitted(false)
  //   setPlayerName(event.target.value)
  // }

  // function handelClick (){
  //   setSubmitted(true)
  // }


  //by using useref

  const player = useRef();
  
  const [playerName , setPlayerName] = useState(null)

  
  function handelClick (){
    setPlayerName(player.current.value)
    player.current.value = ''
  }

  return (

     
    <section id="player">
      {/* <h2>Welcome { submitted ? playerName :  "unknown entity"}</h2> */}
      <h2>Welcome {playerName ?? "unkown entity" }</h2>

      <p>
        <input type="text" ref={player} />
        <button onClick = {handelClick}>Set Name</button>
      </p>
    </section>
  );
}
