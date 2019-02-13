import axios from 'axios';

export class UrlListService {

  _url = 'http://localhost:58452/api/sites';

  getAll() {
    return new Promise((resolve, reject) => {
      axios.get(this._url).then( response => resolve(response.data) );
    });
  }

  getByTitle(title) {
    return new Promise((resolve, reject) => {
      axios.get(this._url).then(
        (response) => {
          resolve(response.data.find(item => item.title === title));
        }
      );
    })
  }

  getQRImageUrl(title) {
    return `${this._url}/${title}`;
  }
}
