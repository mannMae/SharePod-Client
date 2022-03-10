import Board from "components/elements/Board";
import React from "react";

const BoardDetail = (props) =>{

    const userInfo = {
        nickname:"테스터",
    }

    const board = {
        title:"테스트용 게시글",
        videourl:"https://ak.picdn.net/shutterstock/videos/1072000261/preview/stock-footage-empty-green-screen-display-laptop-for-watching-and-paste-background-e-business-blog-or-gaming-app.webm",
        imgurl1:"https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_1280.jpg",
        imgurl2:"https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
        imgurl3:"https://cdn.pixabay.com/photo/2015/08/13/01/00/keyboard-886462_1280.jpg",
        contents:"뭐라고 뭐라고 써져 있는 부분",
        originprice:200000,
        dailyrentalfee:10000,
        nickname:"테스터",
        userimg:"https://media.vlpt.us/images/apphia39/post/fac4f95f-1589-4696-8cfd-53b27685206d/github.png",
        mapdata:"구로구",
        category:"디지털/가전",
        boardquility:"S",
        isliked:true,
        likecount:10,
        modifiedat:"2022-03-07T01:31:44+09:00",
    }

    return (
        <>
            <Board {...board} isMe={board}/>
        </>
    )
};



export default BoardDetail;
