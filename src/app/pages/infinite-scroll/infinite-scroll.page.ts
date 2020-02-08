import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss']
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  data: any[] = [];

  constructor() {}

  ngOnInit() {
    this.data.push(
      {
        name: 'test 1',
        created: '2020/03/09'
      },
      {
        name: 'test 2',
        created: '2020/03/09'
      },
      {
        name: 'test 3',
        created: '2020/03/09'
      },
      {
        name: 'test 4',
        created: '2020/03/09'
      },
      {
        name: 'test 5',
        created: '2020/03/09'
      },
      {
        name: 'test 6',
        created: '2020/03/09'
      },
      {
        name: 'test 7',
        created: '2020/03/09'
      },
      {
        name: 'test 8',
        created: '2020/03/09'
      },
      {
        name: 'test 9',
        created: '2020/03/09'
      },
      {
        name: 'test 10',
        created: '2020/03/09'
      }
    );
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.data.push(
        {
          name: 'test 1',
          created: '2020/03/09'
        },
        {
          name: 'test 2',
          created: '2020/03/09'
        },
        {
          name: 'test 3',
          created: '2020/03/09'
        },
        {
          name: 'test 4',
          created: '2020/03/09'
        },
        {
          name: 'test 5',
          created: '2020/03/09'
        },
        {
          name: 'test 6',
          created: '2020/03/09'
        },
        {
          name: 'test 7',
          created: '2020/03/09'
        },
        {
          name: 'test 8',
          created: '2020/03/09'
        },
        {
          name: 'test 9',
          created: '2020/03/09'
        },
        {
          name: 'test 10',
          created: '2020/03/09'
        }
      );
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
