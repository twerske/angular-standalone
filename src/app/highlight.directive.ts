import { Directive } from '@angular/core';

@Directive({
  selector: '[app-highlight]',
  standalone: true,
  host: {
    '[style.background-color]': "'#ff44cc'",
    '[style.padding]': "'0.1em 0.2em'",
    '[style.margin-top]': "'0.1em'",
  },
})
export class HighlightDirective {}
