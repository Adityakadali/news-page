import retroPc from "../assets/images/image-retro-pcs.jpg";
import topLaptops from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";
import Card from "./Card";

function CardGroup() {
  const articles = [
    {
      id: "01",
      thumbnail: retroPc,
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
    },
    {
      id: "02",
      thumbnail: topLaptops,
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
    },
    {
      id: "03",
      thumbnail: gaming,
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <div className="container mx-auto flex flex-wrap justify-between gap-4 p-6">
      {articles.map((e, i) => {
        return (
          <Card
            image={e.thumbnail}
            id={e.id}
            title={e.title}
            description={e.description}
          />
        );
      })}
    </div>
  );
}

export default CardGroup;
