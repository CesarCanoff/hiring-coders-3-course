import React from "react";
import api from "../service/apiInterna.json";
import { GetServerSideProps } from "next";

interface IProducts {
  id: number;
  title: string;
}

interface ProductsProps {
  products: IProducts[];
}

export default function Home({ products }: ProductsProps) {
  return (
    <div>
      <h1>Products</h1>
      <section>
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  ProductsProps
> = async () => {
  const response = await api.get("http://localhost:3333/products");

  const products = await response.data;

  return {
    props: {
      products,
    },
  };
};

// import React from "react";
// import { GetStaticProps, GetStaticProps } from "next";

// import api from "../service/apiInterna.json";

// import { Container } from "../styles/Dashboard/styles";

// interface ICategories {
//   id: number;
//   title: string;
// }

// interface CategoryProps {
//   categories: ICategories[];
// }

// export default function categories({ categories }: CategoryProps) {
//   return (
//     <Container>
//       <h1>Categorias</h1>
//       <section>
//         <ul>
//           {categories.map((category) => {
//             return <li key={category.id}>{category.title}</li>;
//           })}
//         </ul>
//       </section>
//     </Container>
//   );
// }

// export const getStaticProps: GetStaticProps<CategoryProps> = async () => {
//   const response = await api.get("http://localhost:3333/categories");

//   const categories = await response.data

//   return {
//     props: {
//       categories,
//     },
//     revalidate: 5,
//   };
// };
