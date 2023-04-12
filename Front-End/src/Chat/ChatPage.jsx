import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {               //project id from chatengine.io
      const chatProps = useMultiChatLogic('b0f51215-e703-471f-91c2-7be2f3c5f376',props.user.username, props.user.secret)
      return(
        <div style={{height:'100vh'}}>
             <MultiChatSocket {...chatProps}/>
             <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
         </div>
      )
}
export default ChatsPage;