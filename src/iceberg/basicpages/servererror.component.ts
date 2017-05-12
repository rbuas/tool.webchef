import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Data, Params } from '@angular/router';
import { Subscription } from 'rxjs/subscription';

@Component({
    selector : 'page-server-error',
    templateUrl : './servererror.component.html'
})
export class PageServerError implements OnInit, OnDestroy {
    public errorMessage : string;

    private querySubscription : Subscription;
    private dataSubscription : Subscription;

    constructor(private route : ActivatedRoute) {}

    ngOnInit() {
        this.errorMessage = this.route.snapshot.data["message"] || this.route.snapshot.queryParams["error"];

        this.querySubscription = this.route.data.subscribe(
            (params : Params) => {
                this.errorMessage = params["error"];
            }
        );
        this.dataSubscription = this.route.data.subscribe(
            (data : Data) => {
                this.errorMessage = data["message"];
            }
        );
    }

    ngOnDestroy() {
        this.querySubscription.unsubscribe();
        this.dataSubscription.unsubscribe();
    }
}