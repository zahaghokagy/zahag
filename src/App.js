import React, { Component } from "react";
import "./App.css";
import Nav from "./components/navbar";
import Main from "./components/main";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
/* */
import img2 from "./img/2.gif";
import img4 from "./img/4.gif";
import img5 from "./img/5.gif";
import img7 from "./img/7.gif";
import img9 from "./img/9.gif";
/**/

import png2 from "./img/png/2.png";
import png4 from "./img/png/4.png";
import png5 from "./img/png/5.png";
import png7 from "./img/png/7.png";
import png9 from "./img/png/9.png";

class App extends Component {
  state = {
    blocks: [
      { block: png2, png: png2, gif: img2 },
      { block: png4, png: png4, gif: img4 },
      { block: png5, png: png5, gif: img5 },
      { block: png7, png: png7, gif: img7 },
      { block: png9, png: png9, gif: img9 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Main />
        <Portfolio
          handlemouseenter={gg => {
            let blockme = Object.assign({}, this.state.blocks);
            this.setState(() => {
              blockme[gg].block = blockme[gg].gif;
              return blockme[gg].block;
            });
            return this.state;
          }}
          handlemouseout={gg => {
            let blockme = Object.assign({}, this.state.blocks);
            this.setState(() => {
              blockme[gg].block = blockme[gg].png;
              return blockme[gg].block;
            });
            return this.state;
          }}
          block={gg => this.state.blocks[gg].block}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
