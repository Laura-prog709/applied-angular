import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <ul class="menu menu-horizontal px-1">',

    <!--@for(link of listOfLinks(); track link) {

        @if(link.children) {
            <app-main-menu-child-links [link]="link" />

        } @else {
            <app-main-menu-link [link]="link" />
        }
    }
    <h1>Applied Angular</h1>
    <div class="prose pt-12">
        <p>Hypertheory Training</p>
        <iframe src="https://giphy.com/embed/h2ZHafpzqVXssKkBbt" width="480" height="319" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/justin-transparent-h2ZHafpzqVXssKkBbt">via GIPHY</a></p>
      </div>
  `,-->
  styles: ``
})
export class MainMenuComponent {

    pay = 123.85;
    listOfLinks = input.required
}