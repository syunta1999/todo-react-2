// propsはコンポ―ネット間で関数の受け渡しを行う
export const IncompleteTodos = (props) => {
  // propsで持ってきた関数を取得している
  const { incompleteTodos, onClickShift, onClickDelete } = props;
  // /* インプットスペース */
  // {/* 未完了のTODOリスト */}
  return (
    <div className="complete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {/* リストの値を全て順番に表示  indexは通し番号を付与する */}
        {incompleteTodos.map((todo, index) => {
          return (
            <div className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickShift(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
