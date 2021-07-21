import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestsPageRoutingModule } from './tests-routing.module';

import { TestsPage } from './tests.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestsPageRoutingModule
  ],
  declarations: [TestsPage],
  providers: [SocialSharing, Contacts]
})
export class TestsPageModule {}
