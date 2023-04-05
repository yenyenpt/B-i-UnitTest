const app = require('./app')


describe('Đây là nhóm test case dành cho hàm Login()', () => {
    test('TC01: Tên đăng nhập bị bỏ rỗng', () => {
        expect(app.login("", "12345")).toMatchObject({isSuccess: false, message: "Tên đăng nhập và mật khẩu không được bỏ trống!"})
    })
    test('TC02: Mật khẩu bị bỏ rỗng', () => {
        expect(app.login("yen", "")).toMatchObject({isSuccess: false, message: "Tên đăng nhập và mật khẩu không được bỏ trống!"})
    })
  
    test('TC03: Mật khẩu có độ dài < 6 ký tự', () => {
        expect(app.login("khachuong", "12345")).toMatchObject({isSuccess: false, message: "Mật khẩu phải lớn hơn 6 ký tự!"})
    })

    test('TC06: Mật khẩu có độ dài > 20 ký tự', () => {
        expect(app.login("khachuong", "127929947844443222345")).toMatchObject({isSuccess: false, message: "Mật khẩu phải bé hơn 20 ký tự!"})
    })
    
    
    test('TC04: Kiểu dữ liệu truyền vào bị sai', () => {
        expect(app.login(399944, "12345678")).toMatchObject({isSuccess: false, message: "Sai định dạng dữ liệu!"})
    })
    
    test('TC05: Mật khẩu bị trùng với tên đăng nhập', () => {
        expect(app.login("399944", "399944")).toMatchObject({isSuccess: false, message: "Tên đăng nhập và mật khẩu trùng nhau!"})
    })

    test('TC06: Mật khẩu >= 6ký tự và Mật khẩu <= 20 ký tự', () => {
        expect(app.login("1234809","yen081003")).toMatchObject({isSuccess: false, message: "Đăng nhập mật khẩu hợp lý!"})
    })

    // test('TC07: Tên đăng nhập >= 6 ký tự và Tên đăng nhập <= 20', () => {
    //     expect(app.login("Yen081203")).toMatchObject({isSuccess: false, message: "Tên đăng nhập hợp lý!"})
    // })



})

describe("Đây là nhóm test case cho hàm SignUp()",() => {
    test('TC01: Tên đăng nhập, mật khẩu và số điện thoại bị bỏ trống', () =>{
        expect(app.SignUp("", "081203", "0976198642")).toMatchObject({ isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc số điện thoại không được bỏ trống!" })
        expect(app.SignUp("yenyen", "", "0238924748")).toMatchObject({ isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc số điện thoại không được bỏ trống!" })
        expect(app.SignUp("yenyen", "12345", "")).toMatchObject({ isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc số điện thoại không được bỏ trống!" })
    })

    test('TC02: Tên đăng nhập và mật khẩu < 5 ký tự ', () =>{
        expect(app.SignUp("nhi", "0818")).toMatchObject({ isSuccess: false, message: "Tên đăng nhập và mật khẩu lớn hơn 5 ký tự!" })       
    })

    test('TC03: Chứa các ký tự đặc biệt', () => {
        expect(app.SignUp("khachu//ong", "123 45999", "0823059750")).toMatchObject({isSuccess: false, message: "Tên đăng nhập mật khẩu và số điện thoại không được chứa ký tự đặc biệt"})
    })

    test('TC03: Nhập số điện thoại không đúng 10 số; số điện thoại không phải số 0 ở đầu và phải là dạng số', () => {
        expect(app.SignUp("yenyen", "123454444", "02323066")).toMatchObject({isSuccess: false, message: "Số điện thoại không đúng định dạng"})
        expect(app.SignUp("yenyen", "12345678", "2092305911111")).toMatchObject({isSuccess: false, message: "Số điện thoại không đúng định dạng"})
        expect(app.SignUp("nhinhi", "12345678", "huiuw")).toMatchObject({isSuccess: false, message: "Số điện thoại không đúng định dạng"})

    })
    
    test('TC04: Tài khoản và mật khẩu trùng nhau', () => {
        expect(app.SignUp("yenyen", "yenyen", "0823059756")).toMatchObject({isSuccess: false, message: "Tên đăng nhập và mật khẩu không được trùng nhau"})
    })
})

describe('Đây là nhóm test case dành cho hàm đổi mật khẩu',() =>{
    test('TC01: Tên tài khoản, mật khẩu hoặc mật khẩu mới bị bỏ rỗng', () => {
        expect(app.changePassword("", "081203", "yen081203")).toMatchObject({ isSuccess: false, message: "Tên đăng nhập, mật khẩu cũ hoặc mật khẩu mới không được bỏ trống!" })
        expect(app.changePassword("yenyen", "", "nhi070709")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu cũ hoặc mật khẩu mới không được bỏ trống!"})
        expect(app.changePassword("nhinhi", "nhi08982", "")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu cũ hoặc mật khẩu mới không được bỏ trống!"})
    })

    test('TC02: Tên tài khoản, mật khẩu hoặc mật khẩu mới > 6 ký tự', () => {
        expect(app.changePassword("yenyen", "08103", "09682")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc mật khẩu mới phải lớn hơn 6 ký tự"})
        expect(app.changePassword("nhi", "09", "802")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc mật khẩu mới phải lớn hơn 6 ký tự"})
        expect(app.changePassword("thnh", "08", "2803")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc mật khẩu mới phải lớn hơn 6 ký tự"})

    })

    // test('TC03: Tên tài khoản, mật khẩu hoặc mật khẩu mới < 20 ký tự', () => {
    //     expect(app.changePassword("phamthiyenphamthiy", "0810368629", "09679709282")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc mật khẩu mới phải bé hơn 20 ký tự"})
    //     expect(app.changePassword("phamthiyenthanhphanth", "806789056", "345678965")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc mật khẩu mới phải bé hơn 20 ký tự"})
    //     expect(app.changePassword("thanht", "3456789876543234567", "765432345678987654")).toMatchObject({isSuccess: false, message: "Tên đăng nhập, mật khẩu hoặc mật khẩu mới phải bé hơn 20 ký tự"})

    // })
    test('TC03: Tên đăng nhập chứa các ký tự đặc biệt', () => {
        expect(app.changePassword("khachu//ong", "567!!!1!78!", ">?>?5678!!")).toMatchObject({isSuccess: false, message: "Tên đăng nhập không được chứa ký tự đặc biệt"})
    })

    test('TC04: Tài khoản và mật khẩu mới trùng nhau', () => {
        expect(app.changePassword("duongcuong", "12345678", "duongcuong")).toMatchObject({isSuccess: false, message: "Tài khoản và mật khẩu không được trùng nhau"})
    })

    // test('TC05: Kiểu dữ liệu truyền vào bị sai', () => {
    //     expect(app.changePassword(123, "1231238", "08638678")).toMatchObject({ isSuccess: false, message: "Sai định dạng dữ liệu!" })
    // })
})