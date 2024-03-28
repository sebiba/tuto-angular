import { Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {NgIf, NgStyle, NgClass, UpperCasePipe, DatePipe} from "@angular/common";
import {CommonModule} from '@angular/common'
import {FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgIf, NgStyle, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.css'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  snapButton!: string;

  constructor(private faceSnapsService: FaceSnapsService) {}
  ngOnInit() {
    this.snapButton = "oh snap!";
  }
  onSnap(){
    if(this.snapButton == "oh snap!"){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapButton = "Oops, un Snap!";
    }else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapButton = "oh snap!";
    }
  }
}
