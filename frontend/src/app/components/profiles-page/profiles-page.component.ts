import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Profile } from 'src/app/interfaces/profile';

@Component({
  selector: 'app-profiles-page',
  templateUrl: './profiles-page.component.html',
  styleUrls: ['./profiles-page.component.scss']
})
export class ProfilesPageComponent implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }

  profiles: Profile[] = [];

  ngOnInit(): void {
    this.httpService.getProfiles()
      .subscribe((data: any[]) => {
        data.forEach(user => {
          const profile: Profile = {
            id: user._id,
            profilePicture: user.profilePicture,
            name: user.name,
            email: user.email,
            phone: user.phone
          } ;
          this.profiles.push(profile);
        })
      });
  }

  addProfile(newProfile: Profile){
    this.httpService.addProfile(newProfile)
      .subscribe((data:Profile) => {
        this.profiles.push(newProfile);
      });
  }

}
