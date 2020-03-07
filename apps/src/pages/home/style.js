import styled from 'styled-components';


export const HomeWrapper = styled.div`
overflow:hidden;
width:960px;
margin:0 auto;
`

export const HomeLeft = styled.div`
magin-left:15px;
padding-top:30px;
width:625px;
float:left;
.banner-img{
    width:625px;
    height:270px;
}
`

export const HomeRight = styled.div`
width:280px;
float:right;
`;

export const TopicWrapper = styled.div`
overflow:hidden;
padding:20px 0 10px 0;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
a{
    text-decoration:none;
    float:left;
    margin-top:10px;
    padding-left:40px;
    color:#2f2f2f;
}
`;


export const TopicItem = styled.div`
float:left;
height:32px;
line-height:32px;
margin-left:18px;
margin-bottom:18px;
font-size:14px;
background:#f7f7f7;
color:#000;
border:1px solid #dcdcdc;
border-radius:4px;
.topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
    
}

`;

export const ListItem = styled.div`
padding:20px 0;
border-bottom:1px solid #dcdcdc;
overflow:hidden;
.pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:4px;
}
`;

export const ListInfo = styled.div`
width:500px;
float:left;
.title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
}
.desc{
    line-height:24px;
    font-size；13px;
}
`;

export const RecommendWrapper = styled.div`
margin:30px 0;
width:280px;
`;

export const RecommendItem = styled.div`
width:280px;
height:51px;
padding-top:5px;
background:url('${(props) => props.imgUrl}');
background-repeat:no-repeat;
background-size:contain;
`;

export const WriterWrpper = styled.div`
width:278px;
border:1px solid #dcdcdc;
border-radius:3px;
height:300px;
line-height:300px;
text-align:center;

`

export const LoadMore = styled.div`
width: 100%;
height: 20px;
margin: 30px auto 60px;
padding: 10px 15px;
text-align: center;
font-size: 15px;
line-height:20px;
border-radius: 20px;
cursor:pointer;
color:
#fff;
background-color: #a5a5a5;
display: block;
`

export const BackTop = styled.div`
position:fixed;
right:100px;
bottom:100px;
width:60px;
height:60px;
line-height:60px;
text-align:center;
border:1px solid #CCC;
cursor:pointer;

:hover:before{
    content: attr(data-content); /*动态获取数据*/
            position: absolute;
            left: 22%;
            width:70px;
            height: 40px;
            font-size: 18px;
            line-height: 40px;
            background-color:#333;
            margin-left: 60px;
            font-size:14px;
            margin-top:10px;
            border-radius: 10%;
            color:#ccc;
}

:hover:after{
    content: "";
    position: absolute;
    left: 100%;
    top: 45%;
    margin: -10px 0 0 -10px;

    
    border:15px solid  transparent;
    border-right-color: #333;
}
`