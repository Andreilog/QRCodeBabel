import React, { Component } from 'react';
import { UrlListService } from '../services/urlList';

export class UrlList extends Component {

    constructor(props) {
        super(props);
    }

    service = new UrlListService();

    state = {
        urlItems: []
    }
    
    componentDidMount() {
        this.service.getAll().then( items => {
            console.log(items);
            this.setState({
                urlItems : items
            });
        });
    }

    handleOnMouseOver(urlItem) {

    }

    render () {
        const urlItems = this.state.urlItems.map( item => {
            return (
            <li>
            <div className="tooltip">
                <a onMouseOver={(event) => this.handleOnMouseOver(item)}>
                    { item.title }
                </a>
                <img className="tooltipImage" src={ this.service.getQRImageUrl(item.title) }/>
            </div>
            </li> );
        });

        return (
            <div>
                <p>
                    List of urls: 
                </p>
                {urlItems}
            </div>
        );
    }
}
