/* 轮播背景图片 */
    $(function () {
        $.backstretch([  
          "/images/background/1.jpg?width={width}&height={height}",
          "/images/background/2.jpg?width={width}&height={height}",
          "/images/background/3.png?width={width}&height={height}",
          "/images/background/4.png?width={width}&height={height}",
          "/images/background/5.png?width={width}&height={height}",
          "/images/background/6.jpg?width={width}&height={height}",
          "/images/background/7.jpg?width={width}&height={height}",
          "/images/background/8.jpg?width={width}&height={height}",
        ], { duration: 30000, fade: 1500 });  
    });
  