import { defineType } from "sanity";

export default defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: 'customerEmail',
      type: 'string',
      title: 'Customer Email',
    },
    {
      name: 'customerName',
      type: 'string',
      title: 'Customer Name',
    },
    { name: "items", title: "Items", type: "array", of: [{ type: "object", fields: [
        { name: "name", type: "string" },
        { name: "price", type: "number" },
        { name: "quantity", type: "number" },
        { name: "image", type: "string" }
      ]}]
    },
    {
      name: 'totalAmount',
      type: 'number',
      title: 'Total Amount',
    },
    {
      name: 'shippingAddress',
      type: 'object',
      fields: [
        { name: 'line1', type: 'string' },
        { name: 'city', type: 'string' },
        { name: 'postal_code', type: 'string' },
        { name: 'country', type: 'string' },
      ],
    },
    {
      name: 'stripeSessionId',
      type: 'string',
      title: 'Stripe Session ID',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Order Status',
    },
    {
        name: "paymentStatus",
        title: "Payment Status",
        type: "string",
        options: {
          list: [
            { title: "Unpaid", value: "unpaid" },
            { title: "Paid", value: "paid" },
          ],
        },
      },
      {
        name: "orderId",
        title: "Order ID",
        type: "string",
      },
    {
        name: "createdAt",
        title: "Created At",
        type: "datetime",
        options: {
          dateFormat: "YYYY-MM-DD",
          timeFormat: "HH:mm",
          calendarTodayLabel: "Today",
        },
    }
  ],
});
