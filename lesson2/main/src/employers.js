const employers = [
    "Alex",
    "",
    "ludmila",
    "Viktor",
    "",
    "oleg",
    "iNna",
    "Ivan",
    "Alex",
    "Olga",
    " Ann"
];

class Employers {
    constructor(employers) {
        this.employers = employers;
    }

    getCorrectNames() {
        const correctNames = this.employers.filter(name => name.length > 0).map(name => name.toLowerCase().trim());
        return correctNames;
    }
}

const employersNames = new Employers(employers);

export default employersNames.getCorrectNames();