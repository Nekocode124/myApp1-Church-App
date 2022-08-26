import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  public items = [
    // eslint-disable-next-line max-len
    {
      text: 'Gentle and Lowly The Heart of Christ for Sinners and Sufferers',
      badgeValue: '30',
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtNJ4V6wbKoDRPE32DuALRwNz-Plbvi8cNCnyH1lKF-kk_uisk',
    },

    // eslint-disable-next-line max-len
    {
      text: ' The Holly Bible, Testament and the New Testament.',
      badgeValue: '66',
      img: 'https://clipart.world/wp-content/uploads/2021/05/Holy-Bible-clipart-transparent.png',
    },

    // eslint-disable-next-line max-len
    {
      text: 'Mere Christianity',
      badgeValue: '90',
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQGsvBdyK8SHUuzok8TG0617wKZ6wlUsCvkWUqalWfiLMxsVFE',
    },

    // eslint-disable-next-line max-len
    {
      text: 'The Return of the Gods',
      badgeValue: '100',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrj0vcaUJ-6mMpsichUIS7m7tvwL2A_MUI4lBHJTnUTTJwYpMQ',
    },

    // eslint-disable-next-line max-len
    {
      text: 'The Power of Positive Thinking',
      badgeValue: '1870',
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJ-JYdJ2BTGsp1me1QAgrCG0LPZti-GsHaHmZmj-nzwLI20Cp1',
    },

    // eslint-disable-next-line max-len
    {
      text: 'Find Your People: Building Deep Community in a Lonely World',
      badgeValue: '70',
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJdqczEvvZmEe24mRKohnKdf7M5ZFVaWfPWM87TesflnhEHoP1',
    },

    // eslint-disable-next-line max-len
    {
      text: 'The 5 Love Languages: The Secret to Love That Lasts',
      badgeValue: '200',
      img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTOFOWH34te2gvu5jEfv2p5CdA5LpxKmuwxENpH7ISZS-T7Kpiq',
    },

    // eslint-disable-next-line max-len
    {
      text: 'You are an Amazing Girl',
      badgeValue: '180',
      img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRr00wuT8CCfDajHGCE-Rq15iSBmYBvswvUlfOfTwQ1rsS6064O',
    },

    // eslint-disable-next-line max-len
    {
      text: 'Knowing God',
      badgeValue: '700',
      img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ3ef0viDsvNC3XiAEcYdJAZ4SIvfjQ0LFADdsSP7Q17iBkJHr',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
