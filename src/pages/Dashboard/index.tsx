import { useEffect, useState } from "react";
import { Container, Loader, SimpleGrid } from "@mantine/core";

import { Menu } from "@components/Menu";
import { ProductCard, ProductProps } from "@components/ProductCard";
import { handleConvertPriceToBRL } from "@utils/formatCurrency";
import { api } from "@services/api";

export default function Dashboard() {
  const [productsList, setProductsList] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetProductsFromApi = async () => {
    try {
      setIsLoading(true);

      const response = await api.get("/products");
      setProductsList(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetProductsFromApi();
  }, []);

  return (
    <>
      <Menu />

      <Container className="max-w-screen-xl py-16 text-center">
        {isLoading ? (
          <Loader color="pink" />
        ) : (
          <SimpleGrid
            cols={4}
            spacing="xl">
            {productsList.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                alt={product.name}
                name={product.name}
                price={handleConvertPriceToBRL(+product.price)}
              />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </>
  );
}
