import { KeplerStd } from "../fonts";

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
    <div className="flex flex-col gap-2 bg-white/30 backdrop-blur-md rounded-xl p-6 h-[25em] justify-between">
      {icon}
      <div>
        <h2 className="text-[2em] leading-7">{title}</h2>
        <h3 className={`${KeplerStd.className} text-[2em] pb-10 `}>
          {subtitle}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
