import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FaceSnapComponent} from "./face-snap/face-snap.component";
import {NgForOf} from "@angular/common";
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr'
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent, NgForOf, FaceSnapListComponent, HeaderComponent],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    registerLocaleData(fr.default);
  }
}
