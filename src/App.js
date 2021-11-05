import './common/bootstrap'

import HelloWorld from './reactjs.org/1.hello-world/HelloWorld'
import Jsx from './reactjs.org/2.jsx/Jsx'
import RenderingElements from './reactjs.org/3.rendering-elements/RenderingElements'
import Welcome from './reactjs.org/4.components-props/Welcome'
// import Counter from './state/Counter'

const App = () => {
    return (
        <div className="container">
            <HelloWorld></HelloWorld>
            <Jsx></Jsx>
            <RenderingElements></RenderingElements>
            <Welcome name={'moregorenine'}/>
        </div>
    );
}

export default App;
