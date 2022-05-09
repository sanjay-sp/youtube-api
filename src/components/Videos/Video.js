
const Video = (props) => {
    if (props.data.length === 0) {
        return <div>
        </div>
    } else {
        return <div className="ui items">
            <h3>Search Results:</h3>
            {props.data.map(item => {
                return <div className="item">
                    <a className="image">
                            <img src={item.snippet.thumbnails.high.url} href="" />
                    
                    </a>
                    <div className="content">
                        <a className="header">{item.snippet.title}</a>
                        <div class="meta">
                            <span>{item.snippet.description}</span>
                        </div>
                    </div>
                </div>
            })
            }
        </div>
    }
}

export default Video;