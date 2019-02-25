import axios from 'axios';

export class UrlListService {

  _url = 'http://localhost:58452/api/sites';

  getAll() {
    return new Promise((resolve, reject) => {
      axios.get(this._url).then( response => resolve(response.data) ).catch( reason => {
        console.error(reason);
        reject(reason);
      })
    });
  }

  getByTitle(title) {
    return new Promise((resolve, reject) => {
      axios.get(this._url).then(
        (response) => {
          resolve(response.data.find(item => item.title === title));
        }
      ).catch( reason => {
        console.error(reason);
        reject(reason);
      });
    })
  }

  getQRImageUrl(title) {
    return `${this._url}/${title}`;
  }
}
