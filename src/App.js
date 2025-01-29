import React from 'react'
//import { Content, Footer, Header } from './func-components';
//import Calendar from './class-components';
//import Button from './class-components';
//import { Calculator2 } from './calculator';
//import { EventData2 } from './event-data';
//import RefsFunc from './refs-class'
//import RefsArray from './refs-array'
//import MessageBox from './state-class'
import Context from './context-content'
import { userContext } from './context'
import Header2 from './context-header2'
import Context2 from './context-content2'


export default function App(){
  let [user,setUser] = React.useState('')
  return(
    <userContext.Provider value={[user,setUser]}>
      <Context2/>
      <Header2/>
      </userContext.Provider>
  )
  //return <RefsFunc/>
  //return <RefsArray/>
  //return <MessageBox/> 
} 