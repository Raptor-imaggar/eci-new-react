import React from 'react';
import { Container,Button } from '../../globalStyles';
import { InfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,Heading,SubTitle,ImgWrapper,Img } from './InfoSection.elements';
import {Link} from "react-router-dom"

const InfoSection = ({primary,lightBg,imgStart,lightTopLine,topLine,lightText,
    lightTextDesc,description,buttonLabel,headLine,img,alt,start}) => {
    return (
        <>
          <InfoSec lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper> 
                            <TopLine LightTopLine={lightTopLine}>
                                {topLine}
                            </TopLine>
                            <Heading LightText={lightText}>{headLine}</Heading>
                            <SubTitle LightTextDesc={lightTextDesc}>{description}</SubTitle>
                            <Link to="/sign-up">
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
                                </Button>
                            </Link>
                        </TextWrapper>  
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </InfoColumn>  
                </InfoRow> 
            </Container>    
          </InfoSec>  
        </>
    )
}

export default InfoSection
