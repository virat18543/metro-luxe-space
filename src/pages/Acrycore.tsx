const Acrycore = () => {
  return (
    <>
      <style>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          10% {
            transform: scale(1.1);
          }
          20% {
            transform: scale(1);
          }
          30% {
            transform: scale(1.1);
          }
          40% {
            transform: scale(1);
          }
        }
        .heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
          display: inline-block;
        }
      `}</style>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="heartbeat">Hello, Acrycore is here</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Acrycore;
