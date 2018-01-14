import Component,{ tracked } from '@glimmer/component';

export default class DispComponent extends Component {
@tracked index;
inde=this.args.index+1;
};
