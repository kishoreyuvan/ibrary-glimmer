import Component,{ tracked } from '@glimmer/component';

export default class EachBook extends Component {
@tracked('args')
  get empty() {
     if(this.args.book.count === 0)
    return true;
    else
    return false;
  }
};
