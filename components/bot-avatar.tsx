import { Avatar, AvatarImage } from "./ui/avatar";
const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8 border">
      <AvatarImage className="p-1" src="/logos.png" />
    </Avatar>
  );
};

export default BotAvatar;
