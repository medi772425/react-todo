import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="ToDoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のToDo</p>
        <div>
          <ul>
            <li>a</li>
            <button>完了</button>
            <button>削除</button>
          </ul>
        </div>
      </div>
      <div>
        <p>完了したToDo</p>
        <div>
          <ul>
            <li>a</li>
            <button>戻す</button>
          </ul>
        </div>
      </div>
    </>
  );
};
