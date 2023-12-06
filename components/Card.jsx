import Image from 'next/image';

const Card = props => {
  return (
    <div className=" flex flex-col gap-3 ">
      <div className="custom-shadow	">
        <Image src={props.img} alt={props.title} width={400} height={200} />
        <h3 className="font-bold text-2xl pl-5 pt-5 text-myblue">
          {props.title} :
        </h3>
        <p className="max-w-sm text-left tracking-wider text-sm font-normal	 pl-5 pb-5 mt-2">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Card;
