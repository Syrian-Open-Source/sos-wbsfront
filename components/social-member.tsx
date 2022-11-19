import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
} from "@mui/icons-material";
import { IconButton, Link } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { TeamMember } from "../types/team-member";

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

interface SocialMemberProps {
  member: TeamMember;
}

export const SocialMember: React.FC<SocialMemberProps> = ({ member }) => {
  return (
    <Stack spacing={2} direction="row">
      {member.attributes.facebook ? (
        <IcoButton href={member.attributes.facebook}>
          <Facebook sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}

      {member.attributes.instagram ? (
        <IcoButton href={member.attributes.instagram}>
          <Instagram sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}
      {member.attributes.github ? (
        <IcoButton href={member.attributes.github}>
          <GitHub sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}
      {member.attributes.linkedin ? (
        <IcoButton href={member.attributes.linkedin}>
          <LinkedIn sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}
      {member.attributes.telegram ? (
        <IcoButton href={member.attributes.telegram}>
          <Telegram sx={{ fontSize: "2rem" }} color="primary" />
        </IcoButton>
      ) : (
        ""
      )}
    </Stack>
  );
};
