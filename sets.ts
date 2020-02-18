import { numb } from './funcs';

class CSet {
  members: numb[];
  constructor() {}
  private addElement(n: numb): void {
    this.members.concat(n)
  }
}
