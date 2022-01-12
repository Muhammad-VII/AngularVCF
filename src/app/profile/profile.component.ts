import { Component, OnInit } from '@angular/core';
import { VCard, VCardFormatter } from "ngx-vcard";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public vCard: VCard = {
    name: {
      firstNames: "Muhammad",
      lastNames: "Akmal",
    },
    telephone: ['01012114928']
  };
  public generateVCardOnTheFly = (): VCard => {
    // TODO: Generate the VCard before Download
    return {
      name: { firstNames: "John", lastNames: "Doe", addtionalNames: "Auto" },
      telephone: ['01012114928']
    };
  };
  public vCardString = VCardFormatter.getVCardAsString(this.vCard);

  constructor() { 
    console.log(navigator)
  }

  ngOnInit(): void {
  }

}
