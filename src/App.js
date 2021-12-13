import './common/bootstrap'

import HelloWorld from './reactjs.org/main-concepts/1.hello-world/HelloWorld'
import Jsx from './reactjs.org/main-concepts/2.jsx/Jsx'
import RenderingElements from './reactjs.org/main-concepts/3.rendering-elements/RenderingElements'
import Welcome from './reactjs.org/main-concepts/4.components-props/Welcome'
import Clock from './reactjs.org/main-concepts/5.state-lifecycle/Clock'
import Form from './reactjs.org/main-concepts/6.handling-events/Form'
import Toggle from './reactjs.org/main-concepts/6.handling-events/Toggle'
import LoginControl from './reactjs.org/main-concepts/7.conditional-rendering/LoginControl'
import Mailbox from './reactjs.org/main-concepts/7.conditional-rendering/Mailbox'
import Glance from "./reactjs.org/hook/2.glance/Glance";
// import Counter from './state/Counter'

const App = () => {
    const messages = ['React', 'Re: React', 'Re:Re: React']
    return (
        <div className={"container mt-5"}>
            <h1>주요 개념</h1>
            <HelloWorld/>
            <Jsx/>
            <RenderingElements/>
            <Welcome name={'moregorenine'}/>
            <Clock/>
            <Form/>
            <Toggle/>
            <LoginControl/>
            <Mailbox unreadMessages={messages}/>
            <hr/>
            <h1>Hook</h1>
            <Glance/>
        </div>
    );
}

export default App;
