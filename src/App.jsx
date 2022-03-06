import { useState } from "react";
import "./styles.css";
import { InputTodos } from "./components/inputTodos";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/completeTodos";

// HTML の構造とそれに使う関数が掛かれている
export const App = () => {
  const [todoText, setTodoText] = useState("");

  // 未完了リストの値が入る関数
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  // 未完了リストの値が入る関数
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // クリックしたときに値が追加される関数
  const onClickAdd = () => {
    // todoTextに値が入った状態でボタンが押された時のみ実行する
    if (todoText === "") return;
    // 現在のすべての値+新しい値を代入して
    // 未完了リストの関数の動的な方の値に入れて更新している
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // クリックshチア時に値が削除される関数
  const onClickDelete = (index) => {
    // とりあえず一覧表示時してindex番号の値と会うものをspliceで削除する
    const deleteTodos = [...incompleteTodos];
    deleteTodos.splice(index, 1);
    setIncompleteTodos(deleteTodos);
  };
  // 未完了のタスクを完了タスクに移動する。消して別のところに追加
  const onClickShift = (index) => {
    const shiftTdos = [...incompleteTodos];
    shiftTdos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(shiftTdos);
  };

  // 完了リストを未完了リストに移す
  const onClickBack = (index) => {
    const shiftTdos = [...completeTodos];
    // 値を消すときは何番目を消すのか指定する
    shiftTdos.splice(index, 1);

    const backCompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(shiftTdos);
    setIncompleteTodos(backCompleteTodos);
  };

  // index.jsに返すHTMLが書かれている
  return (
    <>
      {/* インプットスペース */}
      <InputTodos
        // 向こうで使う関数を持って行っている
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {/* TODoリストが五個以上の時にPタグを表示 */}
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>登録できるtodoは五個までです</p>
      )}

      {/* 未完了のTODOリスト */}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickShift={onClickShift}
        onClickDelete={onClickDelete}
      />

      {/* 完了したTODOのリスト */}
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
