import UnicornStudioBackground from "./UnicornStudioBackground";

const CustomBackground = () => {
  return (
    <>
      <UnicornStudioBackground />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "10%",
          backgroundColor: "var(--background)",
          zIndex: 0,
        }}
      />
    </>
  );
};

export default CustomBackground;
