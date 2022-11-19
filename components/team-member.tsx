import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { TeamMember } from "../types/team-member";

interface MemberProps {
  member: TeamMember;
}

export const Member: React.FC<MemberProps> = ({ member }) => {
  return (
    <Link href={`/team/${member.attributes.username}`}>
      <Card sx={{ margin: "1rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="290"
            image={`http://localhost:1337${member.attributes.avatar.data.attributes.url}`}
            alt={member.attributes.avatar.data.attributes.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {member.attributes.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {member.attributes.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
