import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../API/api';
import Video from './Videos/Video';


class App extends React.Component {

    state = { data: [] }

    onFormSubmit = async (props) => {
        const response = await youtube.get('/search', {
            params: {
                q: props
            }
        });
        console.log(response);
        this.setState({ data: response.data.items });
    };


    render() {
        var img = "https://static.ess.com/uploads/media-player-icon-gray.png"
        return (
        <div>
            <nav class="navbar navbar-dark bg-dark sticky-top">
                <a class="navbar-brand" href="#">
                    <img src={img} width="30" height="30" alt="" /> Video Player
                </a>
            </nav>
            <div className="ui container">
                <SearchBar onEnter={this.onFormSubmit} />
                <Video data={this.state.data} />
            </div>
        </div>)
    }
}

export default App;