import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class StorageService {

    public namelocalStorage = 'web-app-ipiranga';
    private res;
    private key;


    constructor() {}

    /* TRATAMENTO SESSION LOCAL STORAGE */
    /* ----------------------------------------------------------------- */
    //
    writeSessionStorage(data, key?: string) {
        this.key = key ? key : this.namelocalStorage;
        return sessionStorage.setItem(this.key, data)
    }

    readSessionStorage(key?: string) {
        this.key = key ? key : this.namelocalStorage;
        return sessionStorage.getItem(this.key);
    }

    eraseSessionStorage(key?: string) {
        this.key = key ? key : this.namelocalStorage;
        return sessionStorage.removeItem(this.key);
    }
    ClearSessionStorage() {
        return sessionStorage.removeItem(this.namelocalStorage);
    }
}
