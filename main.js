document.addEventListener('DOMContentLoaded',function(){
    // mặc định vào là phải có thằng này , bởi vì nó sẽ đợi load hết html mới thực hiện javascript, chứ nếu k html load chưa kịp mà chạy js sẽ bị lỗi sml
    // id thì trả về 1 cái node
    // class vs name thì trả về 1 mảng
    const btn = document.querySelector('.btn-menu');
    const menu = document.querySelector('.menu');
    
    btn.addEventListener('click',function(){
        // khi mà click vào cái nút , sẽ add cho tk menu 1 cái class active
        menu.classList.toggle('active');
        // add là sẽ thêm 1 class
        //remove là sẽ xóa 1 class
        // toglle kiểu như 1 cái công tắc , đang mở mà nhấn là nó sẽ tắt , tắt mà nhấn nó sẽ mở
    });



    // btn.onclick = function(){

    // }
});