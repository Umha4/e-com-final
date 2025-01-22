// "use client"; // Ensure this is a Client Component
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import FeatureProducts from "@/components/feature-product"; // Import FeatureProducts component

// // Define the type for the product
// interface Product {
//   title: string;
//   department: string;
//   price: number;
//   discountedPrice: number;
//   image: {
//     asset: {
//       _id: string;
//       url: string;
//     };
//   };
//   colors: string[];
// }

// // Fetch data function
// async function getData() {
//   const query = `
//     *[_type == "product"]{
//       title,
//       department,
//       price,
//       discountedPrice,
//       image{
//         asset->{
//           _id,
//           url
//         }
//       },
//       colors
//     }
//   `;
//   const data = await client.fetch(query);
//   return data;
// }

// export default function FetchFeatureProducts() {
//   const [data, setData] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await getData();
//       setData(result);
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!data || data.length === 0) {
//     return <div>No data available</div>;
//   }

//   // Pass data to FeatureProducts component as props
//   return <FeatureProducts data={data} />;
// }