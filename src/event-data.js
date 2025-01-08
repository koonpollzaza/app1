import React from "react";
export function EventData2 (){
    const onClickStartStop = (ev) => {
        let t = ev.target.innerText
        let s = (t === 'Start') ? 'Stop' : 'Start'
        ev.target.innerText = s
    }
    const OnClickAdd = (ev) => {
        let t = ev.target.innerText
        let r = eval(t)
        alert(`${t} = ${r}`)
    }
    return(
        <diV style = {{textAlign:'center',marginTop:20}}>
            <button onClick={(ev) => onClickStartStop(ev)}>Start</button>
            <br/><br/>
            <button onClick={(ev) => OnClickAdd(ev)}>10 + 20</button>
            <br/><br/>
            <button onClick={(ev) => OnClickAdd(ev)}> 30 * 40 </button>
            <br/><br/>
        </diV>
    )
    
}