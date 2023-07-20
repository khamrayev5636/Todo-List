export const Item = ({ id, text, isCompleted , hanleDelete , hanleEdit , hanleChecked}) => {
 

  return (
    <li className="flex justify-between items-center bg-[#dce0e8] mb-2 p-3 rounded-sm">
      <div className="flex">
        <strong className="me-2">{id}.</strong>
        <input
          onChange={() => hanleChecked(id)}
          // Checked={isCompleted}
          className="me-1"
          type="checkbox"
        />
        <p
          className={
            isCompleted
              ? "font-[500] uppercase line-through"
              : "font-[500] uppercase"
          }
        >
          {text}
        </p>
      </div>
      <div>
        <button
          onClick={() => hanleEdit(id, text)}
          className="bg-yellow-500 text-white me-3 py-1 px-3 uppercase"
        >
          Edit
        </button>
        <button
          onClick={() => hanleDelete(id)}
          className="bg-red-500 text-white py-1 px-3 uppercase"
        >
          Delete
        </button>
      </div>
    </li>
  );
};
