import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'

class App extends React.Component {
    state = { language: 'portugues' }

    onLanguageChange = language => {
        this.setState({ language })
    }

    render() {

        return (
            <div className='ui container'>
                <div>
                    Escolha uma Linguagem: 
                    <i class='flag br' onClick={ () => this.onLanguageChange('portugues')}/>
                    <i class='flag us' onClick={ () => this.onLanguageChange('ingles')} />
                </div>
                <LanguageContext.Provider value={this.state.language}>
                <UserCreate />
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App