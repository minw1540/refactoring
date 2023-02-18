{
  'hamlet' : {
    'name' : 'Hamlet',
    'type' : 'tragedy'
  },
  'as-like' : {
    'name' : 'As You Like It',
    'type' : 'comedy'
  }
}

[
  {
    'customer' : 'BigCo',
    'performances' : [
      {
      'playId' : 'Hamlet',
      'audience' : 55
      },
      {
        'playId' : 'as-like',
        'audience' : 35
      },
    ]
  }
]

function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  const format = 
        new Intl.NumberFormat('en-US', {style : 'currency', currency : 'USD', minimumFractionDigits : 2}).format;
  
  for (const perf of invoice.performances) {
    const play = plays[perf.playId];
    let thisAmount = 0;

    switch (play.type) {
      case 'tragedy':
        thisAmount = 40000;

        if(perf.audience > 30){
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;

      case 'comedy' :
        thisAmount = 30000;

        if(perf.audience > 20){
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }

        thisAmount += 300 * perf.audience;
        break;
    
      default:
        throw new Error(`알 수 없는 장르 : ${play.type}`);
        break;
    }

    // 포인트 적립
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명 마다 추가 포인트 제공
    if('comedy' === play.type){
      volumeCredits += Math.floor(perf.audience / 5);
    }

    // 청구 내역 출력
    result += `${play.name} : ${format(thisAmount / 100)} (${perf.audience}석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트 : ${volumeCredits}점 \n`;

  return result;
}


function statement (invoice, plays) {
  ...

  function amountFor(perf, play) { // 값이 바뀌지 않는 변수는 매개변수로 전달
    let thisAmount = 0; // 변수를 초기화 하는 코드

    switch (play.type) {
      case 'tragedy':
        thisAmount = 40000;

        if(perf.audience > 30){
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;

      case 'comedy' :
        thisAmount = 30000;

        if(perf.audience > 20){
          thisAmount += 10000 + 500 * (perf.audience - 20);
        }

        thisAmount += 300 * perf.audience;
        break;
    
      default:
        throw new Error(`알 수 없는 장르 : ${play.type}`);
        break;
    }

    return thisAmount; // 함수 안에서 값이 바뀌는 변수 반환
  }
}

function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  const format = 
        new Intl.NumberFormat('en-US', {style : 'currency', currency : 'USD', minimumFractionDigits : 2}).format;
  
  for (const perf of invoice.performances) {
    const play = plays[perf.playId];
    let thisAmount = amountFor(perf, play); // 추출한 함수 이용

    // 포인트 적립
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명 마다 추가 포인트 제공
    if('comedy' === play.type){
      volumeCredits += Math.floor(perf.audience / 5);
    }

    // 청구 내역 출력
    result += `${play.name} : ${format(thisAmount / 100)} (${perf.audience}석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트 : ${volumeCredits}점 \n`;

  return result;
}

function amountFor(perf, play) { 
  let result = 0; // totalAmount -> result로 명확한 이름으로 변경

  switch (play.type) {
    case 'tragedy':
      thisAmount = 40000;

      if(perf.audience > 30){
        thisAmount += 1000 * (perf.audience - 30);
      }
      break;

    case 'comedy' :
      thisAmount = 30000;

      if(perf.audience > 20){
        thisAmount += 10000 + 500 * (perf.audience - 20);
      }

      thisAmount += 300 * perf.audience;
      break;
  
    default:
      throw new Error(`알 수 없는 장르 : ${play.type}`);
      break;
  }

  return result; 
}

function amountFor(aPerformance, play) { // 명확한 이름 aPerformance
  let result = 0; 

  switch (play.type) {
    case 'tragedy':
      thisAmount = 40000;

      if(aPerformance.audience > 30){
        thisAmount += 1000 * (aPerformance.audience - 30);
      }
      break;

    case 'comedy' :
      thisAmount = 30000;

      if(aPerformance.audience > 20){
        thisAmount += 10000 + 500 * (aPerformance.audience - 20);
      }

      thisAmount += 300 * aPerformance.audience;
      break;
  
    default:
      throw new Error(`알 수 없는 장르 : ${play.type}`);
      break;
  }

  return result; 
}

function statement (invoice, plays) {
  ...

  function playFor(aPerformance) {
    return plays[aPerformance.playId];
  }
}

function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  const format = 
        new Intl.NumberFormat('en-US', {style : 'currency', currency : 'USD', minimumFractionDigits : 2}).format;
  
  for (const perf of invoice.performances) {
    const play = playFor(perf); // 우변을 함수로 추출
    let thisAmount = amountFor(perf, play); 

    // 포인트 적립
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명 마다 추가 포인트 제공
    if('comedy' === play.type){
      volumeCredits += Math.floor(perf.audience / 5);
    }

    // 청구 내역 출력
    result += `${play.name} : ${format(thisAmount / 100)} (${perf.audience}석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트 : ${volumeCredits}점 \n`;

  return result;
}


function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  const format = 
        new Intl.NumberFormat('en-US', {style : 'currency', currency : 'USD', minimumFractionDigits : 2}).format;
  
  for (const perf of invoice.performances) {
    let thisAmount = amountFor(perf, playFor(perf)); // const play = playFor(perf); 인라인된 변수

    // 포인트 적립
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명 마다 추가 포인트 제공
    if('comedy' === playFor(perf).type){ // 변수 인라인
      volumeCredits += Math.floor(perf.audience / 5);
    }

    // 청구 내역 출력 // 변수 인라인
    result += `${playFor(perf).name} : ${format(thisAmount / 100)} (${perf.audience}석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트 : ${volumeCredits}점 \n`;

  return result;
}

function amountFor(aPerformance) { // 불필요한 play 매개변수 제거 
  let result = 0; 

  switch (playFor(aPerformance).type) { // play를 playFor() 호출로 변경
    case 'tragedy':
      thisAmount = 40000;

      if(aPerformance.audience > 30){
        thisAmount += 1000 * (aPerformance.audience - 30);
      }
      break;

    case 'comedy' :
      thisAmount = 30000;

      if(aPerformance.audience > 20){
        thisAmount += 10000 + 500 * (aPerformance.audience - 20);
      }

      thisAmount += 300 * aPerformance.audience;
      break;
  
    default:
      throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`); // play를 playFor() 호출로 변경
      break;
  }

  return result; 
}

function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  const format = 
        new Intl.NumberFormat('en-US', {style : 'currency', currency : 'USD', minimumFractionDigits : 2}).format;
  
  for (const perf of invoice.performances) {
    // 포인트 적립
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명 마다 추가 포인트 제공
    if('comedy' === playFor(perf).type){ // 변수 인라인
      volumeCredits += Math.floor(perf.audience / 5);
    }

    // 청구 내역 출력 // thisAmount 변수 인라인 thisAmount -> amountFor(perf)
    result += `${playFor(perf).name} : ${format(amountFor(perf) / 100)} (${perf.audience}석)\n`;
    totalAmount += amountFor(perf); // thisAmount 변수 인라인
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트 : ${volumeCredits}점 \n`;

  return result;
}

function statement (invoice, plays) {
  ...

  function volumeCreditsFor(perf) {
    let volumeCredits = 0;
    volumeCredits += Math.max(perf.audience - 30, 0);

    if('comedy' === playFor(perf).type){ // 변수 인라인
      volumeCredits += Math.floor(perf.audience / 5);
    }

    return volumeCredits;
  }
}


function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  const format = 
        new Intl.NumberFormat('en-US', {style : 'currency', currency : 'USD', minimumFractionDigits : 2}).format;
  
  for (const perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf); // 추출한 함수를 이용해 값을 누적

    // 청구 내역 출력 
    result += `${playFor(perf).name} : ${format(amountFor(perf) / 100)} (${perf.audience}석)\n`;
    totalAmount += amountFor(perf); 
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트 : ${volumeCredits}점 \n`;

  return result;
}

function volumeCreditsFor(perf) {
  let result = 0;
  result += Math.max(perf.audience - 30, 0);

  if('comedy' === playFor(perf).type){ // 변수 인라인
    result += Math.floor(perf.audience / 5);
  }

  return result;
}

function statement (invoice, plays) {
  ...

  function format(aNumber) {
    return new Intl.NumberFormat('en-US', {style : 'currency', currency : 'USD', minimumFractionDigits : 2}).format(aNumber);
  }
}

function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  
  for (const perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);

    // 청구 내역 출력 
    result += `${playFor(perf).name} : ${format(amountFor(perf) / 100)} (${perf.audience}석)\n`;
    totalAmount += amountFor(perf); 
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트 : ${volumeCredits}점 \n`;

  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {style : 'currency', currency : 'USD', minimumFractionDigits : 2}).format(aNumber / 100); // 단위 변환 로직도 이 함수 안으로 이동
}

function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  
  for (const perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);

    // 청구 내역 출력 
    result += `${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
    totalAmount += amountFor(perf); 
  }

  result += `총액: ${usd(totalAmount)}\n`;
  result += `적립 포인트 : ${volumeCredits}점 \n`;

  return result;
}

function statement (invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  
  for (const perf of invoice.performances) {
    // 청구 내역 출력 
    result += `${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
    totalAmount += amountFor(perf); 
  }

  for (const perf of invoice.performances) { // 값 누적 로직을 별도 for문으로 분리
    volumeCredits += volumeCreditsFor(perf);
  }

  result += `총액: ${usd(totalAmount)}\n`;
  result += `적립 포인트 : ${volumeCredits}점 \n`;

  return result;
}

function statement (invoice, plays) {
  let totalAmount = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  
  for (const perf of invoice.performances) {
    // 청구 내역 출력 
    result += `${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
    totalAmount += amountFor(perf); 
  }

  let volumeCredits = 0; // 변수 선언을 사용되는 반복문 앞으로 이동

  for (const perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);
  }

  result += `총액: ${usd(totalAmount)}\n`;
  result += `적립 포인트 : ${volumeCredits}점 \n`;

  return result;
}

function totalVolumeCredits() {
  let volumeCredits = 0;

  for (const perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);
  }

  return volumeCredits;
}

function statement (invoice, plays) {
  let totalAmount = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  
  for (const perf of invoice.performances) {
    // 청구 내역 출력 
    result += `${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
    totalAmount += amountFor(perf); 
  }

  let volumeCredits = totalVolumeCredits(); // 값 계산 로직을 함수로 추출

  result += `총액: ${usd(totalAmount)}\n`;
  result += `적립 포인트 : ${volumeCredits}점 \n`;

  return result;
}

function statement (invoice, plays) {
  let totalAmount = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  
  for (const perf of invoice.performances) {
    // 청구 내역 출력 
    result += `${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
    totalAmount += amountFor(perf); 
  }

  result += `총액: ${usd(totalAmount)}\n`;
  result += `적립 포인트 : ${totalVolumeCredits()}점 \n`; // 변수 인라인

  return result;
}

function appleSauce() {
  let totalAmount = 0;

  for (const perf of invoice.performances) {
    totalAmount += amountFor(perf); 
  }

  return totalAmount;
}

function statement (invoice, plays) {
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  
  for (const perf of invoice.performances) {
    // 청구 내역 출력 
    result += `${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
  }

  let totalAmount = appleSauce(); // 함수 추출 & 임시 이름 사용

  result += `총액: ${usd(totalAmount)}\n`;
  result += `적립 포인트 : ${totalVolumeCredits()}점 \n`; 

  return result;
}

function statement (invoice, plays) {
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  
  for (const perf of invoice.performances) {
    // 청구 내역 출력 
    result += `${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`; // 변수 인라인 & 함수 이름 바꾸기
  result += `적립 포인트 : ${totalVolumeCredits()}점 \n`; 

  return result;
}

function totalAmount() {
  let result = 0;

  for (const perf of invoice.performances) {
    result += amountFor(perf); 
  }

  return result;
}

function statement(invoice, plays) {
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  
  for (const perf of invoice.performances) {
    result += `${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`; 
  result += `적립 포인트 : ${totalVolumeCredits()}점 \n`; 

  return result;

  function totalAmount() {
    let result = 0;
  
    for (const perf of invoice.performances) {
      result += amountFor(perf); 
    }
  
    return result;
  }

  function totalVolumeCredits() {
    let volumeCredits = 0;
  
    for (const perf of invoice.performances) {
      volumeCredits += volumeCreditsFor(perf);
    }
  
    return volumeCredits;
  }

  function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {style : 'currency', currency : 'USD', minimumFractionDigits : 2}).format(aNumber / 100); // 단위 변환 로직도 이 함수 안으로 이동
  }
  
  function volumeCreditsFor(perf) {
    let result = 0;
    result += Math.max(perf.audience - 30, 0);
  
    if('comedy' === playFor(perf).type){
      result += Math.floor(perf.audience / 5);
    }
  
    return result;
  }

  function playFor(aPerformance) {
    return plays[aPerformance.playId];
  }

  function amountFor(aPerformance) { 
    let result = 0; 
  
    switch (playFor(aPerformance).type) { 
      case 'tragedy':
        thisAmount = 40000;
  
        if(aPerformance.audience > 30){
          thisAmount += 1000 * (aPerformance.audience - 30);
        }
        break;
  
      case 'comedy' :
        thisAmount = 30000;
  
        if(aPerformance.audience > 20){
          thisAmount += 10000 + 500 * (aPerformance.audience - 20);
        }
  
        thisAmount += 300 * aPerformance.audience;
        break;
    
      default:
        throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`);
        break;
    }
  
    return result; 
  }
}


function statement(invoice, plays) {
  return renderPlainText(invoice, plays); // 본문 전체를 별도 함수로 추출
}

function renderPlainText(invoice, plays) { // 본문 전체를 별도 함수로 추출
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  
  for (const perf of invoice.performances) {
    // 청구 내역 출력 
    result += `${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`; // 변수 인라인 & 함수 이름 바꾸기
  result += `적립 포인트 : ${totalVolumeCredits()}점 \n`; 

  return result;

  function totalAmount() {}
  function totalVolumeCredits() {}
  function volumeCreditsFor(perf) {}
  function usd(aNumber) {}
  function playFor(aPerformance) {}
  function amountFor(aPerformance) {}
}

function statement(invoice, plays) {
  const statementData = {};

  return renderPlainText(statementData, invoice, plays);  // 중간 데이터 구조를 인수로 전달
}

function renderPlainText(statementData, invoice, plays) { // 중간 데이터 구조를 인수로 전달
  ...
}

function statement(invoice, plays) {
  const statementData = {customer : invoice.customer}; // 고객 데이터를 중간 데이터로 옮김

  return renderPlainText(statementData, invoice, plays);
}

function renderPlainText(data, invoice, plays) {  
  let result = `청구 내역 (고객명 : ${data.customer})\n`; // 고객 데이터를 중간 데이터로부터 얻음
  
  for (const perf of invoice.performances) {
    // 청구 내역 출력 
    result += `${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`; 
  result += `적립 포인트 : ${totalVolumeCredits()}점 \n`; 

  return result;
}

function statement(invoice, plays) {
  const {customer, performances} = invoice;
  const statementData = {customer, performances}; // 공연 정보를 중간 데이터로 옮김

  return renderPlainText(statementData, plays); // 필요 없는 인수 invoice 삭제
}

function renderPlainText(data, plays) {  // 필요 없는 인수 invoice 삭제
  let result = `청구 내역 (고객명 : ${data.customer})\n`;
  
  for (const perf of data.performances) {
    // 청구 내역 출력 
    result += `${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`; 
  result += `적립 포인트 : ${totalVolumeCredits()}점 \n`; 

  return result;
}

function statement(invoice, plays) {
  const {customer, performances} = invoice;
  const statementData = {
    customer, 
    performances : performances.map(enrichPerformance),
  };

  return renderPlainText(statementData, plays);

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance) // 얕은 복사 수행

    return result;
  }
}

function statement(invoice, plays) {
  ...
  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result); // 중간 데이터에 연극 정보 저장
    
  
    return result;
  }

  // renderPlainText()의 중첩 함수였던 것을 statement()로 옮김
  function playFor(aPerformance) {
    return plays[aPerformance.playId];
  }
}

function statement(invoice, plays) {
  ...
  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    result.amount = amountFor(result);
    
  
    return result;
  }

  function amountFor(aPerformance){}
}

function statement(invoice, plays) {
  ...
  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);

    return result;
  }

  ...
}

function statement(invoice, plays) {
  const {customer, performances} = invoice;
  const statementData = {
    customer, 
    performances : performances.map(enrichPerformance),
  };

  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  return renderPlainText(statementData, plays);
}

function totalAmount(data) {
  return data.performances.reduce((totla, p) => totle + p.amount, 0);
}

function totalVolumeCredits(data) {
  return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
}

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

// 중간 데이터 생성 전담
function createStatementData(invoice, plays) {
  const {customer, performances} = invoice;
  const statementData = {
    customer, 
    performances : performances.map(enrichPerformance),
  };

  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  return statementData;
}

// statement.js
import createStatementData from './createStatementData.js';

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  let result = `<h1>청구 내역 (고객명 : ${data.customer})</h1>\n`;
  result += '<table>\n';
  result += '<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>\n';

  for (let perf of performances) {
    result += `<tr><th>${perf.play.name}</th><th>(${perf.audience}석)</th>`;
    result += `<td>${usd(perf.amount)}</td></tr>`;
  }

  result += '</table>\n';
  result += `<p>총액 : ${usd(data.totalAmount)}</p>\n`;
  result += `<p>적립 포인트 : ${data.totalVolumeCredits} 점</p>\n`;

  return result;
}

// createStatementData.js
export default function createStatementData(invoice, plays) {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);

  return result;

  function enrichPerformance(aPerformance) {}
  function playFor(aPerformance) {}
  function amountFor(aPerformance) {}
  function volumeCreditsFor(aPerformance) {}
  function totalAmount(data) {}
  function totalVolumeCredits(data) {}
}