import './common/bootstrap'

import HelloWorld from './reactjs.org/1.hello-world/HelloWorld'
import Jsx from './reactjs.org/2.jsx/Jsx'
import RenderingElements from './reactjs.org/3.rendering-elements/RenderingElements'
import Welcome from './reactjs.org/4.components-props/Welcome'
import Clock from './reactjs.org/5.state-lifecycle/Clock'
import Form from './reactjs.org/6.handling-events/Form'
import Toggle from './reactjs.org/6.handling-events/Toggle'
import LoginControl from './reactjs.org/7.conditional-rendering/LoginControl'
import Mailbox from './reactjs.org/7.conditional-rendering/Mailbox'
// import Counter from './state/Counter'

const App = () => {
    const messages = ['React', 'Re: React', 'Re:Re: React']
    return (
        <div className={"container mt-5"}>
            <HelloWorld></HelloWorld>
            <Jsx></Jsx>
            <RenderingElements></RenderingElements>
            <Welcome name={'moregorenine'}/>
            <Clock/>
            <Form/>
            <Toggle/>
            <LoginControl/>
            <Mailbox unreadMessages={messages}/>
        </div>
    );
}

export default App;
