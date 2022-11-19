const Error = ({ mensaje, children }) => {
  return (
    <div className="bg-red-800 text-center text-white font-bold p-3 uppercase mb-3 rounded">
      <p>{mensaje}</p>
      {children}
    </div>
  );
};

export default Error;
