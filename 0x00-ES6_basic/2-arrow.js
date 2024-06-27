export default function getSumOfHoods() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
        self.sanFranciscoNeighnorhoods.push(newNeighborhood);
        return self.sanFranciscoNeighborhoods;
    };
}
