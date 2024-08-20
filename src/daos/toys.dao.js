import toy from "../models/toy.js";

const toyDAO = {};

toyDAO.getAll = async() => {
    return await toy.find();
}
toyDAO.insertToy = async (Toy) => {
    return await toy.create(Toy);
}
toyDAO.getOne = async (barcode) => {
    return await toy.findOne({barcode:barcode});
}
toyDAO.deleteOne = async (barcode) => {
    return await toy.findOneAndDelete({barcode:barcode});
}
toyDAO.updateOne = async (barcode, Toy) => {
    return await toy.findOneAndUpdate({barcode:barcode}, Toy)
}

export default toyDAO