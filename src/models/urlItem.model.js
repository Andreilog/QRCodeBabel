export class UrlItemModel {
    title = '';
    url = '';

    constructor(title, url) {
        if (title) {
            this.title = title;
        }

        if (url) {
            this.url = url;
        }
    }
  }
  