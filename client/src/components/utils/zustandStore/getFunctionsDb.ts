import axios from "axios";
import { useDbObjectStore } from "./dbObjectStore";
import { useMessageStore } from "./messageStore";



export const getAllDbData = {
getAttributes : async () => {
  await axios
    .get("http://localhost:5000/attributes")
    .then((res) => {
      const data = res.data;
      useDbObjectStore.getState().addAttribute(data); 
    })
    .catch((err) => {
      console.log("Error fetching data:", err);
      useMessageStore.getState().setMessage({ type: "error", message: err }); // Set error message in the store
    });
},
getDescriptions : async () => {
  await axios
    .get("http://localhost:5000/descriptions")
    .then((res) => {
      const data = res.data;
      useDbObjectStore.getState().addDescription(data); // Update the store with the fetched data
    })
    .catch((err) => {
      console.log("Error fetching data:", err);
      useMessageStore.getState().setMessage({ type: "error", message: err.message }); // Set error message in the store
    });
},
getPiece : async () => {
    await axios
      .get("http://localhost:5000/pieces")
      .then((res) => {
        const data = res.data;
        useMessageStore.getState().setMessage({ type: "success", message: "Pieces fetched successfully" });
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
        useMessageStore.getState().setMessage({ type: "error", message: err.message }); // Set error message in the store
      });
  },
  getSubPiecec : async () => {
    await axios
      .get("http://localhost:5000/pieces")
      .then((res) => {
        const data = res.data;
        useDbObjectStore.getState().addPiece(data); // Update the store with the fetched data
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }}
