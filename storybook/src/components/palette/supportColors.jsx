import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

import palette from '../../global/palette';

/* Theme overwrite */
const backgroundColor = theme('mode', {
  light: '#FFFFFF',
  dark: '#222'
});

const font = theme('fontBase', {
  fontFamily: '14px Arial, Roboto, Helvetica, sans-serif',
});


// CSS for the layout of the page
const Container = styled.div`
  font: ${font};
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-between;
  background-color: ${backgroundColor};
  padding: 20px;
`

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

const MainColorColumn = styled.div`
  width: 100%;
  margin: 0 auto 20px;
  display: flex;

  /* align-items: flex-start; */
  border: 1px solid lightgray;
  padding: 10px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const LeftBox = styled.div`
  width: 50%;
  /* min-height: 155px; */
  display: flex;
  flex-flow: wrap;
  /* align-items: flex-end; */
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`
const Item = styled.div`
  /* display: inline; */
  min-width: 200px;
  margin-bottom: 5px;

  & span {
    margin: 0;
    padding: 0;
    font-size: 13px;
  }
`

const RightBox = styled.div`
  width: 50%;
  display: flex;
  /* align-items: flex-start; */
  flex-direction: column;
  @media (max-width: 768px) {
  width: 100%;
  }
`

const Square = styled.div`
  height: 16px;
  width: 16px;
  display: inline-block;
  background-color: ${ props => props.color };
  border-radius: 4px;
  box-sizing: border-box;
`

const Color = styled.div`
  /* display: block; */
  width: 60px;
  height: 135px;
  background-color: ${ props => props.color };
  border-radius: 8px;
  margin-right: 10px;
  box-sizing: border-box;
  @media (max-width: 768px) {
  width: 100%;
  height: 82px;
  }
`

const ListColors = ({colors}) => (
  colors.map(color => (
    <MainColorColumn key={color.key}>
      <LeftBox>
        <Color color={color.hex} />
        <p><strong>HEX:</strong> {color.hex} <br /> <strong>name:</strong> {color.name}</p>
      </LeftBox>
      <RightBox>
        <Item><span><Square color={color.hexShaded20} /> {color.hexShaded20}</span></Item>
        <Item><span><Square color={color.hexShaded40} /> {color.hexShaded40}</span></Item>
        <Item><span><Square color={color.hexShaded60} /> {color.hexShaded60}</span></Item>
        <Item><span><Square color={color.hexTint20} /> {color.hexTint20}</span></Item>
        <Item><span><Square color={color.hexTint40} /> {color.hexTint40}</span></Item>
        <Item><span><Square color={color.hexTint60} /> {color.hexTint60}</span></Item>
      </RightBox>
    </MainColorColumn>
  ))
);

class Colors extends React.Component {
  render() {
    return (

      <ListColors colors={this.props.palette} />
    );
  }
}


class SupportColors extends React.Component {
  render() {
    return (
      <ThemeProvider theme={{ theme: 'light', fontBase: 'fontFamily' }}>
      <Container>

          <h1>McKesson Palette</h1>

          <p>We use color as a visual way to communicate our brand. We have three
          palettes to pull from: primary, secondary and support. This variety allows
          us to create visually interesting materials while remaining consistent to
          who we are.</p>
          <p>&nbsp;</p>

          <Wrapper>
            <h3>McKesson Support Palette</h3>
            <p>Our support colors complement our primary palette. They are used for covers, backgrounds and graphic elements. The use of tints and shades also adds visual interest to information graphics, such as charts, graphs and illustrations.</p>
            <p>You can use three tints and three shades in 60%, 40% and 20% increments of any given color are used.</p>


            <Colors palette={palette.support}/>

        </Wrapper>

      </Container>
      </ThemeProvider>
    );
  }
}

// const PrimaryColors = (props) => (
//
//
// );

export default SupportColors;
