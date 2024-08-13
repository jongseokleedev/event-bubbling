// 버튼 클릭 이벤트 핸들러
document.querySelectorAll(".order-button").forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(`${button.innerText} Event`);
    // console.log(e.target); //target Property
    // console.log(e.currentTarget); //currentTarget Property
    e.stopPropagation();
  });
});

// 테이블 클릭 이벤트 핸들러
document.querySelector("#table1").addEventListener("click", function (e) {
  console.log("테이블 1 Event");
  // console.log(e.target); //target Property
  console.log(e.currentTarget); //currentTarget Property
});

document.querySelector("#table2").addEventListener("click", function (e) {
  console.log("테이블 2 Event");
  // console.log(e.target); //target Property
  console.log(e.currentTarget); //currentTarget Property
});

// 식당 구역 클릭 이벤트 핸들러
document.querySelector("#restaurant").addEventListener("click", function (e) {
  console.log("식당 Event");
  // console.log(e.target); //target Property
  console.log(e.currentTarget); //currentTarget Property
});
