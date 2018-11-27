import { Directive, TemplateRef, ViewContainerRef, HostListener, Renderer2, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    constructor() {
    }
}

