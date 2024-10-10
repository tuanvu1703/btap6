const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nhập chiều rộng hình chữ nhật: ', (width) => {
    rl.question('Nhập chiều dài hình chữ nhật: ', (height) => {
        const area = width * height;
        console.log(`Diện tích hình chữ nhật là: ${area}`);
        rl.close();
    });
}); 

