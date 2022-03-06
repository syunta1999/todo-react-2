// propsはコンポ―ネット間で関数の受け渡しを行う
export const CompleteTodos = (props) => {
  // propsで持ってきた関数を取得している
  const { completeTodos, onClickBack } = props;
  // /* インプットスペース */
  return (
    // {/* 完了したTODOのリスト */}
    <div className="incomplete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
