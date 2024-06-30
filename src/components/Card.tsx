import Reveal from "./Reveal";

const Card = ({
  title,
  company,
  duties,
  dates,
}: {
  title: string;
  company: string;
  duties: string[];
  dates: string;
}) => {
  return (
    <Reveal>
      <div className="bg-slate-700 rounded-lg p-6 flex-col">
        <h1 className="text-slate-300 font-semibold text-2xl">{company}</h1>
        <div className="flex justify-between">
          <h3 className="text-slate-300 font-semibold">{title}</h3>
          <h3 className="text-slate-300">
            <em>{dates}</em>
          </h3>
        </div>
        <hr className="" />
        <Reveal>
          <div className="mt-2 text-slate-200 relative">
            {duties.map((d, index) => (
              <li className="pl-1" key={index}>
                {d}
              </li>
            ))}
          </div>
        </Reveal>
      </div>
    </Reveal>
  );
};

export default Card;
