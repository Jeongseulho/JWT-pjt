const RuleContent = () => {
  return (
    <>
      <p>낮과 밤 (제한시간 : 낮 3분, 밤 30초)</p>
      <li>게임은 ‘낮’부터 시작됩니다.</li>
      <li>‘낮’에는 생존한 모든 토끼들 간의 대화가 가능합니다.</li>
      <li>‘밤’이 되면, 거북이들만 서로 대화가 가능합니다.</li>
      <br />
      <p>투표</p>
      <li>낮이 끝나면 투표를 하여 처형할 토끼를 결정합니다.</li>
      <li>가장 많은 표를 받은 토끼는 최후의 변론을 할 수 있습니다.</li>
      <li>변론 이후에 찬반 투표를 통해 처형 여부를 결정합니다.</li>
    </>
  );
};
export default RuleContent;
