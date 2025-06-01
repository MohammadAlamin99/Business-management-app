
"use client";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import ReactPaginate from "react-paginate";
import { orderListRequest } from "../../../apiRequest/apiRequest";
import Header from "../../../components/Header";

export default function OrdersPage() {
  const ORDERS_PER_PAGE = 6;
  const [data, setData] = useState([]);
  const totalPage = data?.pagination?.totalPages || 0;
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = totalPage;
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    (async () => {
      let result = await orderListRequest(currentPage, ORDERS_PER_PAGE);
      setData(result);
    })();
  }, [currentPage]);

  const orderList = data?.data;
  console.log("Order List:", orderList);

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="main_order__Container w-full">
          <div className="Main_header py-[30px]">
            <Header />
          </div>
          <div className="flex-1 bg-[#292F45] p-[30px] rounded-[20px]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-[50px]">
              <div>
                <h4 className="ibm-font text-[20px] font-medium text-[#F3F4F7] mb-2">
                  Customer Orders
                </h4>
                <p className="popins-font text-[14px] font-normal text-[#9199AD] max-w-[468px]">
                  All the orders which are placed by different customers are
                  showing below with order no.
                </p>
              </div>
              <button className="popins-font text-[16px] font-medium text-[#F3F4F7] bg-[#FF8E29] rounded-[30px] px-6 py-3 hover:bg-[#e67e22] transition-colors self-start md:self-auto">
                Add new product
              </button>
            </div>

            <div className="bg-[#151D32] rounded-[20px] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#353C56]">
                      <th className="ibm-font text-[16px] font-medium text-[#F3F4F7] text-start px-[30px] py-[30px]">
                        Customer
                      </th>
                      <th className="ibm-font text-[16px] font-medium text-[#F3F4F7] text-start px-[30px] py-[30px]">
                        Order ID
                      </th>
                      <th className="ibm-font text-[16px] font-medium text-[#F3F4F7] text-start px-[30px] py-[30px]">
                        Product
                      </th>
                      <th className="ibm-font text-[16px] font-medium text-[#F3F4F7] text-start px-[30px] py-[30px]">
                        Address
                      </th>
                      <th className="ibm-font text-[16px] font-medium text-[#F3F4F7] text-start px-[30px] py-[30px]">
                        Date
                      </th>
                      <th className="ibm-font text-[16px] font-medium text-[#F3F4F7] text-start px-[30px] py-[30px]">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderList?.map((item, id) => (
                      <tr
                        key={id}
                        className="border-b border-[#353C56] last:border-0"
                      >
                        <td className="popins-font text-[14px] font-normal px-[30px] py-[30px]">
                          <div className="flex items-start flex-col gap-[10px]">
                            <span className="text-[#F3F4F7]">
                              {item.full_name}
                            </span>
                            <span className="text-[#9199AD]">
                              {item.phone_number}
                            </span>
                            <span className="text-[#9199AD]">
                              {item.email}
                            </span>
                          </div>
                        </td>
                        <td className="popins-font text-[14px] font-normal text-[#9199AD] px-[30px] py-[30px]">
                          #{item?.order_id}
                        </td>
                        <td className="popins-font text-[14px] font-normal text-[#9199AD] px-[30px] py-[30px]">
                          {item?.order_summary?.map((index, id) => {
                            return (
                              <div key={id} className="">
                                <div className="mb-2.5">
                                  <span className="text-[#9199AD] text-[12px] font-normal">
                                    {index?.product?.title}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 mb-2.5">
                                  <img
                                    src={index?.product?.image}
                                    alt={index?.product_name}
                                    className="w-[60px] h-[60px] rounded bg-[#fff] p-[5px]"
                                  />
                                  <div className="flex flex-col">
                                    <span className="popins-font text-[#9199AD]">TK. {index?.product?.price}</span>
                                    <span className="popins-font text-[#9199AD] text-[12px] font-normal">
                                      QTY : {index?.qty} x
                                    </span>
                                    <span className="popins-font text-[#9199AD]">
                                      Color: {index?.color || "N/A"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                          <span className="popins-font text-[#9199AD] text-[14px] font-normal mr-2.5">
                            Shipping cost : TK. {item?.shipping_cost} 
                          </span>
                          <span className="popins-font text-[#9199AD] text-[14px] font-normal">
                            Total : TK. {item?.total}
                          </span>
                        </td>
                        <td className="popins-font text-[14px] font-normal text-[#9199AD] px-[30px] py-[30px]">
                          {item?.full_address}
                        </td>
                        <td className="popins-font text-[14px] font-normal text-[#9199AD] px-[30px] py-[30px]">
                          {item?.placed_at
                            ? new Date(item.placed_at).toLocaleString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })
                            : "N/A"}
                        </td>
                        <td className="popins-font text-[14px] font-normal text-[#9199AD] px-[30px] py-[30px]">
                          <div className="flex items-center gap-2">
                            <div
                              className={`circle w-[12px] h-[12px] rounded-[50%] 
                                ${item?.order_status === "Pending" ? "bg-yellow-500"
                                  : item?.order_status === "Confirmed" ? "bg-green-500"
                                    : item?.order_status === "Shipped" ? "bg-red-500"
                                      : "bg-red-500"
                                }`}
                            ></div>
                            {item?.order_status}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-[30px] py-[25px] border-t border-[#353C56]">
                <span className="popins-font text-[12px] text-[#9199AD]">
                  Showing 7 of 15 orders
                </span>

                <ReactPaginate
                  breakLabel="..."
                  nextLabel="Next"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  marginPagesDisplayed={1}
                  pageCount={pageCount}
                  previousLabel="Prev"
                  renderOnZeroPageCount={null}
                  containerClassName="flex items-center gap-1 sm:gap-2 cursor-pointer"
                  pageClassName="flex bg-[#353C56] rounded-[50%] aspect-[1] flex items-center justify-center"
                  pageLinkClassName="popins-font px-2 py-1 sm:px-3 sm:py-1 text-[12px] text-[#FF8E29] rounded"
                  activeClassName="bg-[#FF8E29] rounded-[50%] aspect-[1] flex items-center justify-center"
                  activeLinkClassName="popins-font text-[#fff]"
                  previousClassName="flex"
                  previousLinkClassName="popins-font px-2 py-1 sm:px-3 sm:py-1 text-[12px] text-[#9199AD] rounded"
                  nextClassName="flex"
                  nextLinkClassName="popins-font px-2 py-1 sm:px-3 sm:py-1 text-[12px] text-[#FF8E29] rounded"
                  breakClassName="flex"
                  breakLinkClassName="popins-font px-2 py-1 text-[12px] text-[#9199AD]"
                  disabledClassName="opacity-50 cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
