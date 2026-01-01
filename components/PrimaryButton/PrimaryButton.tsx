interface Props {
  text: string;
  className: string;
  type: "reset" | "button" | "submit";
}

const PrimaryButton = ({ text, className, type }: Props) => {
  return (
    <button
      type={type}
      className={`text-white font-medium border border-[#53db78] bg-[#53db7748]
    hover:bg-[#53db7761] transition duration-200 cursor-pointer backdrop-blur-xs rounded-md ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
