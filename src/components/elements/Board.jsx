import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import Button from "./Button";
import Image from "./Image";
import Video from "./Video";

const Board = (props) =>{

    const dispatch = useDispatch();
    const [ selectedImg, SetSelectedImg ] = useState(null);
    const [ likeCnt, setLikeCnt ] = useState(props.likecount);
    const [ userLiked, setUserLiked] = useState(props.isliked);
    const boardId = window.location.href.split('/')[4]

    
    const handleSelectedImg = (e)=>{
        SetSelectedImg(e.target.value);
    }

    useEffect(()=>{
        setUserLiked(props.isliked);
    }, [props.isliked])

    const addLike = () => {
        // dispatch(fetchLike(boardId))
        setUserLiked(true);
        setLikeCnt(likeCnt +1);
    }

    const cancelLike = () => {
        // dispatch(fetchLike(boardId));
        setUserLiked(false);
        setLikeCnt(likeCnt - 1);
    };

    const today = moment().format();
    const modifiedAt = moment(props.modifiedat).date();
    const timeDiff = Math.abs(moment(today).date() - modifiedAt);
    console.log(timeDiff)

    return(
        <BoardWrapper>
            <SelectBox>
                <RadioBox>
                    <label style={{
                        display:'inline-block',
                        backgroundSize:'cover',
                        width:'68px',
                        height:'68px',
                        overflow:'hidden',
                        borderRadius:'8px',
                    }}>
                        <Video src={props.videourl}/>
                        <input type="radio" value="0" name="show" hidden
                            onChange={handleSelectedImg}/>
                    </label>
                    <label style={{
                        display:'inline-block',
                        background:`url("${props.imgurl1}")`,
                        backgroundSize:'cover',
                        width:'68px',
                        height:'68px',
                        borderRadius:'8px',
                    }}>
                        <input type="radio" value="1" name="show" hidden
                            onChange={handleSelectedImg}/>
                    </label>
                    <label style={{
                        display:'inline-block',
                        background:`url("${props.imgurl2}")`,
                        backgroundSize:'cover',
                        width:'68px',
                        height:'68px',
                        borderRadius:'8px',
                    }}>
                        <input type="radio" value="2" name="show" hidden
                            onChange={handleSelectedImg}/>
                    </label>
                    <label style={{
                        display:'inline-block',
                        background:`url("${props.imgurl3}")`,
                        backgroundSize:'cover',
                        width:'68px',
                        height:'68px',
                        borderRadius:'8px',
                    }}>
                        <input type="radio" value="3" name="show" hidden
                            onChange={handleSelectedImg}/>
                    </label>
                </RadioBox>
                <ZoomBox>
                    {selectedImg==="0"&&(<Video src={props.videourl} controls="true"/>)}
                    {selectedImg==="1"&&(<Image shape="rectangle" src={props.imgurl1}/>)}
                    {selectedImg==="2"&&(<Image shape="rectangle" src={props.imgurl2}/>)}
                    {selectedImg==="3"&&(<Image shape="rectangle" src={props.imgurl3}/>)}
                </ZoomBox>
            </SelectBox>
            <ProductBox>
                <div >
                    <div>
                        <h2>{props.title}</h2>
                        <p><strong>{(props.dailyrentalfee).toLocaleString()}</strong> 원/1일 대여 기준</p>
                    </div>
                    <Horizon/>
                    <div>
                        <span className="like">❤ {likeCnt}</span>
                        <span className="time">🕒 {timeDiff}일 ni전</span>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            {userLiked?<Button _onClick={cancelLike}><span style={{color:"red"}}>❤</span> 찜하기</Button>
                            :<Button _onClick={addLike}><span style={{}}>❤</span> 찜하기</Button>}
                        </li>
                        <li>
                            <Button>
                                📦 거래 요청하기
                            </Button>
                        </li>
                        <li>
                            <Button>
                                🗨 1 : 1 채팅하기
                            </Button>
                        </li>
                    </ul>
                </nav>
                <WriterInfoBox>
                    <h3>판매자 정보</h3>
                    <div
                        style={{
                            display:'flex',
                        }}
                    >
                        <Image src={props.userimg}/>
                        <div
                            style={{
                                display:'flex',
                                flexDirection:"column",
                                justifyContent:"space-around",
                                marginLeft:"16px",
                            }}
                        >
                            <span>{props.nickname}</span>
                            <span>🌐 서울시 {props.mapdata}</span>
                        </div>
                    </div>
                </WriterInfoBox>
            </ProductBox>
        </BoardWrapper>
    )
}

Board.defaultProps = {

};

const BoardWrapper = styled.section`
    padding-top:70px;
    display:flex;
`

const SelectBox = styled.div`
    display:flex;
`;

const RadioBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-left:151px;
    margin-right:30px;
`
const ZoomBox = styled.div`
    display:inline-block;
    width:457px;
    height:360px;
`

const ProductBox = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin-left:30px;
    & h2{
        font-size:24px;
        color:#777777;
        margin-bottom:6px;
    }
    & nav ul li{
        display:inline-block;
        margin-right:30px;
    }
    & strong {
        font-size:36px;
        font-weight:700;
        color:#777777;
    }
    & .like, .time{
        font-size:14px;
        margin-right:10px;
    }
`

const Horizon = styled.div`
    width:263px;
    height:1px;
    background-color:#c4c4c4;
    margin:12px 0px;
`

const WriterInfoBox = styled.div`
    padding: 12px 340px 14px 22px;
    border: 1px solid #f0f0f0;
`

export default Board;