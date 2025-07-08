const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, rgb(148 163 184) 40%, rgb(148 163 184) 60%, transparent 60%)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="flex justify-center pt-40">{children}</div>
    </>
  );
};

export default AuthLayout;
