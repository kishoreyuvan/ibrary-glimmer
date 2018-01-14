import Component,{tracked} from '@glimmer/component';

export default class TablBook extends Component {
@tracked index=this.args.index+1;
@tracked enable=false;
constructor(options){
super(options);
this.enabl();
}
enabl(){
     if(this.args.enable === true)
     this.enable=true;
     else
     this.enable=false;
}
};
