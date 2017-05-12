import { EventEmitter, Injectable } from  '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ChefApp {
    public config;
    
    constructor (private http : Http) {
        this.config = new Observable(
            observer => {
                this.loadConfig().subscribe(
                    (response : Response) => {
                        this.config = response.json();
                        observer.next(this.config);
                        observer.complete();
                    }
                );
            }
        );
    }

    public get = function(key : string) {
        return this.config[key];
    }

    // PRIVATE

    private loadConfig = function() {
        return this.http.get("config.json");
    }
}