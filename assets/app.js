var subjects = document.querySelectorAll(".course-credit");

function sumCredit() {
    var credits = 0;
    var count = 0;

    for(var i=0; i < subjects.length; i++) {
        if (subjects[i].checked) {
            credits = credits + Number(subjects[i].value);
            count++;
        }
    }
    document.getElementById("creditCount").textContent = credits;
    document.getElementById("courseCount").textContent = count + " รายวิชา";
}

for (var i = 0; i < subjects.length; i++) {
    subjects[i].onchange = sumCredit;
}

var resetBtn = document.getElementById("resetCredits");
if (resetBtn) {
    resetBtn.onclick = function() {
        for (var i = 0; i < subjects.length; i++) {
            subjects[i].checked = false;
        }
        sumCredit();
    };
}

function checkForm(form, statusId)
{
    var status = document.getElementById(statusId);
    var fields = form.querySelectorAll("input, textarea");

    for (var i = 0; i < fields.length; i++) {
        fields[i].value = fields[i].value.trim();
        fields[i].setCustomValidity("");
        if (fields[i].value.length < fields[i].minLength) {
            fields[i].setCustomValidity("กรุณากรอกอย่างน้อย " + fields[i].minLength + " ตัวอักษร");
        }
    }

    form.classList.add("was-validated");
    status.textContent = "กรุณากรอกข้อมูลให้ครบและถูกต้อง";
    status.className = "form-status mt-3 text-danger";

    if (form.checkValidity()) {
        var name = form.querySelector('[name="name"]').value;
        status.textContent = "ขอบคุณ " + name + " เราได้รับข้อมูลเรียบร้อยแล้ว";
        status.className = "form-status mt-3 text-success";
        form.reset();
        form.classList.remove("was-validated");
    }
    return false;
}

var newsForm = document.getElementById("newsletterForm");
if (newsForm) {
    newsForm.onsubmit = function() {
        return checkForm(newsForm, "newsletterStatus");
    };
}

var contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.onsubmit = function() {
        return checkForm(contactForm, "contactStatus");
    };
}
