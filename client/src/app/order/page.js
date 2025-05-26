"use client";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Image from "next/image";
import userAvatar from "../../../assets/image/userAvatar.png";
import ReactPaginate from "react-paginate";
import { orderListRequest } from "../../../apiRequest/apiRequest";

// Mock data 
const mockOrders = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  customer: `Customer ${i + 1}`,
  orderId: `ORD-${String(i + 1).padStart(3, '0')}`,
  product: `Product ${String.fromCharCode(65 + (i % 5))}`,
  revenue: `$${(100 + (i * 25)).toFixed(2)}`,
  status: ['Shipped', 'Processing', 'Delivered', 'Cancelled'][i % 4],
  avatar: userAvatar
}));

const ORDERS_PER_PAGE = 3;

export default function OrdersPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(mockOrders.length / ORDERS_PER_PAGE);
  const offset = currentPage * ORDERS_PER_PAGE;
  const currentOrders = mockOrders.slice(offset, offset + ORDERS_PER_PAGE);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const getStatusStyles = (status) => {
    const base = "w-[12px] h-[12px] rounded-[50%]";
    switch (status.toLowerCase()) {
      case 'shipped': return `${base} bg-[#27D095]`;
      case 'processing': return `${base} bg-[#FFC107]`;
      case 'delivered': return `${base} bg-[#2196F3]`;
      case 'cancelled': return `${base} bg-[#F44336]`;
      default: return `${base} bg-[#9199AD]`;
    }
  };

  useEffect(()=>{
    (async()=>{
      let data = await orderListRequest(currentPage, ORDERS_PER_PAGE);
      console.log(data);
    })()
  })

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 mt-[50px] bg-[#292F45] p-[30px] rounded-[20px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-[50px]">
          <div>
            <h4 className="ibm-font text-[20px] font-medium text-[#F3F4F7] mb-2">
              Data table records
            </h4>
            <p className="popins-font text-[14px] font-normal text-[#9199AD] max-w-[590px]">
              All the users that are registered on your store are displayed in data tables with some
              of their basic information and history.
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
                  <th className="ibm-font text-[16px] font-medium text-[#F3F4F7] text-start px-[30px] py-[30px]">Customer</th>
                  <th className="ibm-font text-[16px] font-medium text-[#F3F4F7] text-start px-[30px] py-[30px]">Order ID</th>
                  <th className="ibm-font text-[16px] font-medium text-[#F3F4F7] text-start px-[30px] py-[30px]">Product</th>
                  <th className="ibm-font text-[16px] font-medium text-[#F3F4F7] text-start px-[30px] py-[30px]">Revenue</th>
                  <th className="ibm-font text-[16px] font-medium text-[#F3F4F7] text-start px-[30px] py-[30px]">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-[#353C56] last:border-0">
                    <td className="popins-font text-[14px] font-normal px-[30px] py-[30px]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={order.avatar}
                          width={40}
                          height={40}
                          className="rounded-full"
                          alt={`${order.customer}'s avatar`}
                        />
                        <span className="text-[#F3F4F7]">{order.customer}</span>
                      </div>
                    </td>
                    <td className="popins-font text-[14px] font-normal text-[#9199AD] px-[30px] py-[30px]">{order.orderId}</td>
                    <td className="popins-font text-[14px] font-normal text-[#9199AD] px-[30px] py-[30px]">{order.product}</td>
                    <td className="popins-font text-[14px] font-normal text-[#9199AD] px-[30px] py-[30px]">{order.revenue}</td>
                    <td className="popins-font text-[14px] font-normal text-[#9199AD] px-[30px] py-[30px]">
                      <div className="flex items-center gap-2">
                        <span className={getStatusStyles(order.status)} />
                        {order.status}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-[30px] py-[25px] border-t border-[#353C56]">
            <span className="popins-font text-[12px] text-[#9199AD]">
              Showing {offset + 1} to {Math.min(offset + ORDERS_PER_PAGE, mockOrders.length)} of {mockOrders.length} orders
            </span>

            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              pageCount={pageCount}
              previousLabel="Previous"
              renderOnZeroPageCount={null}
              containerClassName="flex items-center gap-1 sm:gap-2 cursor-pointer"
              pageClassName="flex"
              pageLinkClassName="px-2 py-1 sm:px-3 sm:py-1 text-[12px] text-[#9199AD] hover:text-[#F3F4F7] rounded"
              activeClassName="bg-[#FF8E29] rounded"
              activeLinkClassName="text-[#F3F4F7]"
              previousClassName="flex"
              previousLinkClassName="px-2 py-1 sm:px-3 sm:py-1 text-[12px] text-[#9199AD] hover:text-[#F3F4F7] rounded"
              nextClassName="flex"
              nextLinkClassName="px-2 py-1 sm:px-3 sm:py-1 text-[12px] text-[#9199AD] hover:text-[#F3F4F7] rounded"
              breakClassName="flex"
              breakLinkClassName="px-2 py-1 text-[12px] text-[#9199AD]"
              disabledClassName="opacity-50 cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

