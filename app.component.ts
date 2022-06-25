import { Component } from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoFinalAp';
  faFacebook= faFacebookSquare;
  faGithub=faGithub;
  faInstagram=faInstagram;
  faTwitter=faTwitterSquare;
  faLinkedin=faLinkedin;
  faUser=faUser;

  modal{
    
  }
}
