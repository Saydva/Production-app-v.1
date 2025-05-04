import { Request, Response } from "express";
import Model from "../models/model";
import SubPiece from "../models/subpiece";
import Piece from "../models/piece";
import Attribute from "../models/attribute";
import Description from "../models/description";

//ATTRIBUTE CONTROLLER
// import { Attribute } from '../models/attribute';

async function GetAllAttributes(req: Request, res: Response) {
  // Logic to get all attributes
  try {
    const AttributeFindAll = await Attribute.find();
    res.status(200).json( AttributeFindAll );
  } catch (error) {
    console.error("Error fetching models:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function GetOneAttribute(req: Request, res: Response) {
  // Logic to get one attaribute by ID
  try {
    const AttributeFindOne = await Model.findById(req.params.id);
    res.status(200).json({ data: AttributeFindOne });
  } catch (error) {
    console.error("Error fetching model:", error);
    res.status(400).send("Internal Server Error");
    return;
  }
}

async function CreateAttribute(req: Request, res: Response) {
  // Logic to create a new attribute
  try {
    const { name, value } = req.body;
    const newAttribute = new Attribute({ name, value });
    await newAttribute.save();
    res.status(201).json({ message: "Attribute created successfully", data: newAttribute });
  } catch (error) {
    console.error("Error creating model:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function UpdateAttribute(req: Request, res: Response) {
  // Logic to update an attribute by ID
  try {
    const { name, value } = req.body;
    const updatedAttribute = await Attribute.findByIdAndUpdate(
      req.params.id,
      { name, value },
      { new: true }
    );
    if (!updatedAttribute) {
      return res.status(404).json({ message: "Attribute not found" });
    }
    res.status(200).json({ data: updatedAttribute });
  } catch (error) {
    console.error("Error updating model:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function DeleteAttribute(req: Request, res: Response) {
  // Logic to delete an attribute by ID
  try {
    const deletedAttribute = await Attribute.findByIdAndDelete(req.params.id);
    if (!deletedAttribute) {
      return res.status(404).json({ message: "Attribute not found" });
    }
    res.status(200).json({ data: deletedAttribute });
  } catch (error) {
    console.error("Error deleting model:", error);
    res.status(400).send("Internal Server Error");
  }
}

//DESCRIPTION CONTROLLER
// import { Description } from '../models/description';

async function GetAllDescriptions(req: Request, res: Response) {
  // Logic to get all descriptions
  try {
    const DescriptionFindAll = await Description.find();
    res.status(200).json( DescriptionFindAll );
  } catch (error) {
    console.error("Error fetching models:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function GetOneDescription(req: Request, res: Response) {
  // Logic to get one description by ID
  try {
    const DescriptionFindOne = await Description.findById(req.params.id);
    res.status(200).json({ data: DescriptionFindOne });
  } catch (error) {
    console.error("Error fetching model:", error);
    res.status(400).send("Internal Server Error");
    return;
  }
}

async function CreateDescription(req: Request, res: Response) {
  // Logic to create a new description
  try {
    const { name, value } = req.body;
    const newDescription = new Description({ name, value });
    await newDescription.save();
    res.status(201).json({ data: newDescription });
  } catch (error) {
    console.error("Error creating model:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function UpdateDescription(req: Request, res: Response) {
  // Logic to update a description by ID
  try {
    const { name, value } = req.body;
    const updatedDescription = await Description.findByIdAndUpdate(
      req.params.id,
      { name, value },
      { new: true }
    );
    if (!updatedDescription) {
      return res.status(404).json({ message: "Description not found" });
    }
    res.status(200).json({ data: updatedDescription });
  } catch (error) {
    console.error("Error updating model:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function DeleteDescription(req: Request, res: Response) {
  // Logic to delete a description by ID
  try {
    const deletedDescription = await Description.findByIdAndDelete(
      req.params.id
    );
    if (!deletedDescription) {
      return res.status(404).json({ message: "Description not found" });
    }
    res.status(200).json({ data: deletedDescription });
  } catch (error) {
    console.error("Error deleting model:", error);
    res.status(400).send("Internal Server Error");
  }
}

//SUBPIECE CONTROLLER
// import { SubPiece } from '../models/subpiece';

async function GetAllSubPieces(req: Request, res: Response) {
  // Logic to get all subpieces
  try {
    const SubPieceFindAll = await SubPiece.find();
    res.status(200).json({ data: SubPieceFindAll });
  } catch (error) {
    console.error("Error fetching models:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function GetOneSubPiece(req: Request, res: Response) {
  // Logic to get one subpiece by ID
  try {
    const SubPieceFindOne = await SubPiece.findById(req.params.id);
    res.status(200).json({ data: SubPieceFindOne });
  } catch (error) {
    console.error("Error fetching model:", error);
    res.status(400).send("Internal Server Error");
    return;
  }
}

async function CreateSubPiece(req: Request, res: Response) {
  // Logic to create a new subpiece
  try {
    const { partName, partStTime, pieces, attribute, descrition, operation } =
      req.body;
    const newSubPiece = new SubPiece({
      partName,
      partStTime,
      pieces,
      attribute,
      descrition,
      operation,
    });
    await newSubPiece.save();
    res.status(201).json({ data: newSubPiece });
  } catch (error) {
    console.error("Error creating model:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function UpdateSubPiece(req: Request, res: Response) {
  // Logic to update a subpiece by ID
  try {
    const { partName, partStTime, pieces, attribute, descrition, operation } =
      req.body;
    const updatedSubPiece = await SubPiece.findByIdAndUpdate(
      req.params.id,
      { partName, partStTime, pieces, attribute, descrition, operation },
      { new: true }
    );
    if (!updatedSubPiece) {
      return res.status(404).json({ message: "SubPiece not found" });
    }
    res.status(200).json({ data: updatedSubPiece });
  } catch (error) {
    console.error("Error updating model:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function DeleteSubPiece(req: Request, res: Response) {
  // Logic to delete a subpiece by ID
  try {
    const deletedSubPiece = await SubPiece.findByIdAndDelete(req.params.id);
    if (!deletedSubPiece) {
      return res.status(404).json({ message: "SubPiece not found" });
    }
    res.status(200).json({ data: deletedSubPiece });
  } catch (error) {
    console.error("Error deleting model:", error);
    res.status(400).send("Internal Server Error");
  }
}


//PIECE CONTROLLER
// import { Piece } from '../models/piece';

async function GetAllPieces(req: Request, res: Response) {
  // Logic to get all pieces
  try {
    const PieceFindAll = await Piece.find();
    res.status(200).json({ data: PieceFindAll });
  } catch (error) {
    console.error("Error fetching models:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function GetOnePiece(req: Request, res: Response) {
  // Logic to get one piece by ID
  try {
    const PieceFindOne = await Piece.findById(req.params.id);
    res.status(200).json({ data: PieceFindOne });
  } catch (error) {
    console.error("Error fetching model:", error);
    res.status(400).send("Internal Server Error");
    return;
  }
}

async function CreatePiece(req: Request, res: Response) {
  // Logic to create a new piece
  try {
    const {  partName, partStTime, attribute, descrition, operation } = req.body;
    const newPiece = new Piece({  partName, partStTime,   attribute, descrition, operation });
    await newPiece.save();
    res.status(201).json({ data: newPiece });
  } catch (error) {
    console.error("Error creating model:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function UpdatePiece(req: Request, res: Response) {
  // Logic to update a piece by ID
  try {
    const {  partName, partStTime, attribute, descrition, operation } = req.body;
    const updatedPiece = await Piece.findByIdAndUpdate(
      req.params.id,
      { partName, partStTime, attribute, descrition, operation },
      { new: true }
    );
    if (!updatedPiece) {
      return res.status(404).json({ message: "Piece not found" });
    }
    res.status(200).json({ data: updatedPiece });
  } catch (error) {
    console.error("Error updating model:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function DeletePiece(req: Request, res: Response) {
  // Logic to delete a piece by ID
  try {
    const deletedPiece = await Piece.findByIdAndDelete(req.params.id);
    if (!deletedPiece) {
      return res.status(404).json({ message: "Piece not found" });
    }
    res.status(200).json({ data: deletedPiece });
  } catch (error) {
    console.error("Error deleting model:", error);
    res.status(400).send("Internal Server Error");
  }
}


//MODEL CONTROLLER
// import { Model } from '../models/model';

async function GetAllModels(req: Request, res: Response) {
  // Logic to get all models
  try {
    const ModelFindAll = await Model.find();
    res.status(200).json({ data: ModelFindAll });
  } catch (error) {
    console.error("Error fetching models:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function GetOneModel(req: Request, res: Response) {
  // Logic to get one model by ID
  try {
    const ModelFindOne = await Model.findById(req.params.id);
    res.status(200).json({ data: ModelFindOne });
  } catch (error) {
    console.error("Error fetching model:", error);
    res.status(400).send("Internal Server Error");
    return;
  }
}

async function CreateModel(req: Request, res: Response) {
  // Logic to create a new model
  try {
    const { partName, partStTime, subpieces, pieces, attribute, descrition, operation } = req.body;
    const newModel = new Model({ partName, partStTime, subpieces, pieces, attribute, descrition, operation });
    await newModel.save();
    res.status(201).json({ data: newModel });
  } catch (error) {
    console.error("Error creating model:", error);
    res.status(400).send("Internal Server Error");
  }
}

async function UpdateModel(req: Request, res: Response) {
  // Logic to update a model by ID
  try {
    const { partName, partStTime, subpieces, pieces, attribute, descrition, operation } = req.body;
    const updatedModel = await Model.findByIdAndUpdate(
      req.params.id,
      { partName, partStTime, subpieces, pieces, attribute, descrition, operation },
      { new: true }
    );
    if (!updatedModel) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ data: updatedModel });
  } catch (error) {
    console.error("Error updating model:", error);
    res.status(400).send("Internal Server Error");
  }
}
async function DeleteModel(req: Request, res: Response) {
  // Logic to delete a model by ID
  try {
    const deletedModel = await Model.findByIdAndDelete(req.params.id);
    if (!deletedModel) {
      return res.status(404).json({ message: "Model not found" });
    }
    res.status(200).json({ data: deletedModel });
  } catch (error) {
    console.error("Error deleting model:", error);
    res.status(400).send("Internal Server Error");
  }
}

// Exporting all controllers
export { GetAllAttributes, GetOneAttribute, CreateAttribute, UpdateAttribute, DeleteAttribute, GetAllDescriptions, GetOneDescription, CreateDescription, UpdateDescription, DeleteDescription, GetAllSubPieces, GetOneSubPiece, CreateSubPiece, UpdateSubPiece, DeleteSubPiece, GetAllPieces, GetOnePiece, CreatePiece, UpdatePiece, DeletePiece, GetAllModels, GetOneModel, CreateModel, UpdateModel, DeleteModel };
// export { GetAllAttributes, GetOneAttribute, CreateAttribute, UpdateAttribute, DeleteAttribute, GetAllModels, GetOneModel, CreateModel, UpdateModel, DeleteModel };
