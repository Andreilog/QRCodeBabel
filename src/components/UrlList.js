import React, { Component } from 'react';
import { UrlListService } from '../services/urlList.service';
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

    handleOnMouseOver(urlItem, event) {

        // console.log(event);

        if (event && event.target) {
          const elem = event.target;    // a
          const parentDiv = elem.parentNode;    // a's parent (div)
          const img = parentDiv.querySelector("img");    //img
          if (img) {
            img.style.left = `${event.offsetX + 5}px`;
            img.style.top = `${event.offsetY + 5}px`;
          }
        }
    }

    render () {
        const urlItems = this.state.urlItems.map( (item, index) => {
            return (
            <li key={index}>
                <div className={styles.tooltip}>
                    <a
                        href={ this.service.getQRImageUrl(item.title) }
                        onMouseOver={(event) => this.handleOnMouseOver(item, event.nativeEvent)}
                        onMouseMove={(event) => this.handleOnMouseOver(item, event.nativeEvent)}
                    >
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
