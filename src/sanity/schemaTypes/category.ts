import { Rule } from "@sanity/types";
const category = {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule: Rule) => Rule.required().error('Product name is required'),
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        validation: (Rule: Rule) =>
          Rule.max(500).warning('Description should be less than 500 characters'),
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'sizes',
        type: 'array',
        title: 'Sizes',
        of: [{ type: 'string' }],
        options: {
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
            ]
        },
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
        validation: (Rule: Rule) =>
          Rule.min(0).max(5).error('Rating must be between 0 and 5'),
      },
      {
        name: 'stock',
        type: 'number',
        title: 'Stock',
        validation: (Rule: Rule) =>
          Rule.required()
            .min(0)
            .error('Stock must be a positive number or zero'),
      },
      {
        name: 'discount',
        type: 'number',
        title: 'Discount (%)',
        validation: (Rule: Rule) =>
          Rule.min(0)
            .max(100)
            .error('Discount must be between 0% and 100%'),
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        validation: (Rule: Rule) => Rule.required().error('Category is required'),
      },
      {
        name: 'color',
        type: 'array',
        title: 'Colors',
        of: [{ type: 'string' }],
      },
      {
        name: 'details',
        type: 'text',
        title: 'Details',
        validation: (Rule: Rule) =>
          Rule.max(1000).warning('Details should be less than 1000 characters'),
      },
      {
        name: 'style',
        type: 'string',
        title: 'Style',
      },
      {
        name: 'tag',
        type: 'string',
        title: 'Tag',
        description: 'A keyword or phrase to group products',
      },
    ],
  };
  export default category;