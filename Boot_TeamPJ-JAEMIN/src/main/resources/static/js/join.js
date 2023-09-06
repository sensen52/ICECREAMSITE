const checkboxes = document.querySelectorAll('.checkcheck');
const allCheck = document.querySelector('.allcheck'); // cb0 체크박스


allCheck.addEventListener('change', () => {
    const isChecked = allCheck.checked;
    checkboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
    updateSectionsDisplay();
});

const sectionsToHide = document.querySelectorAll('section:nth-of-type(2), section:nth-of-type(3), section:nth-of-type(4)');

function updateSectionsDisplay() {
    const checkedCount = document.querySelectorAll('.checkcheck:checked').length;
    if (checkedCount >= 3) {
        sectionsToHide.forEach(section => {
            section.style.display = 'block';
        });
        const secondSection = document.querySelector('section:nth-of-type(2)');
        if (secondSection) {
            const topOffset = secondSection.offsetTop;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        }
    } else {
        sectionsToHide.forEach(section => {
            section.style.display = 'none';
        });
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        updateSectionsDisplay();
    });
});

// 초기 로드 시 실행
updateSectionsDisplay();


// 상자내용물검열


document.getElementById("username").addEventListener("input", function(event) {
    var inputValue = event.target.value;
    if (/[^a-zA-Z0-9]/.test(inputValue)) {
        event.target.value = inputValue.replace(/[^a-zA-Z0-9]/g, '');
        alert("아이디는 영어와 숫자만 입력 가능합니다.");
    }
});

var passwordInput = document.getElementById("password");
var passwordConfirmInput = document.getElementById("passwordConfirm");

function restrictInputToAllowedCharacters(inputElement) {
    inputElement.addEventListener("input", function(event) {
        var inputValue = event.target.value;
        var cleanedValue = inputValue.replace(/[^a-zA-Z0-9*^!]/g, '');
        event.target.value = cleanedValue;
    });
}

restrictInputToAllowedCharacters(passwordInput);
restrictInputToAllowedCharacters(passwordConfirmInput);

document.getElementById("birthdate").addEventListener("input", function(event) {
    var inputValue = event.target.value;
    // 입력된 값에서 숫자만 추출하여 6자리로 제한
    var cleanedValue = inputValue.replace(/[^\d]/g, '').slice(0, 6);
    // YYMMDD 형식으로 변환
    if (cleanedValue.length >= 4) {
        var formattedValue = cleanedValue.replace(/(\d{2})(\d{2})(\d{2})/, '$1/$2/$3');
        event.target.value = formattedValue;
    } else {
        event.target.value = cleanedValue;
    }
});


var passwordInput = document.getElementById("password");
var passwordConfirmInput = document.getElementById("passwordConfirm");

passwordConfirmInput.addEventListener("input", function(event) {
    var passwordValue = passwordInput.value;
    var passwordConfirmValue = event.target.value;

    if (passwordValue === passwordConfirmValue) {
        event.target.style.backgroundColor = "#C4FFC1"; // 일치하면 초록색으로 변경
        setTimeout(function() {
            event.target.style.backgroundColor = ""; // 일치한 후 1초 뒤에 원래 색상으로 복원
        }, 1000);
    } else {
        event.target.style.backgroundColor = ""; // 불일치 시 원래 색상으로 복원
    }
});

//주소
