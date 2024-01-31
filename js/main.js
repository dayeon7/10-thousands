const result = document.querySelector(".result");
const modal = document.getElementById("modal");
const loading = document.querySelector(".result_loading");
const fieldValueInput = document.querySelector("#field_value");
const timeValueInput = document.querySelector("#time_value");
const fieldResult = document.querySelector(".field_result");
const timeResult = document.querySelector(".time_result");
const closeButton = document.querySelector(".close_btn");
const openButton = document.querySelector(".modal_btn");
const shareButton = document.querySelector(".share_btn");
const startButton = document.querySelector(".start_btn");

function showAlert(message) {
  alert(message);
}

// 초기화 함수
function initialize() {
  fieldValueInput.value = "";
  timeValueInput.value = "";
  result.style.display = "none";
  loading.style.display = "none";
}

// 결과계산
function displayResult() {
  loading.style.display = "none";
  result.style.display = "block";
  const fieldValue = fieldValueInput.value;
  const timeValue = timeValueInput.value;
  fieldResult.innerText = fieldValue;
  timeResult.innerText = parseInt(10000 / Number(timeValue), 10);
}

function calculator() {
  if (!fieldValueInput.value.trim() || !timeValueInput.value.trim()) {
    showAlert("입력되지 않았습니다.");
    fieldValueInput.focus();
    return false;
  }

  const timeValueInt = Number(timeValueInput.value);

  if (isNaN(timeValueInt) || timeValueInt <= 0 || timeValueInt > 24) {
    showAlert("잘못된 값입니다. 1에서 24 사이의 값을 입력해 주세요.");
    return false;
  }

  result.style.display = "none";
  loading.style.display = "flex";

  setTimeout(displayResult, 1800);
}

function openModal() {
  modal.classList.add("on");
}

function closeModal() {
  modal.classList.remove("on");
}

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

// 주소 복사 함수
function copyUrl() {
  var currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl)
      .then(function() {
        alert('주소가 복사되었습니다: ' + currentUrl);
      })
      .catch(function(err) {
        console.error('주소 복사 실패: ', err);
      });
}

// 초기화 함수 호출
initialize();

//클릭이벤트
shareButton.addEventListener("click", copyUrl);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
startButton.addEventListener("click", calculator);