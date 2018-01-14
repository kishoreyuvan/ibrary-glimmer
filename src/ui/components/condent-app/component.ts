import Component,{ tracked } from '@glimmer/component';

export default class Condent extends Component {
@tracked showbook=false;
@tracked showcontact=false;
@tracked showhome=true;
showbooks(){
this.showhome=false;
this.showcontact=false;
this.showbook=true;
}
showcontacts(){
  this.showhome=false;
  this.showcontact=true;
  this.showbook=false;
}
showhomes(){
this.showhome=true;
this.showcontact=false;
this.showbook=false;
}

}
