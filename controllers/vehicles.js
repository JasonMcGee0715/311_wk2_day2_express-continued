const vehicles = require('../data/vehicles');
const contactsCount = vehicles.length;

const list = (req, res) => {
    return res.json(vehicles)
};

const show = (req, res) => {
    const id = req.params.vehicleId;

    const foundVehicle = vehicles.find(vehicle => vehicle._id === Number(id));
    console.log(foundVehicle);
    res.json(foundVehicle);
};

const create = (req, res) => {
    const newV = {
        _id: vehiclesCount + 1,
        ...req.body
    }
    if (!newV._id || !newV.imgUrl || !newV.year || !newV.make || !newV.model || !newV.price || !newV.km || !newV.miles || !newV.fuel || !newV.city || !newV.isNew) {
        return res.status(400).json({ msg: `Please enter a imgUrl, year, make, model, price, km, miles, fuel, city, isNew. No spaces.`})
    }
    vehicles.push(newV);
    res.json(vehicles);
};

module.exports = {
    list, 
    show, 
    create
}