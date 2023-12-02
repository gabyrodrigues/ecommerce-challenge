import { Link } from "react-router-dom";
import { Flex, Group } from "@mantine/core";
import logo from "@assets/logo.svg";
import { StyledButton } from "@components/Button";
import { IconHeartFilled, IconShoppingCartFilled } from "@tabler/icons-react";

export function Menu() {
  return (
    <Flex className="p-4 bg-base-mainBg justify-between">
      <Link to="/">
        <img
          src={logo}
          alt="Logo Acme Inc."
          className="w-32"
        />
      </Link>

      <Group>
        <StyledButton variant="outline">
          <IconHeartFilled size={24} />
        </StyledButton>
        <StyledButton variant="outlineSecondary">
          <IconShoppingCartFilled size={24} />
        </StyledButton>
        <StyledButton className="px-5">Login</StyledButton>
      </Group>
    </Flex>
  );
}
