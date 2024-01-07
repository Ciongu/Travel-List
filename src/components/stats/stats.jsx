export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list! 🚀</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const percentagePacked = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You got everythin! Ready to go! ✈"
          : `💼You have ${numItems} items on your list, and you already packed
        ${packedItems} (${percentagePacked}%).`}
      </em>
    </footer>
  );
}
