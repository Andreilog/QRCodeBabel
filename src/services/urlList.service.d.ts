/*
// before (see readme)
export declare class UrlListService {
    _url: string;
    getAll(): Promise<{}>;
    getByTitle(title: any): Promise<{}>;
    getQRImageUrl(title: any): string;
}
*/

import { UrlItemModel } from "../models/urlItem.model";

export declare class UrlListService {
    // _url: string; // commented out private field
    getAll(): Promise<UrlItemModel[]>;
    getByTitle(title: string): Promise<UrlItemModel>;
    getQRImageUrl(title: string): string;
}
