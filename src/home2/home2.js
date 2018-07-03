// $(".arrow-left").click(
//     function left(){
//         var old =parseInt($(".photo").css("left"));
//         var newLeft = old - old + "px";
//         $(".photo").css({
//             left:newLeft
//         });
//     debugger

//     }
// );

// $(".arrow-right").click(
//     function(){
//         var old = parseInt($(".photo").css("left"));
//         var newRight = old + old + "px";
//         debugger
//         $(".photo").css({
//             left:newRight
//         });
//     }
// );

$(".arrow-left").click(
    function (){
        $(".photo img").attr("alt");
        console.log($(".photo img").attr("alt"));
        debugger
    }
);



