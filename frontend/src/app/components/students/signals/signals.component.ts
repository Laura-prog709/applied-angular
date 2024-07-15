import {Component, OnInit, signal} from '@angular/core';

@Component({
    selector: 'app-signals',
    standalone: true,
    imports: [],
    template: "
    <p (click)="doIt()">Hi, {{user().name}} </p>
    <p> He is {{ user().age}} years old</p>
    <p> Num {{num()}}</p>
    <div>
        <button (click)="decrement()" class="btn btn-primary">
        <button (click)="increment()" class="btn btn-primary">
    </div>
    ",
    styles: ''
})
export class SignalsComponent implements OnInit {
    user = signal( {
        name: 'Matthew McConnaughey',
        age: 38,
        email: 'bob@aol.com'
    });
    doIt() {
        
    }
    ngOnInit(): void {
        this.user.set(() => ({...this.user})
    }
}