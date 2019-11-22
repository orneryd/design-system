import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';


const backgroundColor = theme('mode', {
  light: '#FFFFFF',
  dark: '#222'
});


// CSS for the layout of the page
const Container = styled.div`
  width: 80%;
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
  flex-wrap: wrap;
  border: 1px solid lightgray;
  padding: 10px;
`

const LeftBox = styled.div`
  width: 50%;
  min-height: 165px;
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
  display: block;
  min-width: 200px;
  margin-bottom: 5px;
`

const RightBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  width: 100%;
  }
`

const Circle = styled.div`
  height: 20px;
  width: 20px;
  display: inline-block;
  background-color: ${ props => props.color };
  border-radius: 3px;
  box-sizing: border-box;
`

const Color = styled.div`
  /* display: block; */
  width: 60px;
  height: 164px;
  background-color: ${ props => props.color };
  border-radius: 8px;
  margin-right: 10px;
  box-sizing: border-box;
`

const palette = {
     primary: [
       {
         key: 1,
         name: 'blue',
         hex: '#005A8C',
         hexShaded60: '#002438',
         nameShaded60: 'palette__brand_blueShaded60',
         hexShaded40: '#003654',
         nameShaded40: 'palette__brand_blueShaded40',
         hexShaded20: '#004870',
         nameShaded20: 'palette__brand_blueShaded20',
         hexTint60: '#002438',
         nameTint60: 'palette__brand_blueShaded60',
         hexTint40: '#003654',
         nameTint40: 'palette__brand_blueShaded40',
         hexTint20: '#004870',
         nameTint20: 'palette__brand_blueShaded20'
       },
       { key: 2,
         name: 'orange',
         hex: '#EF8200',
         hexShaded60: 'darkorange',
         nameShaded60: 'palette__brand_blueShaded60',
         hexShaded40: '#003654',
         nameShaded40: 'palette__brand_blueShaded40',
         hexShaded20: '#004870',
         nameShaded20: 'palette__brand_blueShaded20',
         hexTint60: '#002438',
         nameTint60: 'palette__brand_blueShaded60',
         hexTint40: '#003654',
         nameTint40: 'palette__brand_blueShaded40',
         hexTint20: '#004870',
         nameTint20: 'palette__brand_blueShaded20'
      }
    ]
}

const ListColors = ({colors}) => (
  colors.map(color => (
    <MainColorColumn key={color.key}>
      <LeftBox>
        <Color color={color.hex} />
        <p><strong>hex:</strong> {color.hex} <br /> <strong>name:</strong> {color.name}</p>
      </LeftBox>
      <RightBox>
        <Item><span><Circle color={color.hexShaded20} /> Hex: {color.hexShaded20}</span></Item>
        <Item><span><Circle color={color.hexShaded40} /> Hex: {color.hexShaded40}</span></Item>
        <Item><span><Circle color={color.hexShaded60} /> Hex: {color.hexShaded60}</span></Item>
        <Item><span><Circle color={color.hexTint20} /> Hex: {color.hexTint20}</span></Item>
        <Item><span><Circle color={color.hexTint40} /> Hex: {color.hexTint40}</span></Item>
        <Item><span><Circle color={color.hexTint60} /> Hex: {color.hexTint60}</span></Item>
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


class PrimaryColors extends React.Component {
  render() {
    return (
      <ThemeProvider theme={{ mode: 'light' }}>
      <Container>

          <h1>McKesson Palette</h1>

          <p>We use color as a visual way to communicate our brand. We have three
          palettes to pull from: primary, secondary and support. This variety allows
          us to create visually interesting materials while remaining consistent to
          who we are.</p>
          <p>&nbsp;</p>

          <Wrapper>
            <h3>McKesson Primary Two Colors</h3>
            <p>Our primary colors of McKesson Blue and McKesson Orange are the colors used in our logotype.</p>
            <p>We include tints and shades in our color palette to help us better set apart or highlight information. The use of tints and shades also adds visual interest to information graphics, such as charts, graphs and illustrations.</p>
            <p>Only three tints and three shades in 60%, 40% and 20% increments of any given color are used.</p>


          <Colors palette={palette.primary}/>

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

export default PrimaryColors;
