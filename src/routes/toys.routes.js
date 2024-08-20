import { Router } from "express";
import { getAll, insertToy,getOne,deleteOne,updateOne } from "../controllers/toys.controller.js";

const routerToys = Router();

routerToys.get("/getAll", getAll);
routerToys.post("/insertToy", insertToy);
routerToys.get("/getOne/:barcode", getOne);
routerToys.delete("/deleteOne/:barcode", deleteOne);
routerToys.put("/updateOne/:barcode", updateOne);

export default routerToys