
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return 2 * (this.length + this.width);
    }

    drawRectangle() {
        const canvas = document.getElementById('myCanvas');
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillRect(0, 0, this.length, this.width);
    }
}

// Khai báo và khởi tạo một đối tượng kiểu Rectangle
const rectangle = new Rectangle(5, 3);

// Hiển thị hình chữ nhật trên màn hình web
rectangle.drawRectangle();

// Thay đổi chiều dài và chiều rộng của hình chữ nhật
rectangle.length = 7;
rectangle.width = 4;

// In ra màn hình diện tích và chu vi của hình chữ nhật đó
console.log('Diện tích:', rectangle.getArea());
console.log('Chu vi:', rectangle.getPerimeter());
