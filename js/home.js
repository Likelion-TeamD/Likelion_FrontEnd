var text_farm = document.getElementById("text-farm");


function changeText() {
    text_farm.innerHTML = "Farm";
}

function getCurrentTime() {
    const currentTime = new Date();
    return currentTime.toISOString(); // ISO 8601 형식으로 시간을 문자열로 변환
}

// text setting
$(document).ready(function () {
    var text = $("#text_farm");
    // changeText();
    // $("#text_farm").text("new text");
    text.text("i");

    // post
    $.ajax({
        url: 'https://4a5b-115-94-178-52.ngrok-free.app/farmin/posts/',
        type: 'POST',
        data: {
            "id": "",
            "title": text.text(),
            "content": "a",
            "create_date": getCurrentTime(),
            "modify_date": null,
            "author": 1,
            "like": [
                1
            ],
            "Post_pic": []
        },

    }).then((data, textStatus, jqXHR) => {
        console.log(data);
    }, (jqXHR, textStatus, errorThrown) => {
        /*pass*/
    })



    // // GET 요청을 사용하여 데이터 가져오기
    // $.ajax({
    //     url: 'https://ad38-115-94-178-52.ngrok-free.app/farmin/list/',
    //     type: 'GET',
    //     dataType: 'json', // 응답 데이터 타입을 JSON으로 설정
    // }).then((data, textStatus, jqXHR) => {
    //     // 성공적으로 데이터를 받아온 경우 실행되는 부분

    //     // 데이터의 첫 번째 항목의 title을 가져와서 제목을 붙일 요소에 넣기
    //     const firstItemTitle = data.title; // 데이터의 첫 번째 항목의 title 가져오기
    //     $('#text_farm').text(firstItemTitle); // 제목을 해당 요소에 붙이기
    // }).fail((jqXHR, textStatus, errorThrown) => {
    //     // 요청 실패 시 실행되는 부분
    //     console.error('오류 발생:', errorThrown);
    // });


    // GET 요청을 사용하여 데이터 가져오기
    $.ajax({
        url: ' https://4a5b-115-94-178-52.ngrok-free.app/farmin/list/',
        type: 'GET',
        dataType: 'json', // 응답 데이터 타입을 JSON으로 설정
        headers: {
            'Access-Control-Allow-Origin': '*', // 또는 허용하려는 도메인을 지정
            // 더 필요한 헤더 설정
          }
    }).then((data, textStatus, jqXHR) => {
        // 성공적으로 데이터를 받아온 경우 실행되는 부분

        // id가 10인 객체의 title 찾아서 출력
        const itemWithId10 = data.find(item => item.id === 0);
        if (itemWithId10) {
            const title = itemWithId10.title;
            console.log('Title for id 10:', title);
            text.text(title.text());

        } else {
            console.log('No item found with id 10.');
        }
    }).fail((jqXHR, textStatus, errorThrown) => {
        // 요청 실패 시 실행되는 부분
        console.error('오류 발생:', errorThrown);
    });




});
