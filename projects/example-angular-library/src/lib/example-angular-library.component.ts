import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-example-angular-library',
  template: `
    <p>
      example-angular-library works!
    </p>
  `,
  styles: [
  ]
})
export class ExampleAngularLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
