import styled from 'styled-components';

export const ImageComponent = styled.div`
    height: 400px;
    width: 500px;
    margin:auto;
    background: url('../assets/images/wbunderbuild.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    @media(max-width:992px) {
        width: 400px;
    }
     @media(max-width:566px) {
        width: 400px;
    }
}`;
export const TitleComponent = styled.h1`
    font-size: 40px;
    color: #4654a3;
    text-align: center;
    font-weight: bold;
}`;

export const SocialLinks = styled.div`
    height: max-content;
    width: max-content;
    margin:auto;
    padding:10px 0;
}`;

export const IconArea = styled.div`
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
}`;
export const Icon = styled.i`
    height: 70px;
    width: 70px;
    color: #4654a3;
}`;
export const ParagraphComponent = styled.p`
    height: max-content;
    width: 800px;
    margin:auto;
    padding 20px;
    
    @media(max-width:992px) {
        width: 600px;
    }
     @media(max-width:566px) {
        width: 400px;
    }
}`;
