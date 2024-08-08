import { Badge } from "./badge";
import { Separator } from "./separator";

interface CardProps {
  title: string;
  subTitle: string;
  tags: string[];
  linkto: string;
}

const Card: React.FC<CardProps> = ({ title, subTitle, linkto, tags }) => (
  <div className="my-4">
    <div className="space-y-1">
      <a
        href={linkto}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-medium leading-none hover:bg-green-600"
      >
        {title}
      </a>
      <div className="text-md text-muted-foreground">
        {subTitle} <br />
      </div>
      {tags.map((tag) => (
        <Badge key={tag} variant="secondary" className="mx-0.5 text-md">
          {tag}
        </Badge>
      ))}
    </div>
    <Separator className="my-4" />
  </div>
);

export default Card;
