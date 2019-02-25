export class UrlItemModel {

    title = undefined;
    url = undefined;

    constructor(title, url) {
        if (title) {
            this.title = title;
        }

        if (url) {
            this.url = url;
        }
    }
  }
  