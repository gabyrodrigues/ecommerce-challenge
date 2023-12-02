import { Grid } from "@mantine/core";
import { Menu } from "../../components/Menu";
import { ProductCard } from "@components/ProductCard";

export default function Dashboard() {
  return (
    <>
      <Menu />

      <Grid>
        <ProductCard
          id="lsfdjk"
          image={"https://picsum.photos/260/160"}
          name={"Grampo romântico"}
          price={"R$ 100,00"}
        />
      </Grid>
    </>
  );
}
