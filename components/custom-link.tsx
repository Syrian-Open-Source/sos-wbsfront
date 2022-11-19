import { ListItem, Typography } from "@mui/material";
import Link from "next/link";

interface CustomLinkProps {
  children: any;
  href: string;
  variant?: any;
  color?: string;
  fontWeight?: string;
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  href,
  variant,
  color,
  fontWeight,
}) => {
  return (
    <ListItem>
      <Link href={href}>
        <Typography
          variant={variant ? variant : "body2"}
          color={color ? color : "primary.A100"}
          fontWeight={fontWeight ? fontWeight : "600"}
          className="nav-link"
        >
          {children}
        </Typography>
      </Link>
    </ListItem>
  );
};
