export const ActionButton = ({ text, action }) => {
    return (
      <>
       {/* 🔽 `onClick` でクリック時に指定した関数を実行できる */}
        <button type="button" onClick={action}>
            {text}
        </button>
      </>
    );
  };
//  関数 ActionButton は呼び出し元のコンポーネントからpropsを受け取り，html 要素を出力する．
//export const ActionButton = ... とすることで，他のコンポーネントから import { ActionButton } ... のように記述して呼び出せるようにしている