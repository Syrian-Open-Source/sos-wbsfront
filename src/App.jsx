import './App.css';
import {Icon, IconArea, ImageComponent, ParagraphComponent, SocialLinks, TitleComponent} from "./style";
import React from "react";

function App() {
  return (
      <div className="App">
        <ImageComponent/>
        <TitleComponent> We Are Coding Our Website Now... </TitleComponent>
        <ParagraphComponent>
          The Syrian Open Source platform is the first platform on GitHub dedicated to bringing Syrian developers
          from different cultures and experiences together, to work on projects in different languages, tasks, and
          versions, and works to attract Syrian developers to contribute more under one platform to open source
          software, work on it, and issue it with high quality and advanced engineering features, which It
          stimulates the dissemination of the open-source concept in the Syrian software community, and also
          contributes to raising the efficiency of developers by working on distributed systems and teams.
        </ParagraphComponent>
        <TitleComponent> Follow Us</TitleComponent>
        <SocialLinks>
          <IconArea>
            <a href="https://github.com/Syrian-Open-Source" target="_blank"><Icon className="fa-brands fa-github fa-3x"></Icon></a>
            <a href="https://www.facebook.com/syrian.open.source" target="_blank"><Icon className="fa-brands fa-facebook fa-3x"></Icon></a>
            <a href="https://www.linkedin.com/company/syrian-open-source" target="_blank"><Icon className="fa-brands fa-linkedin fa-3x"></Icon></a>
            <a href="https://syrian-open-source.medium.com" target="_blank"><Icon className="fa-brands fa-medium fa-3x"></Icon></a>
          </IconArea>
        </SocialLinks>
      </div>
  );
}

export default App;
