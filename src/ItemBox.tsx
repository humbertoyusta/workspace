import { IoIosClose } from "react-icons/io";
import { Item } from "./getRandomItem";
import { memo } from "react";

let renders = 0;

interface ItemBoxProps {
  item: Item;
  removeItem: (itemToRemove: Item) => void;
}

export const ItemBox = memo(({ item, removeItem }: ItemBoxProps) => {
  console.log(++renders);
  return (
    <div style={{ background: item.background }}>
      <h3>{item.word}</h3>
      <button onClick={() => removeItem(item)}>
        <IoIosClose onClick={() => removeItem(item)} className="icon-remove" size="2.5em" />
      </button>
    </div>
  );
});
