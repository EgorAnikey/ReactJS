const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ["SRL", "PLO", "J&K"],
    rus: ["RusAuto", "SBO"]
};

class Sponsor {
    constructor(sponsors) {
        this.sponsors = sponsors;
    }

    calcCash() {
        const {
            cash
        } = this.sponsors;
        return cash.reduce((prev, cur) => prev + cur);
    }

    getSponsor() {
        const {
            eu,
            rus
        } = this.sponsors;
        return [...eu, ...rus]
    }

    showInfo() {
        return [this.getSponsor(), this.sponsors.eu[0], this.calcCash()];
    }
}

const firstSponsor = new Sponsor(sponsors);

export default firstSponsor.showInfo();