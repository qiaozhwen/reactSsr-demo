import React from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>rs server side render
                    <button onClick={()=>console.log('just a test')}>click1</button>
                </div>
                <div>test1</div>
                <div>test2</div>
                <div>test3</div>
                <div>test4</div>
            </div>
        )
    }
}