import React from 'react';
// import PropTypes from 'prop-types';

export default function Typography() {
  return (

    <div className="flex-container">

      <h2 className="section">Font Families</h2>
      <p>Our typefaces were specifically chosen for readability across formats as well as the way they’re able to portray our collaborative, forward-thinking, optimistic, authentic and expert personality. Use typography to organize information into clear, easy-to-follow hierarchies that helpthe reader navigate our materials.</p>
      <p>&nbsp;</p>

      <hr className="styled" />

      <div className="flex-item header">
        <span className="big">Aa</span>
        <p>Georgia</p>
        <p>&nbsp;</p>
        <p>abcdefghijklmnopqrstuvwxyz 1234567890 <span className="upper">abcdefghijklmnopqrstuvwxyz</span> <em>abcdefghijklmnopqrstuvwxyz</em></p>
      </div>

      <div className="flex-item content">
        <span className="big">Aa</span>
        <p>Arial</p>
        <p>&nbsp;</p>
        <p>abcdefghijklmnopqrstuvwxyz 1234567890 <span className="upper">abcdefghijklmnopqrstuvwxyz</span> <em>abcdefghijklmnopqrstuvwxyz</em></p>
      </div>

      <hr className="styled" />
      <h3 className="section">Typography</h3>
      <p>Our brand typefaces from Website/Digital applications are <b>Georgia</b> and <b>Arial</b>. We use them for most day-to-day communications, such as reports, presentations or memos. These typefaces are standard on most computer operating systems and accessible for everyone. They are also the typefaces we use for digital applications like websites.</p>

      <p>&nbsp;</p>
      <hr className="styled" />
      <p>&nbsp;</p>
      <p className="small">Headings Default Font - Georgia Bold</p>
      <h1>H1 - Lorem Ipsum dolot amet - 36px</h1>
      <h2>H2 - Lorem Ipsum dolot amet - 28px</h2>
      <h3>H3 - Lorem Ipsum dolot amet - 20px</h3>
      <h4>H4 - Lorem Ipsum dolot amet - 18px </h4>
      <h5>H5 - Lorem Ipsum dolot amet - 16px</h5>
      <h6>H6 - Lorem Ipsum dolot amet</h6>

      <p>&nbsp;</p>
      <hr className="styled" />
      <p>&nbsp;</p>
      <p className="small">Body Default Font - Arial 16px</p>
      <p>&nbsp;</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em></p>
      <p>&nbsp;</p>
      <hr className="styled" />
      <p>&nbsp;</p>

    </div>

  );
}

Typography.propTypes = {

};
