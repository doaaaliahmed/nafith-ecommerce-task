import { FC } from "react";

type IProps = {
  rate: number;
  count?: number;
};

const Rating: FC<IProps> = ({ rate, count }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        {[1, 2, 3, 4, 5].map((m, idx) => (
          <img key={Math.random()* 100000 + idx} src={ (rate >= idx + 1) ? '/full-star.png' : '/blanck-star.png'} alt='full' className="w-4 h-4"/>
        ))}
      </div>
      <span className=" text-gray-700 text-base font-semibold ">{count ? (count) : rate === 5 ? `5` : `${rate} & up `}</span>
    </div>
  );
};

export default Rating;
