import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import Comment from './Comment'
import Aprovar from './Aprovar'

const App = () => {
    return (
        <div className="ui container comments">
            <Comment autor="Rolland"
                data='Ontem 14h' avatar={faker.image.avatar()}
                coment={faker.lorem.sentence()} />

            <Comment autor="Zane"
                data='Hoje 11h'
                avatar={faker.image.avatar()}
                coment={faker.lorem.sentence()} />
            <Aprovar>
                {/* transforma fechando a tag transforma o interior em children */}
                <Comment autor="Amara"
                    data='Hoje 12h'
                    avatar={faker.image.avatar()}
                    coment={faker.lorem.sentence()} />
            </Aprovar>
        </div>
    )
}

ReactDOM.render(
    <App />, document.getElementById('root')
)