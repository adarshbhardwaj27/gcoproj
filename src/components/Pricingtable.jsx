import React from "react";

const Pricingtable = () => {
  return (
    <>
      <div className="maintable border-black border-2 rounded-lg w-6/12 h-3/4 mx-5">
        <h1 className="flex justify-center items-center h-7 bg-black text-white font-bold">
          Pricing Table
        </h1>
        <div className="content flex h-full flex-col">
          <div className="top_sec h-3/4 flex w-full justify-evenly items-center  ">
            <div className="top_left_cont w-4/12 h-full  flex  items-center">
              <div className="h-3/5 w-full flex flex-col justify-evenly">
                <div className="button_left1  bg-white border-black border-2 rounded-lg p-1">
                  <select
                    name="company"
                    id="company"
                    defaultValue="default"
                    className="md:w-full w-1/2  bg-white"
                  >
                    <option value="default" disabled>
                      Select company
                    </option>
                    <option value="BP">BP</option>
                    <option value="Seplat">Seplat</option>
                    <option value="RefiningNz">Refining Nz</option>
                  </select>
                </div>
                <div
                  className="button_left2 border-black border-2 rounded-lg p-1 bg-white"
                  defaultValue="default"
                >
                  <select name="margin" id="margin" className="w-full bg-white">
                    <option value="default" disabled>
                      Margin
                    </option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
                <div
                  className="button_left3 border-black border-2 rounded-lg p-1 bg-white"
                  defaultValue="default"
                >
                  <select name="month" id="month" className="w-full bg-white">
                    <option value="default" disabled>
                      Month
                    </option>
                    <option value="20">May</option>
                    <option value="50">April</option>
                    <option value="100">March</option>
                  </select>
                </div>
                <div
                  className="button_left4 border-black border-2 rounded-lg p-1 bg-white"
                  defaultValue="default"
                >
                  <select name="year" id="year" className="w-full bg-white">
                    <option value="default" disabled>
                      Year
                    </option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="top_right_cont">
              <table className="border-collapse border border-black w-11/12 ">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="border border-black px-4 py-2">Company</th>
                    <th className="border border-black px-4 py-2">91</th>
                    <th className="border border-black px-4 py-2">95</th>
                    <th className="border border-black px-4 py-2">Diesel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black px-4 py-2">Super</td>
                    <td className="border border-black px-4 py-2">12</td>
                    <td className="border border-black px-4 py-2">20</td>
                    <td className="border border-black px-4 py-2">8</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">Medium</td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6   border-black border-2 bg-white"
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6   border-black border-2 bg-white"
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6   border-black border-2 bg-white"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">ABC</td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6  border-black border-2 bg-white"
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6  border-black border-2 bg-white"
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6  border-black border-2 bg-white"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">XYZ</td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6   border-black border-2 bg-white"
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6   border-black border-2 bg-white"
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6   border-black border-2 bg-white"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">PQR</td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6   border-black border-2 bg-white"
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6   border-black border-2 bg-white"
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6   border-black border-2 bg-white"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-black px-4 py-2">LMN</td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6   border-black border-2 bg-white"
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6   border-black border-2 bg-white"
                      />
                    </td>
                    <td className="border border-black px-4 py-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        className="w-6   border-black border-2 bg-white"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bottom_sec">
            <div className="button-bottom flex flex-row-reverse mx-7 ">
              <button
                type="button"
                className="border-black border-2 rounded-lg p-2 mx-5 bg-black text-white w-2/6 "
              >
                Apply Pricing
              </button>
              <button
                type="button"
                className="border-black border-2 rounded-lg p-2 mx-5 bg-black text-white w-2/6 "
              >
                Next
              </button>
            </div>
          </div>
          {/* <div className="leftcol w-2/6 flex items-center justify-center">
            <div className="h-3/5 flex flex-col justify-between">
              <div className="button_left1 bg-white border-black border-2 rounded-lg p-1">
                <select
                  name="company"
                  id="company"
                  defaultValue="default"
                  className="md:w-full w-1/2  bg-white"
                >
                  <option value="default" disabled>
                    Select company
                  </option>
                  <option value="BP">BP</option>
                  <option value="Seplat">Seplat</option>
                  <option value="RefiningNz">Refining Nz</option>
                </select>
              </div>
              <div
                className="button_left2 border-black border-2 rounded-lg p-1 bg-white"
                defaultValue="default"
              >
                <select name="margin" id="margin" className="w-full bg-white">
                  <option value="default" disabled>
                    Margin
                  </option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div
                className="button_left3 border-black border-2 rounded-lg p-1 bg-white"
                defaultValue="default"
              >
                <select name="month" id="month" className="w-full bg-white">
                  <option value="default" disabled>
                    Month
                  </option>
                  <option value="20">May</option>
                  <option value="50">April</option>
                  <option value="100">March</option>
                </select>
              </div>
              <div
                className="button_left4 border-black border-2 rounded-lg p-1 bg-white"
                defaultValue="default"
              >
                <select name="year" id="year" className="w-full bg-white">
                  <option value="default" disabled>
                    Year
                  </option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>
            </div>
          </div> */}
          {/* <div className="right-col w-4/6 h-3/4 flex flex-col justify-center mt-5 ">
            <table className="border-collapse border border-black w-11/12 my-5 ">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="border border-black px-4 py-2">Company</th>
                  <th className="border border-black px-4 py-2">91</th>
                  <th className="border border-black px-4 py-2">95</th>
                  <th className="border border-black px-4 py-2">Diesel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black px-4 py-2">Super</td>
                  <td className="border border-black px-4 py-2">12</td>
                  <td className="border border-black px-4 py-2">20</td>
                  <td className="border border-black px-4 py-2">8</td>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-2">Medium</td>
                  <td className="border border-black px-4 py-2">10</td>
                  <td className="border border-black px-4 py-2">15</td>
                  <td className="border border-black px-4 py-2">4</td>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-2">ABC</td>
                  <td className="border border-black px-4 py-2">15</td>
                  <td className="border border-black px-4 py-2">25</td>
                  <td className="border border-black px-4 py-2">10</td>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-2">XYZ</td>
                  <td className="border border-black px-4 py-2">18</td>
                  <td className="border border-black px-4 py-2">30</td>
                  <td className="border border-black px-4 py-2">12</td>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-2">PQR</td>
                  <td className="border border-black px-4 py-2">22</td>
                  <td className="border border-black px-4 py-2">35</td>
                  <td className="border border-black px-4 py-2">14</td>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-2">LMN</td>
                  <td className="border border-black px-4 py-2">17</td>
                  <td className="border border-black px-4 py-2">28</td>
                  <td className="border border-black px-4 py-2">9</td>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-2">LMN</td>
                  <td className="border border-black px-4 py-2">17</td>
                  <td className="border border-black px-4 py-2">28</td>
                  <td className="border border-black px-4 py-2">9</td>
                </tr>
                <tr>
                  <td className="border border-black px-4 py-2">LMN</td>
                  <td className="border border-black px-4 py-2">17</td>
                  <td className="border border-black px-4 py-2">28</td>
                  <td className="border border-black px-4 py-2">9</td>
                </tr>
              </tbody>
            </table>
            <div className="right-bottom flex flex-row-reverse mx-7 ">
              <button
                type="button "
                className="border-black border-2 rounded-lg p-3 mx-5 bg-black text-white w-2/6 "
              >
                Apply Pricing
              </button>
              <button
                type="button "
                className="border-black border-2 rounded-lg p-3 mx-5 bg-black text-white w-2/6 "
              >
                Next
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Pricingtable;
