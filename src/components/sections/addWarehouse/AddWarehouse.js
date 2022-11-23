import React, { useState, useEffect } from "react";
import WarehouseForms from "../../atoms/warehouseForms/WarehouseForms";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddWarehouse() {
  const [warehouseDetails, setWarehouseDetails] = useState(null);

  useEffect(() => {
    if (warehouseDetails !== null) {
      const post = async () => {
        try {
          await axios.post("http://localhost:8080/warehouse", {
            warehouse_name: warehouseDetails.warehouse_name,
            address: warehouseDetails.address,
            city: warehouseDetails.city,
            country: warehouseDetails.country,
            contact_name: warehouseDetails.contact_name,
            contact_position: warehouseDetails.contact_position,
            contact_phone: warehouseDetails.contact_phone,
            contact_email: warehouseDetails.contact_email,
          });
          toast.success("Warehouse added succesfully!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: "colored",
            hideProgressBar: true,
            autoClose: 1000,
          });
          await axios.get("http://localhost:8080/warehouse");
        } catch {
          console.log("error");
        }
      };
      post();
    }
  }, [warehouseDetails]);

  return (
    <>
      <WarehouseForms
        title="Add New Warehouse"
        setWarehouseDetails={setWarehouseDetails}
        warehouseDetails={warehouseDetails}
      />
      <ToastContainer />
    </>
  );
}

export default AddWarehouse;
