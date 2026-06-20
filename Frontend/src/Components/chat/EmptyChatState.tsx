const EmptyChatState = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "132px 24px 0",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "980px",
          backgroundColor: "white",
          borderRadius: "32px",
          padding: "56px 64px",
          textAlign: "center",
          border: "1px solid #D8DEDC",
        }}
      >
        <h1
          className="mindora-heading"
          style={{
            fontSize: "42px",
            fontWeight: 700,
            marginBottom: "16px",
            color: "#111111",
          }}
        >
          Hi, I’m Mindora.
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.6",
            color: "#7B7B7B",
            margin: 0,
          }}
        >
          Tell me how you're feeling. I'm here, and this is private.
        </p>
      </div>
    </div>
  );
};

export default EmptyChatState;