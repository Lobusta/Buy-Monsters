import Card from "antd/lib/card/Card";
import Meta from "antd/lib/card/Meta";

interface IProductCardProps {
  id: number;
  title: string;
  email: string;
}

export const ProductCard: React.FC<IProductCardProps> = ({
  title,
  id,
  email,
}) => {
  return (
    <>
      <Card
        hoverable
        style={{
          width: 180,
        }}
        cover={
          <img
            alt="Monsters"
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
          />
        }
      >
        <Meta
          style={{
            textAlign: "center",
            marginTop: "12px",
            fontSize: "15px",
            fontWeight: "700",
          }}
          title={title}
          // description={email}
        />
      </Card>
    </>
  );
};
