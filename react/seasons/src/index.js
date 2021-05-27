import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component {
    state = { lat: null, erro: '', mes: null }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ erro: err.message })
        )

    }

    render() {
        return (
            <div>
                <SeasonDisplay lat={this.state.lat} />
            </div>
        )
    }
}

ReactDOM.render(
    <App /> , document.getElementById('root')
)