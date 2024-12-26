"use client";
import React from "react"
import { Table } from "flowbite-react";

function App() {
  return (
    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {[
            { name: 'Apple MacBook Pro 17"', color: "Silver", category: "Laptop", price: "$2999" },
            { name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", price: "$1999" },
            { name: "Magic Mouse 2", color: "Black", category: "Accessories", price: "$99" },
            { name: "Google Pixel Phone", color: "Gray", category: "Phone", price: "$799" },
            { name: "Apple Watch 5", color: "Red", category: "Wearables", price: "$999" },
          ].map((product, index) => (
            <Table.Row key={index} className="bg-white border-b hover:bg-gray-50">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                {product.name}
              </Table.Cell>
              <Table.Cell>{product.color}</Table.Cell>
              <Table.Cell>{product.category}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default App;
