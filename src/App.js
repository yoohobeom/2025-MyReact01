import './App.css';
import Library from './pages/step01-jsx/Library';
import Clock from './pages/step02-element/Clock';
// import Comment from './pages/step03-componet/Comment';
import CommentList from './pages/step03-component/CommentList';
import List02 from './pages/step03-component/List02';
import NumberCount from './pages/step04-state/NumberCount';
import FilterCommentList from './pages/step05-map,filter/FilterCommandList';
import FindCommandList from './pages/step05-map,filter/FindCommandList';
import ReduceCommandList from './pages/step05-map,filter/ReduceCommandList';
import SomeEveryCommandList from './pages/step05-map,filter/SomeEveryCommandList';
import IfExam01 from './pages/step06-if/IfExam01';
import IfExam02List from './pages/step06-if/IfExam02List';
import TextList from './pages/step06-if/TextList';
import Event01 from './pages/step07-event/Event01';
import Event02 from './pages/step07-event/Event02';
import Event03 from './pages/step07-event/Event03';
import Event04 from './pages/step07-event/Event04';
import InputExam from './pages/step08-css/InputExam';
import CounterEx01 from './pages/step09-event2/CounterEx01';
import CounterEx02 from './pages/step09-event2/CounterEx02';
import CounterEx03 from './pages/step09-event2/CounterEx03';


function App() {
  return (
    <div className="App">
      {/* <Library />
      <hr />
      <Clock />
      <hr /> */}
      {/* 같은 컴포넌트 여러개는 => 리스트 컴포넌트를 만들어라
      <Comment /> 
      <Comment /> 
      <Comment /> 
      */}
      {/* <CommentList />
      <hr />
      <List02 />
      <hr />
      <NumberCount />
      <hr />
      <FilterCommentList />
      <hr />
      <FindCommandList />
      <hr />
      <SomeEveryCommandList />
      <hr />
      <ReduceCommandList />
      <hr />
      <IfExam01 />
      <hr />
      <IfExam02List />
      <hr />
      <TextList />
      <hr />
      <Event01 />
      <hr />
      <Event02 />
      <hr />
      <Event03 />
      <hr />
      <Event04 />
      <hr />
      <InputExam /> */}
      {/* <CounterEx01 /> */}
      <CounterEx02 />
      <hr />
      <CounterEx03 />
    </div>
  );
}

export default App;
