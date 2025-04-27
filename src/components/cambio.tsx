// SquareContent.tsx

interface SquareContentProps {
    message: string;
  }
  
  const SquareContent = ({ message }: SquareContentProps) => {
    return (
      <div className="flex-1 bg-gray-200 rounded-lg ml-[50px] p-6 flex items-center justify-center">
        <div className="text-xl font-bold text-center">{message}</div>
      </div>
    );
  };
  
  export default SquareContent;
  