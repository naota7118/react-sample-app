function Cat ({width, height}) {
  return(
    <>
      <img src="https://i.imgur.com/O3EIPHpb.jpg" alt="cat"
        width={100}
        height={100}
      />
      <img src="https://i.imgur.com/O3EIPHpb.jpg" alt="cat"/>
    </>
  );
}

function Card({ children }) {
  return(
    <div className="card">
      {children}
    </div>
  );
}

export default function CatList() {
  return (
    <Card>
      <Cat/>
    </Card>
  )
}