interface Props {
  text: string;
  className: string;
}

const SecondaryButton = ({ text, className }: Props) => {
  return (
    <button
      type="button"
      className={`text-white font-medium py-3 px-6 border border-[#2b2b2b] bg-[#11111180] ${className} rounded-md
    hover:border-[#464646] hover:bg-[#111111b3] transition duration-200 cursor-pointer backdrop-blur-xs`}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
