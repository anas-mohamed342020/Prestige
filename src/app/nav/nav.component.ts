import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}
  i: any = 1;
  async fun() {
    console.log(this.i);
    if (this.i == 2) {
      await $('#profile-list').animate({ top: '+=35px' }, 500,()=>{
        $('#profile-list').css({ display: 'none' });
      });
      this.i = 1;
    } else  {
      $('#profile-list').css({ display: 'block' });
      await $('#profile-list').animate({ top: '-=35px' }, 500);
      this.i = 2;
    }
  }
  ngOnInit(): void {
    let items = document.getElementsByClassName('layout-topbar-item');
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('click', () => {
        if (items[i].classList.contains('active-topmenuitem')) {
          items[i].classList.remove('active-topmenuitem');
        } else {
          items[i].classList.add('active-topmenuitem');
        }
      });
    }

    document.getElementById('nav')?.addEventListener('click', () => {
      document
        .getElementById('nav-main')
        ?.classList.add('layout-mobile-active');
    });

    document
      .getElementsByClassName('layout-mask')[0]
      ?.addEventListener('click', () => {
        document
          .getElementById('nav-main')
          ?.classList.remove('layout-mobile-active');
      });
    document.getElementById('profile')?.addEventListener('click', this.fun);
  }
}
