import React from 'react';

class SearchBar extends React.Component {

    state= {search:''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onEnter(this.state.search);
        
    };

    onInputChange = (event) => {
        this.setState({search: event.target.value});
    };

   render() {
        return (
        <div>
            <form className={'ui form segment '}>
                <div className="ui fluid action input">
                    <input 
                        type="text" 
                        value={this.state.search}
                        onChange={this.onInputChange}
                        onSubmit={this.onFormSubmit}
                        placeholder="Search for video" />
                    <button className="ui green button"
                    onClick={this.onFormSubmit}>Search</button>
                </div>
            </form>
        </div>);
    }
};

export default SearchBar;