/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// eslint-disable-next-line @typescript-eslint/naming-convention
declare let HKVideoPlayer;

@Component({
  selector: 'app-church',
  templateUrl: './church.page.html',
  styleUrls: ['./church.page.scss'],
})
export class ChurchPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  play() {
    let url = 'https://youtu.be/RE3cOsUgqHs';
    HKVideoPlayer.play('url');
  }
}
