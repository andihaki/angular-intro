import { Component } from "@angular/core";
import { ProfilePhotoComponent } from "./profile-photo";

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.html',
    styleUrls: ['./user-profile.css'],
    imports: [ProfilePhotoComponent]
})
export class UserProfileComponent { }