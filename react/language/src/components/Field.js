import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Field extends React.Component {
    static contextType = LanguageContext

    render() {
        const label = this.context === 'portugues' ? 'Nome' : 'Name'
        return (
            <div className='ui field'>
                <label>{label}</label>
                <input />
            </div>
        )
    }
}

export default Field