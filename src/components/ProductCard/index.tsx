import { StyledButton } from "@components/Button";
import { Badge, Card, Group, Image, Text, Tooltip } from "@mantine/core";
import { IconHeartFilled, IconShoppingCartFilled } from "@tabler/icons-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface StyledButtonProps {
  className?: string;
  id: string;
  children?: ReactNode;
  image: string;
  name: string;
  price: string;
}

export function ProductCard(props: StyledButtonProps) {
  const { className, id, image, name, price } = props;

  return (
    <Card
      padding="lg"
      radius="md"
      className={`${className} bg-base-lightGray`}>
      <Card.Section>
        <Link to={`/products/${id}`}>
          <Image
            src={image}
            height={160}
            alt="Norway"
          />
        </Link>
      </Card.Section>

      <Link to={`/products/${id}`}>
        <Text
          className="text-center font-bold text-lg mt-5"
          fw={600}>
          {name}
        </Text>
      </Link>

      <Group
        className="mt-8"
        justify="space-between">
        <Badge className="text-base-darkSecondary bg-base-secondary bg-opacity-30 rounded-lg p-3 text-sm">
          {price}
        </Badge>

        <Group>
          <Tooltip label="Favoritar">
            <StyledButton variant="outline">
              <IconHeartFilled size={24} />
            </StyledButton>
          </Tooltip>
          <Tooltip label="Add ao Carrinho">
            <StyledButton variant="outlineSecondary">
              <IconShoppingCartFilled size={24} />
            </StyledButton>
          </Tooltip>
        </Group>
      </Group>
    </Card>
  );
}
