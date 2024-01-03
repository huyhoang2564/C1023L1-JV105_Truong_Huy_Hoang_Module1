let students = [];

function displayStudents() {
    const table = document.getElementById("studentTable");
    // Xóa các dòng hiện tại trong bảng
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    students.forEach(student => {
        const row = table.insertRow(-1);
        row.insertCell().textContent = student.maHocVien;
        row.insertCell().textContent = student.ten;
        row.insertCell().textContent = student.lop;
        row.insertCell().textContent = student.email;
        row.insertCell().textContent = student.ngaySinh;
        row.insertCell().textContent = student.module;
    });
}

function isExistingStudent(maHocVien) {
    return students.some(student => student.maHocVien === maHocVien);
}

function addStudent() {
    const maHocVien = prompt("Nhập mã học viên:");
    if (isExistingStudent(maHocVien)) {
        alert("Mã học viên đã tồn tại.");
        return;
    }

    const ten = prompt("Nhập tên học viên:");
    const lop = prompt("Nhập lớp:");
    const email = prompt("Nhập email:");
    const ngaySinh = prompt("Nhập ngày sinh (dd/mm/yyyy):");
    const module = parseInt(prompt("Nhập module (1-6):"));

    students.push({ maHocVien, ten, lop, email, ngaySinh, module });

    displayStudents();
}

function editStudent() {
    const maHocVien = prompt("Nhập mã học viên cần sửa:");

    const index = students.findIndex(student => student.maHocVien === maHocVien);
    if (index === -1) {
        alert("Mã học viên không tồn tại.");
        return;
    }

    const ten = prompt("Nhập tên học viên:");
    const lop = prompt("Nhập lớp:");
    const email = prompt("Nhập email:");
    const ngaySinh = prompt("Nhập ngày sinh (dd/mm/yyyy):");
    const module = parseInt(prompt("Nhập module (1-6):"));

    students[index] = { maHocVien, ten, lop, email, ngaySinh, module };

    displayStudents();
}

function deleteStudent() {
    const maHocVien = prompt("Nhập mã học viên cần xóa:");

    const index = students.findIndex(student => student.maHocVien === maHocVien);
    if (index === -1) {
        alert("Mã học viên không tồn tại.");
        return;
    }

    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa học viên này?");
    if (confirmDelete) {
        students.splice(index, 1);
        displayStudents();
    } else {
        alert("Hủy xóa học viên.");
    }
}

// Chạy chương trình
displayStudents();