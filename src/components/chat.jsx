import React, { Component } from "react";
import Msg from "./msg";
import Bottom from "./bottom";
class Chat extends Component {
  state = {
    date: 0,
    name: 0,
    right: 0,
    reply: false,
    msg: "",
    replys: [
      { msg: "Salah", reply: "hey salah " },
      { msg: "Azmi", reply: "hey Azmi " },
      { msg: "Salam", reply: "wa2alaykum salam" },
      { msg: "Messi or ronaldo", reply: "Oh Mess of course" },
      { msg: "ookey", reply: "ooookey" },
      { msg: "Bye", reply: "See you soon" },
      { msg: "See you", reply: "See you" },
      { msg: "ookey", reply: "ooookey" },
      { msg: "السلام", reply: "وعليكم السلام" },
      { msg: "Hello", reply: "O Hi i'm ZahBot" },
      { msg: "Hey you", reply: "Hello Yeh" },
      { msg: "Hi", reply: "Hello Salah" },
      { msg: "How are you", reply: "i'm good thanks man" },
      { msg: "Ok", reply: "okeey" },
      { msg: "Hey", reply: "Hey you" },
      { msg: "What's my name", reply: "Salah" },
      {
        msg: "سورة الفلق" || "Al-Falaq",
        reply:
          "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ	(1) مِنْ شَرِّ مَا خَلَقَ	(2) وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ	(3) وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ	(4) وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ	(5)"
      }
    ],
    send: [
      {
        msg: "oh Hello! What's your name",
        class: "a",
        anim: "reply 200ms ease-in 500ms forwards",
        date: new Date().getHours() + ":" + 29
      },
      {
        msg: "Salah",
        class: "b",
        anim: "reply 200ms ease-in 1500ms forwards",
        date: new Date().getHours() + ":" + 31
      },
      {
        msg: "Nice to meet you salah,i'm ZahBot",
        class: "a",
        anim: "reply 200ms ease-in 2500ms forwards",
        date: new Date().getHours() + ":" + 32
      },
      {
        msg: "Nice to meet you too!",
        class: "b",
        anim: "reply 200ms ease-in 3500ms forwards",
        date: new Date().getHours() + ":" + 33
      },
      {
        msg: "How Old are you i'm just created days ago and you",
        class: "a",
        anim: "reply 200ms ease-in 4500ms forwards",
        date: new Date().getHours() + ":" + 34
      },
      {
        msg: "Well i'm 18 year old",
        class: "b",
        anim: "reply 200ms ease-in 5500ms forwards",
        date: new Date().getHours() + ":" + 35
      },
      {
        msg: "And thanks for asking by the way",
        class: "b",
        anim: "reply 200ms ease-in 6500ms forwards",
        date: new Date().getHours() + ":" + 36
      }
    ]
  };
  handleChange = event => {
    this.setState({ msg: event.target.value });
  };

  handlekey = event => {
    const date = new Date();
    const current = date.getHours() + ":" + date.getSeconds();
    if (event.key === "Enter") {
      var salah = this.state.replys.filter(n => {
        let msg =
          this.state.msg.charAt(0).toUpperCase() + this.state.msg.slice(1);
        return n.msg === msg;
      });
      this.state.msg !== "" &&
        this.state.send.push({
          msg: this.state.msg,
          class: "b",
          anim: "reply 200ms ease-in 100ms forwards",
          date: current
        });
      this.setState({ msg: "", reply: true });
      salah[0] !== undefined
        ? this.setState({ right: salah[0].reply })
        : this.setState({ right: 0 });
      event.preventDefault();
      return this.statec;
    }
  };
  handlescroll = () => {
    if (this.state.reply === true) {
      setTimeout(() => {
        const doc = document.getElementsByClassName("mid")[0];
        /*doc.scrollTo(0, doc.scrollHeight);*/
        doc.scrollTo({ top: doc.scrollHeight, behavior: "smooth" });
        this.setState({ reply: false });
      }, 1);
    }
  };
  okey = () => {
    const date = new Date();
    const current = date.getHours() + ":" + date.getSeconds();
    if (this.state.right !== 0) {
      this.state.send.push({
        msg: this.state.right,
        class: "a",
        anim: "reply 200ms ease-in 300ms forwards",
        date: current
      });

      this.setState({ right: 0 });
      return this.state;
    }
  };

  render() {
    this.okey();
    this.handlescroll();
    return (
      <React.Fragment>
        <div class="mid">
          {this.state.send.map(n => {
            const sar = (
              <Msg
                class={n.class}
                msg={n.msg}
                dateclass={n.class + n.class}
                date={n.date}
                anime={{ animation: n.anim }}
              />
            );
            return sar;
          }, 1000)}
        </div>
        <Bottom
          onchange={this.handleChange}
          value={this.state.msg}
          onkey={this.handlekey}
        />
      </React.Fragment>
    );
  }
}

export default Chat;
