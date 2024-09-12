function App() {
  return (
    <div>
      <CardWrapper innerComponent={<TextComponent />} />
    </div>
  );
}

function TextComponent() {
  return <div>hi there</div>;
}

function CardWrapper({ innerComponent }) {
  return <div style={{ border: "2px solid black" }}>{innerComponent}</div>;
}

export default App;
