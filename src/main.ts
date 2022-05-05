import './polyfills';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // includes NgIf and TitleCasePipe
import { bootstrapApplication } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material/card';
import { ImageComponent } from './app/image.component';
import { HighlightDirective } from './app/highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // import standalone Components, Directives and Pipes
    ImageComponent,
    HighlightDirective,
    // or NgModules like Angular Material
    CommonModule,
    MatCardModule,
  ],
  template: `
    <mat-card *ngIf="url">
      <app-image-component [url]="url"></app-image-component>
      <h2 app-highlight>{{name | titlecase}}</h2>
    </mat-card>
  `,
})
export class ExampleStandaloneComponent {
  name = 'emma';
  url = 'https://i.imgur.com/4Xxh3QW.png';
}

bootstrapApplication(ExampleStandaloneComponent)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));
