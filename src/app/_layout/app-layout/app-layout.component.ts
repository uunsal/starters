import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {

  fruits: Array<any> = [
    {fruit: 'Monday', link: '/book'},
    {fruit: 'Tuesday'},
    {fruit: 'Wednesday'},
    {fruit: 'Thursday'},
    {fruit: 'Friday', },
    {fruit: 'Saturday'},
    {fruit: 'Sunday'},
    {fruit: 'Monday'},
    {fruit: 'Tuesday'},
    {fruit: 'Wednesday'},
    {fruit: 'Thursday'},
    {fruit: 'Friday', },
    {fruit: 'Saturday'},
    {fruit: 'Sunday'},
    {fruit: 'Monday'},
    {fruit: 'Tuesday'},
    {fruit: 'Wednesday'},
    {fruit: 'Thursday'},
    {fruit: 'Friday', },
    {fruit: 'Saturday'},
    {fruit: 'Sunday'},
  ];
  constructor() {
  }

  items = [
    {
      title: 'Profile',
      icon: 'person-outline',
      link: [],
    },
    {
      title: 'Change Password',
      icon: 'lock-outline',
      link: [],
    },
    {
      title: 'Privacy Policy',
      icon: 'checkmark-outline',
      link: [],
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
      link: [],
    },
  ];

  ngOnInit() {
  }



  menuClick() {
    // switch () {
    //   case ;
    //   case ;
    //   case ;
    // }
  }
}
