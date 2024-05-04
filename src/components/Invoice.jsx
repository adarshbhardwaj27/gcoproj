import React from "react";

const Invoice = () => {
  return (
    <>
      <div className="invoice border-black border-2 rounded-lg w-2/5 h-1/2 md:h-2/6  ">
        <h1 className="flex justify-center items-center h-1/8 bg-black text-white font-bold">
          Invoice
        </h1>
        <div className="bundlewrap h-5/6 flex items-center justify-center">
          <div className="bundle flex flex-wrap justify-center gap-4">
            <label className="flex items-center flex-wrap">
              Select Segment:{" "}
            </label>
            <select
              name="invoice"
              id="invoice"
              defaultValue="default"
              className="border-black border-2 rounded-lg p-1 bg-white"
            >
              <option value="default" disabled>
                None
              </option>
              <option value="Super">Super</option>
              <option value="Seplat">Seplat</option>
              <option value="RefiningNz">Refining Nz</option>
            </select>
            <button
              type="button"
              className="border-black border-2 rounded-lg p-2 mx-5 bg-black text-white"
            >
              Create and Send Invoice
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
