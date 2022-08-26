import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  option = {
    slidesPerView: 1.5,
    centerdSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay: true,
  };

  ngOnInit() {}
}
