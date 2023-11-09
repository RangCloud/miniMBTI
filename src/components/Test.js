import React from "react";
import './Test.css';
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Test = () => {
    const qList = [
        '1. 오랜만에 친구와 만나 놀던 도중, 친구의 친구가 같이 놀아도 된다고 물어본다면..?',
        '2. 다음 중 더 공감되는 말은?',
        '3. 다가오는 생일에 파티를 하려는데.. 초대할 수 있는 친구는?',
        '4. 내가 강아지로 변하면 어떻게 할 것 같아??',
        '5. 샤워하면서 무슨 생각해?',
        '6. 갑자기 좀비가 나타나면?',
        '7. 친구한테 교통사고났다고 전화가 왔다. 당신의 대답은?',
        '8. 나 너랑 별로 안맞는 것 같아..',
        '9. 나 배탈 난 것 같아',
        '10. 심심한데 뭐하냐 나와~',
        '11. 오늘 뭐 먹을까?',
        '12. 여행 갈 때 당신은??',
    ]

    const a1List = [
        {mbti:'E', answer: '당연히 가능! 오늘부터 친구다'},
        {mbti:'E', answer: '주말이니까 밖에 나가볼까??'},
        {mbti:'E', answer: '어느 정도 친한 친구도 초대 가능'},
        {mbti:'S', answer: '그럴 수가 있나?'},
        {mbti:'S', answer: '아무 생각 안하는데?'},
        {mbti:'S', answer: '좀비는 없어.'},
        {mbti:'T', answer: '보험 불렀어?'},
        {mbti:'T', answer: '왜? (이유 궁금)'},
        {mbti:'T', answer: '뭐 먹었는데?'},
        {mbti:'P', answer: 'ㅇㅋ 나감'},
        {mbti:'P', answer: '몰라 맛있어보이는 곳 가자'},
        {mbti:'P', answer: '대략적으로 코스만 짬 그것도 안지킴'},
    ]
    const a2List = [
        {mbti:'I', answer: '어어..?(싫은데..)'},
        {mbti:'I', answer: '주말이니까 집에서 푹 쉬자!'},
        {mbti:'I', answer: '찐친 몇 명만 초대가능'},
        {mbti:'N', answer: '다시 돌아올 수 있는거야? 근데 귀엽겠당!'},
        {mbti:'N', answer: '오늘 뭐하지? 뭐 먹지? 어제 뭐 실수한거 없나?'},
        {mbti:'N', answer: '일단 생필품 먼저사고 집에 있는 가구로 무기만들거야'},
        {mbti:'F', answer: '다친 곳 없어? 괜찮아??'},
        {mbti:'F', answer: '!!! (마상...)'},
        {mbti:'F', answer: '얼른 병원 가자!'},
        {mbti:'J', answer: '응?? 갑자기??'},
        {mbti:'J', answer: '계획이 다 있지! 맛집리스트 뽑았다'},
        {mbti:'J', answer: '시간단위 분단위별로 계획 다 짬'},
    ]

        // useState로 변수 담기
    const [question, setQuestion] = useState('');
    const [answerA, setAnswerA] = useState('');
    const [answerB, setAnswerB] = useState('');

    const [count, setCount] = useState(0); // 인덱스 순서

    useEffect(() => { // 화면에 보여지게 초기화면
        setQuestion(qList[count]);
        setAnswerA(a1List[count].answer);
        setAnswerB(a2List[count].answer);
    }, []);

    const handleAnswerA = () => {
        if(count < 11){
            setQuestion(qList[count + 1]);
            setAnswerA(a1List[count + 1].answer);
            setAnswerB(a2List[count + 1].answer);
            setCount(count + 1);
        }else if(count === 11){
            setAnswerA(a1List[11].answer);
            setAnswerB(a2List[11].answer);
            setQuestion('결과는???');
            setCount(count + 1);
        }
    }

    const handleAnswerB = () => {
        if(count < 12){
            setQuestion(qList[count + 1]);
            setAnswerA(a1List[count + 1].answer);
            setAnswerB(a2List[count + 1].answer);
        }
    }

    return(
        <div className="bigBox">
            <div className="questionBox">
                {question}
            </div>
            <div className="btnBox">
                <button className="btn1" onClick={handleAnswerA}>{answerA}</button>
                <button className="btn1" onClick={handleAnswerB}>{answerB}</button>
            </div>
        </div>
    )
}

export default Test;