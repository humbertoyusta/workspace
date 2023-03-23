import { useState, useCallback, CSSProperties } from "react";
import { ItemBox } from "./ItemBox";
import { getRandomItem, Item } from "./getRandomItem";
import { FixedSizeList as List } from 'react-window';

export const App = () => {
  const [items, setItems] = useState(() =>
    Array.from({ length: 100000 }, () => getRandomItem())
  );

  const addItem = useCallback(() => {
    setItems((items) => [getRandomItem()].concat(items));
  }, []);

  const removeItem = useCallback((itemToRemove: Item) => {
    setItems((items) => items.filter((item) => item !== itemToRemove));
  }, []);


  return (
    <>
      <List 
        width={640}
        height={480}
        itemCount={items.length}
        itemSize={100}
      >
        {({ index, style }: { index: number, style: CSSProperties }) => (
          <div style={style} key={items[index].id}>
            <ItemBox
              key={items[index].id}
              item={items[index]}
              removeItem={removeItem}
            />
          </div>
        )}
      </List>
      <button className="fab" onClick={addItem}>
        +
      </button>
    </>
  );
};

export default App;
