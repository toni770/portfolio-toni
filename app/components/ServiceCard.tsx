import { KeplerStd } from "../fonts";

// Card information for services
const ServiceCard = ({
  title,
  subtitle,
  icon,
  description,
}: {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2 bg-white/30 backdrop-blur-md rounded-xl p-6 h-auto justify-between">
      {icon}
      <div className="pt-5 md:pt-20 lg:pt-25">
        <h2 className="text-4xl leading-7">{title}</h2>
        <h3 className={`${KeplerStd.className} text-4xl pb-10 `}>{subtitle}</h3>
      </div>
      <p className="text-md">{description}</p>
    </div>
  );
};

export default ServiceCard;
