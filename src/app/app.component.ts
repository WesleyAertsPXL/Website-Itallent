import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      "huawei",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/huawei.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "google",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/google.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "solid",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/solid.svg")
    );
  }
  ngOnInit(): void {
    
  }
  title = 'Website-Itallent';
}
