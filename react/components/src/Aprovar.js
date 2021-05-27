import React from 'react'
import Comment from './Comment'

const Aprovar = props => {
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
            <div className='ui two buttons'>
                <button className="ui inverted green button">Aprovar</button>
                <button className="ui inverted red button">Rejeitar</button>
            </div>
        </div>
    )
}

export default Aprovar