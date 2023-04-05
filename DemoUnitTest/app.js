// Trong tài liệu đặc tả

// Mô tả tính đăng nhập: Màn hình đăng nhập gồm 2 trường tên đăng nhập và mật khẩu. 
//Mật khẩu không được trùng với tên đăng nhập. Tên đăng nhập phải tối thiểu 6 ký tự
const users = [
    { username: "yenyen", password: "081203", phoneNumber: "0976198642" },
    { username: "nhinhi", password: "140707", phoneNumber: "0862969367" },
  ];
  

function login(username, password) {

    if (username.length == 0 || password.length == 0) {
        return {isSuccess: false, message: "Tên đăng nhập và mật khẩu không được bỏ trống!"}
    }
    if(username == password){
        return {isSuccess: false, message: "Tên đăng nhập và mật khẩu trùng nhau!"}
    }
    
    if (password.length < 6) {
        return {isSuccess: false, message: "Mật khẩu phải lớn hơn 6 ký tự!"}
    }

    if(typeof username != "string"){
        return {isSuccess: false, message: "Sai định dạng dữ liệu!"}
    }

    if (password.length > 20) {
        return {isSuccess: false, message: "Mật khẩu phải bé hơn 20 ký tự!"}
    }

    if(typeof username != "string"){
        return {isSuccess: false, message: "Sai định dạng dữ liệu!"}
    } 

    if (username.length >= 6 || password.length <= 20) {
        return {isSuccess: false, message: "Đăng nhập mật khẩu hợp lý!"}
    } 

    
}

function SignUp(userName,passWord,phoneNumber){

    newUser={
        userName: userName,
        passWord: passWord,
        phoneNumber: phoneNumber,
    };
    if(userName.length == 0 || passWord.length == 0 || phoneNumber == 0){
        return{isSuccess: false,message: "Tên đăng nhập, mật khẩu hoặc số điện thoại không được bỏ trống!"}
    };

    if(userName.length <= 5 || passWord.length <= 5){
        return{isSuccess: false,message: "Tên đăng nhập và mật khẩu lớn hơn 5 ký tự!"}
    };

    if(!passWord.match(/^[A-Za-z0-9]*$/) || !userName.match(/^[A-Za-z0-9]*$/)){
        return{isSuccess: false,message: "Tên đăng nhập mật khẩu và số điện thoại không được chứa ký tự đặc biệt"}
    };

    if(phoneNumber.length != 10 || phoneNumber.charAt(0) != "0" || isNaN(phoneNumber)){
        return{isSuccess: false,message: "Số điện thoại không đúng định dạng"}
    };

    if(userName == passWord){
        return{isSuccess: false,message: "Tên đăng nhập và mật khẩu không được trùng nhau"}
    };
}

function changePassword(userName,passWord,newPassword){
    newUser={
        userName:userName,
        passWord:passWord,
        newPassword:newPassword,
    };
    if(userName.length == 0 || passWord.length == 0 || newPassword.length == 0){
        return{isSuccess: false,message: "Tên đăng nhập, mật khẩu cũ hoặc mật khẩu mới không được bỏ trống!"}
    }

    if(userName.length <= 6 || passWord.length <= 6 || newPassword.length <= 6){
        return{isSuccess: false,message: "Tên đăng nhập, mật khẩu hoặc mật khẩu mới phải lớn hơn 6 ký tự"}
    }

    if(userName.length >= 20 || passWord.length >= 20 || newPassword.length >= 20){
        return{isSuccess: false,message: "Tên đăng nhập, mật khẩu hoặc mật khẩu mới phải bé hơn 20 ký tự"}
    }

    if(!userName.match(/^[A-Za-z0-9]*$/)){
        return{isSuccess: false,message: "Tên đăng nhập không được chứa ký tự đặc biệt"}
    };

    if (userName == newPassword) {
        return {isSuccess: false,message: "Tài khoản và mật khẩu không được trùng nhau"}        
    };

    // if (typeof userName != "string" || typeof passWord != "string" || typeof newPassword != "string") {
    //     return {isSuccess: false,message: "Sai định dạng dữ liệu!"}
    // };
    
        

}



module.exports.login = login
module.exports.SignUp= SignUp
module.exports.changePassword = changePassword

// feature: tính năng

// Unit test cho function login

// Sẽ phải viết các Test case - các kịch bản test
//1 Test case cần bao gồm

// 1. Tình huống
// 2. Input data
// 3. Kết quả mong đợi


// TC01: Kiểm tra đăng nhập sai mật khẩu
// 1. Tình huống: Người dùng truyền vào tài khoản đúng nhưng mật khẩu sai 
// 2. Input: username = khachuong và password = abc
// 3. Kết qủa mong đợi (Expected result): {isSuccess: false, message: "Sai mật khẩu, vui lòng thử lại!"}

// Kết luận: Not passed (không đạt) - hay còn gọi là failed
// console.log(login("khachuong", "abc"))