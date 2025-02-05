import { Rule } from "@sanity/types";
const categories = {
    name: 'categories',
    type: 'document',
    title: 'Categories',
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
        options: {
          hotspot: true, // Enable image cropping
        }
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
            { title: "XS (Extra Small)", value: "XS" },
            { title: "S (Small)", value: "S" },
            { title: "M (Medium)", value: "M" },
            { title: "L (Large)", value: "L" },
            { title: "XL (Extra Large)", value: "XL" },
            { title: "XXL (2XL)", value: "XXL" },
            { title: "XXXL (3XL)", value: "XXXL" }
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
        options: {
            list: [
              { title: "Men's", value: "men" },
              { title: "Women's", value: "women" },
            ],
        }
      },
      {
          name: "color",
          title: "Color",
          type: "array",
          of: [{ type: "string" }],
        
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
      {
        name: "slug",
        type: "slug",
        title: "Slug",
        options: {
          source: "name",
        }
    }
]
  
  };
  export default categories;