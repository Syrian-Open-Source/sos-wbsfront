import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
} from "@mui/icons-material";
import { IconButton, Link } from "@mui/material";
import { Stack } from "@mui/system";

const SocialMedia = {
  facebook: "https://facebook.com/hasanahmadsw",
  instagram: "https://instagram.com/hasanahmadsw",
  linkedin: "https://linkedin.com/in/hasan-ahmadl/",
  github: "https://github.com/hasanahmadsw",
  telegtam: "https://t.me/hasanahmadsw",
};

interface IconButtonProps {
  children: any;
  href: string;
}
const IcoButton: React.FC<IconButtonProps> = ({ children, href }) => {
  return (
    <Link href={href} target="_blank">
      <IconButton
        sx={{
          borderRadius: "6px",
          background: "transparent",
          padding: "6px",
        }}
      >
        {children}
      </IconButton>
    </Link>
  );
};

export const SocialContact = () => {
  return (
    <Stack spacing={2} direction="row">
      {SocialMedia.facebook ? (
        <IcoButton href={SocialMedia.facebook}>
          <Facebook sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}

      {SocialMedia.instagram ? (
        <IcoButton href={SocialMedia.instagram}>
          <Instagram sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}
      {SocialMedia.github ? (
        <IcoButton href={SocialMedia.github}>
          <GitHub sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}
      {SocialMedia.linkedin ? (
        <IcoButton href={SocialMedia.linkedin}>
          <LinkedIn sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}
      {SocialMedia.telegtam ? (
        <IcoButton href={SocialMedia.telegtam}>
          <Telegram sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}
    </Stack>
  );
};
