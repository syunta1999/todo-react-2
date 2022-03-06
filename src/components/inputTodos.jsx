// propsはコンポ―ネット間で関数の受け渡しを行う
export const InputTodos = (props) => {
  // propsで持ってきた関数を取得している
  const { todoText, onChange, onClick, disabled } = props;

  // /* インプットスペース */
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};
