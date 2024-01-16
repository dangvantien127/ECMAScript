// 1
users.forEach(function(user) {

    var listItem = document.createElement("li");

    listItem.classList.add("user_item", user.gender === 1 ? "male" : "female");

    listItem.textContent = `${user.id}-${user.name}- ${user.gender === 1 ? 'male' : 'female'}`;

    target.appendChild(listItem);
});
//2

//3
function convertToCamelCase() {

    var inputString = document.getElementById('inputString').value;

    var ddString = inputString.replace(/[^a-zA-Z0-9]/g, ' ');

    ddString = ddString.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });

    document.getElementById('output').textContent = ddString;
}
// 4
    let classRoom =[
        "nguyễn tiến duẩn",
        "Hoàng Xuân Hiếu",
        "Hồ Sỹ Hưng",
        "Nguyễn Đức Thuận",
        "đoàn Minh Tùng",
        "Hồ Sỹ Hùng",
        "Lê Trung Hiếu",
        "đoàn vua đep trai vua hoc gioi Hữu Quý"
    ]
        // Câu 1: Tách tên và họ riêng
    let tach = classRoom.map(fullName => {
        let names = fullName.split(' ');
        return {
            ho: names.slice(-1).join(' '),  
            ten: names.slice(0, -1).join(' ') 
        };
    });
    console.log("Câu 1:", tach);

    // Câu 2: Thêm một sinh viên vào vị trí bất kỳ
    let newSv = "Nguyễn Văn A";
    let vtAdd = 3;  
    classRoom.splice(vtAdd, 0, newSv);
    console.log("Câu 2:", classRoom);

    // Câu 3: Xoá một sinh viên khỏi mảng
    let deleteSv = "Hồ Sỹ Hưng";
    classRoom = classRoom.filter(student => student !== deleteSv);
    console.log("Câu 3:", classRoom);

    // Câu 4: Tìm kiếm theo tên, không chứa dấu
    let tim = "hieu";  
    let timSv = classRoom.filter(student => student.toLowerCase().includes(tim.toLowerCase()));
    console.log("Câu 4:", timSv);

