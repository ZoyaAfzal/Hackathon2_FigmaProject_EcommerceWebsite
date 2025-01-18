import { Rule } from "@sanity/types";



const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
  /*   options: {
        list: [
          { title: "UK 6 (EU 40)", value: "6" },
          { title: "UK 6.5", value: "6.5" },
          { title: "UK 7", value: "7" },
          { title: "UK 7.5", value: "7.5" },
          { title: "UK 8", value: "8" },
          { title: "UK 8.5", value: "8.5" },
          { title: "UK 9", value: "9" },
          { title: "UK 9.5", value: "9.5" },
          { title: "UK 10", value: "10" },
          { title: "UK 10.5", value: "10.5" },
          { title: "UK 11", value: "11" },
          { title: "UK 11.5", value: "11.5" },
          { title: "UK 12", value: "12" },
        ],
      }, */
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: Rule) =>
        Rule.min(0).max(5).error("Rating must be between 0 and 5"),
    },
    {
      name: "stockQuantity",
      title: "Stock Quantity",
      type: "number",
    },
    {
      name: "discount",
      title: "Discount",
      type: "number",
    },
    {
      name: "department",
      title: "Department",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "totalOrders",
      title: "Total Orders",
      type: "number",
    },
    {
      name: "brand",
      title: "Brand",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "color",
      title: "Color",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "style",
      title: "Style",
      type: "string",
    },
    {
      name: "tag",
      title: "Tag",
      type: "string",
    },
    {
      name: "id",
      title: "ID",
      type: "string",
    },
  ],
};
 export default product;