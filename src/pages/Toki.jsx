// pages/Toki.jsx

import { useState } from "react";
import { ActionButton } from "../components/ActionButton";

export const Toki = () => {


    const [TokiResult, setTokiResult] = useState("");

  const getToki = () => {
    const result = [<a href="https://toki-kankou.jp/spot/toki-minoyakimatsuri">美濃焼</a>, 
    <a href="https://www.arita.jp/event/toujikimatsuri/">有田焼</a>,
    <a href="https://www.town.mashiko.lg.jp/page/page000110.html">益子焼</a>,
    <a href="https://www.shigaraki-matsuri.com/">信楽焼</a>,
    <a href="https://hasamitoukimatsuri.com/">波佐見焼</a>][
      Math.floor(Math.random() * 5)
    ];
    console.log(result);
    // 🔽 追加
    setTokiResult(result);
  };

  return (
    <>
      <p>次はどこの陶器を買いに行く？</p>
      <ActionButton text="あなたがきっと好きなのは・・・" action={getToki}  />
      {/* 🔽 追加 */}
      <p>{TokiResult}</p>
    </>
  );
};
