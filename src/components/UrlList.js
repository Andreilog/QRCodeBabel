import React, { Component } from 'react';
import { UrlListService } from '../services/urlList';
import styles from './UrlList.css'

export class UrlList extends Component {

    constructor(props) {
        super(props);
    }

    // no DI support by default in React, so we will use "new" here
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
        console.log(urlItem);
    }

    render () {
        const urlItems = this.state.urlItems.map( (item, index) => {
            return (
            <li key={index}>
            <div className={styles.tooltip}>
                <a onMouseOver={(event) => this.handleOnMouseOver(item)}>
                    { item.title }
                </a>
                <img className={styles.tooltipImage} src={ this.service.getQRImageUrl(item.title) }/>
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
