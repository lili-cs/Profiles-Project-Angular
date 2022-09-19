import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { HttpService } from 'src/app/services/http/http.service';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  @Input()  profiles!: Profile[];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }
 
  editProfile(updatedProfile: Profile){
    this.httpService.updateProfile(updatedProfile)
      .subscribe((data: any) => {
        let obj = this.profiles.filter(item => item.id == data.id)[0];
        obj = data;
      });
  }

  deleteProfile(profileId: string){
    this.httpService.deleteProfile(profileId)
      .subscribe((data: any) => {
        this.profiles = this.profiles.filter(item => {
          item.id != data.id
        });
      })
  }
}
