"use client";
import React from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import { useState } from "react";
import image from "../../../assests/image/1.png";
import Image from "next/image";

const Page = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [entries, setEntries] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const allOrders = [
    {
      id: 1,
      image: image,
      name: "Man shoes",
      status: "Processing",
      size: "8",
      color: "Black & white",
      articleNumber: "1756457",
      units: 1,
      price: 18,
    },
    {
      id: 2,
      image: image,
      name: "Fancy watch",
      status: "Processing",
      size: "35mm",
      color: "Blue",
      articleNumber: "5476182",
      units: 1,
      price: 10,
    },
    {
      id: 3,
      image: image,
      name: "Ledis side bag",
      status: "Shipped",
      size: "22cm x 18cm",
      color: "Brown",
      articleNumber: "7451725",
      units: 1,
      price: 13,
    },
  ];

  const filteredOrders = allOrders.filter(
    (order) =>
      order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.articleNumber.includes(searchTerm) ||
      order.color.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalEntries = filteredOrders.length;
  const totalPages = Math.ceil(totalEntries / entries);
  const startIndex = (currentPage - 1) * entries;
  const endIndex = Math.min(startIndex + entries, totalEntries);
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`home_page_wrapper flex`}>
        <div className={`Left_content bg-white ${isOpen ? "active" : ""}`}>
          <Sidebar />
        </div>
        <div className={`Right_content ${isOpen ? "" : "active_width"}`}>
          <div className="p-4">
            <h1 className="text-xl font-bold mb-4 text-gray-500">Datatable order history</h1>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="flex items-center mb-2 md:mb-0">
                <span className="mr-2">Show</span>
                <select
                  className="border rounded px-2 py-1 border-gray-300 focus:outline-none"
                  value={entries}
                  onChange={(e) => {
                    setEntries(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <span className="ml-2">entries</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">Search:</span>
                <input
                  type="text"
                  className="border rounded px-2 py-1 border-gray-300 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-t border-b border-gray-300">
                    <th className="p-2 text-left">Product</th>
                    <th className="p-2 text-left">Order status</th>
                    <th className="p-2 text-left">Size</th>
                    <th className="p-2 text-left">Color</th>
                    <th className="p-2 text-left">Order</th>
                    <th className="p-2 text-left">Units</th>
                    <th className="p-2 text-left">Price</th>
                    <th className="p-2 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {currentOrders.length > 0 ? (
                    currentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-300">
                        <td className="p-2">
                          <Image
                            src={order.image}
                            alt={order.name}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </td>
                        <td className="p-2">
                          <div>{order.name}</div>
                          <div
                            className={`text-sm ${
                              order.status === "Processing"
                                ? "text-blue-500"
                                : "text-green-500"
                            }`}
                          >
                            • {order.status}
                          </div>
                        </td>
                        <td className="p-2">{order.size}</td>
                        <td className="p-2">{order.color}</td>
                        <td className="p-2">{order.articleNumber}</td>
                        <td className="p-2">{order.units}</td>
                        <td className="p-2">${order.price}</td>
                        <td className="p-2">
                          <button className="p-1 rounded-full hover:bg-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="p-4 text-center text-gray-500">
                        No orders found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-4">
              <div>
                Showing {startIndex + 1} to {endIndex} of {totalEntries} entries
                {searchTerm &&
                  totalEntries < allOrders.length &&
                  ` (filtered from ${allOrders.length} total entries)`}
              </div>

              {totalPages > 1 && (
                <div className="flex mt-2 md:mt-0">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded mr-1 disabled:opacity-50"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`px-3 py-1 border rounded mx-1 ${
                          currentPage === page ? "bg-green-600 text-white" : ""
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border rounded ml-1 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
