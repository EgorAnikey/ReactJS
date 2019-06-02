import employersNames from './employers';
import sponsorData from './calccash';

const [sponsors, danger, totalMoney] = sponsorData;

class makeBusiness {
  constructor(owner, cash, emp, sponsor, danger) {
    this.owner = owner;
    this.cash = cash;
    this.emp = emp;
    this.sponsor = sponsor;
    this.danger = danger;
  }

  showInfo(director = "Victor") {
    console.log(`We have a business. Owner: ${this.owner}, director: ${director}. Our budget: ${this.cash}. And our employers: ${this.emp};
    And we have a sponsors: ${this.sponsor}
    Note. Be careful with ${this.danger}. It's a huge risk.
    `);
  }
}
const business = new makeBusiness("Sam", totalMoney, employersNames, sponsors, danger);

business.showInfo('Egor');