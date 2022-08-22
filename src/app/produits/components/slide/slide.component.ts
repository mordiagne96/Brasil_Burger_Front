import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../shared/models/user';
import { SecuriteService } from 'src/app/shared/services/securite.service';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  @Input() user:User|null = null

  constructor(private serviceSecurite: SecuriteService) { }

  ngOnInit(): void {
    this.user = this.serviceSecurite.getUser()
  }

}
