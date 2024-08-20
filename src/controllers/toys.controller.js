import toyDAO from "../daos/toys.dao.js";

export const getAll = async (req,res) => {
    await toyDAO.getAll()
    .then((toys) => {
        res.json(toys);
    })
    .catch((err) => {
        res.json({message: err})
    });
}
export const insertToy = async (req,res) => {
    await toyDAO.insertToy(req.body)
    .then((Toy) => {
        res.json(Toy);
    })
    .catch((err) => {
        res.json({message:err})
    })
}
export const getOne = async (req, res ) => {
    await toyDAO.getOne(req.params.barcode)
    .then((Toy) => {
        if (Toy != null)
            res.json(Toy)
        else
            res.json({Toy:"Toy not found"});
    })
    .catch( err => {
        res.json({message:err});
    });
}
export const deleteOne = async (req,res ) => {
    await toyDAO.deleteOne(req.params.barcode)
    .then((Toy) => {
        if (Toy != null)
            res.json(Toy)
        else
            res.json({Toy:"Toy not found"});
    })
    .catch( err => {
        res.json({message: err});
    });
}
export const updateOne =async (req, res ) => {
    await toyDAO.updateOne(req.params.barcode, req.body)
    .then((Toy) => {
        if (Toy!= null)
            res.json({message:"Toy updated"})
        else
            res.json({message:"Toy noy found"});
    })
    .catch(err => {
        res.json({message:err});
    });
}