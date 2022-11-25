import "./AddNewInventoryItem.scss";
import React from "react";
import ArrowBack from "../../../assets/Icons/Icons/arrow_back-24px.svg";

const AddNewInventoryItem = () => {
  return (
    <div className="addInventoryItem">
      <div className="addInventoryItem__caption">
        <button className="addInventoryItem__arrow">
          <img src={ArrowBack} alt="Blue back arrow to the left of the title" />
        </button>
        <h1 className="addInventoryItem__title">Add New Inventory Item</h1>
      </div>

      <form className="addInventoryItem__form" onSubmit={handleSubmit}>
        <div className="itemDetail">
          <h3 className="addInventoryItem__subtitle">Item Details</h3>
          <label htmlFor="itemName" className="addInventoryItem__label">
            Item Name
          </label>

          <textarea
            className="addInventoryItem__input"
            id="itemName"
            type="text"
            rows="1"
            cols="30"
            placeholder="Item Name"
          ></textarea>

          <label htmlFor="descripition" className="addInventoryItem__label">
            Description
          </label>

          <textarea
            className="addInventoryItem__input-description"
            id="description"
            type="text"
            rows="7"
            cols="30"
            placeholder="Please enter a brief item description..."
          ></textarea>

          <label htmlFor="category" className="addInventoryItem__label">
            Category
          </label>

          <select
            className="addInventoryItem__input-select"
            id="category"
            type="text"
            rows="1"
            cols="30"
            placeholder="Please select"
          ></select>
        </div>

        <div className="itemAvailability">
          <h3 className="addInventoryItem__subtitle">Item Availability</h3>
          <p className="addInventoryItem__status">Status</p>

          <div className="addInventoryItem__status-position">
            <div>
              <input
                className="addInventoryItem__inStock"
                id="inStock"
                type="radio"
              ></input>
              <label
                htmlFor="inStock"
                className="addInventoryItem__label-radio"
              >
                In Stock
              </label>
            </div>

            <div className="outOfStock">
              <input
                className="addInventoryItem__outOfStock"
                id="outOfStock"
                type="radio"
              ></input>
              <label
                htmlFor="outOfStock"
                className="addInventoryItem__label-radio"
              >
                Out of Stock
              </label>
            </div>
          </div>

          <label
            htmlFor="quantity"
            className="addInventoryItem__label-quantity"
          >
            Quantity
          </label>

          <textarea
            className="addInventoryItem__input-quantity"
            id="quantity"
            type="text"
            rows="1"
            cols="30"
            placeholder="0"
          ></textarea>

          <label htmlFor="warehouse" className="addInventoryItem__label">
            Warehouse
          </label>

          <select
            className="addInventoryItem__input-select"
            id="warehouse"
            type="text"
            rows="1"
            cols="30"
            placeholder="Please select"
          ></select>
        </div>

        <div className="addInventoryItem__button">
          <button className="editInventoryItem__button-cancel" type="submit">
            Cancel
          </button>
          <button className="editInventoryItem__button-save" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewInventoryItem;
