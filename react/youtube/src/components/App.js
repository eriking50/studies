import React from 'react'
import youtube from '../api/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.searchSubmit('rock')
    }

    searchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
        console.log(this.state.videos)
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className='app ui container'>
                <SearchBar onSubmit={this.searchSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
