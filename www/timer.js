    //タイマー起動追加分
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log("ready");
        media = new Media (getPath() + srcFile , onSuccess, onError);
    }

    function getPath() {
        var str = location.pathname;
        var i = str.lastIndexOf('/');
        return str.substring(0,i+1);
    }

    function playSound(){
        // play the media file one time.
        media.play({numberOfLoops: 0});

    }

    function pauseSound(){
        if (media) {
            media.pause();
        }
    }

    function stopSound(){
        if (media) {
            media.stop();
        }
    }

    function onSuccess(){
        console.log("Successfully initialize a media file.");
    }

    function onError(error){
        console.log("Failed to initialize a media file. [ Error code: " + error.code + ", Error message: " + error.message + "]");
    }

    
        //1000ミリ秒毎にcont_down関数を呼び出す
    function count_start(){
      if(timerUseFlg == false){
        stp = setInterval("count_down()",1000);
        timerUseFlg = true;
      }
    }

    //カウンドダウン表示
    function count_down(){
        if(count === 1){
            var display = document.getElementById("default");
            display.innerHTML = "TIME UP!";
            clearInterval(stp);
            //playSound();
        } else {
            count--;
            min = parseInt(count / 60);
            sec = count % 60;
            var count_down = document.getElementById("default");
            count_down.innerHTML = ("0"+min).slice(-2) +"：" + ("0"+sec).slice(-2);
        }
    }

    //ストップボタンクリック時のアクション
    function count_stop(){
        clearInterval(stp);
        timerUseFlg = false;
        i = 0;
    }

    //リセットボタンクリック時のアクション
    function count_reset(){
        count = 180;
        min = parseInt(count / 60);
        sec = count % 60;
        i = 0;
        var count_down = document.getElementById("default");
        count_down.innerHTML = ("0"+min).slice(-2) +"：" + ("0"+sec).slice(-2);
        timerUseFlg = false;
    }


    //タイマーリセット
    function page13_load(){
        count_stop();
        count_reset();
        timerUseFlg = false;
        //document.querySelector('#navigator').pushPage('page13.html');
    }
