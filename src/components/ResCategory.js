import ItemList from "./ItemList";

const ResCategory = ({ cardData, showItems, setsIndex }) => {
  const handleClick = () => {
    setsIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-80 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {cardData.title} ({cardData.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={cardData.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
