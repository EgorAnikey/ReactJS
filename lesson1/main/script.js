const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
const employersFilter = employers.filter(name => name.length > 0);
const employersNames = employersFilter.map((name) => name.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const calcCash = (everyCash) => everyCash.reduce((prev, curr) => prev + curr);

const {
    cash,
    eu,
    eu: [danger],
    rus
} = sponsors;

const money = calcCash(cash);

const makeBusiness = (owner, cash, emp, director = 'Victor') => {
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors: 
${sumSponsors.join(', ')}
Note. Be careful with ${danger}. It's a huge risk.`);
};
makeBusiness('Sam', money, employersNames);