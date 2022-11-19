interface MemberAvatar {
  data: {
    id: string;
    attributes: {
      name: string;
      url: string;
    };
  };
}

interface MemberAttributes {
  username: string;
  name: string;
  title: string;
  email: string;
  bio: string;
  whatsapp?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  telegram?: string;
  github?: string;
  avatar: MemberAvatar;
}
export interface TeamMember {
  id: string;
  attributes: MemberAttributes;
}
