function SuccessAddItem({ itemName }) {
  return (
    <div className=" success-message p-4 bg-green-500 text-white rounded-lg mx-96">
      <p>{`Item "${itemName}" has been added successfully!`}</p>
    </div>
  );
}

export default SuccessAddItem;
