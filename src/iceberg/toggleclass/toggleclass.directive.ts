import { Directive, HostListener, HostBinding, ElementRef, Input } from "@angular/core";

@Directive({
    selector: "[toggleclass]"
})
export class ToggleClassDirective {
    constructor (private elementRef : ElementRef) {}

    public classname = "open";
    @HostBinding("class.open") isOpen = false;

    @HostListener("document:click", ["$event.target"]) onClickOut (targetElement) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if(!clickedInside) {
            this.isOpen = false;
        } else {
            this.isOpen = !this.isOpen;
        }
    }

}