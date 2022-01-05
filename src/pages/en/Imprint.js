import React from 'react';

import Container from '../../components/Container';
import Main from '../../components/Main';
import Navigation from '../../components/Navigation';

function Imprint() {
  return (
    <Main>
      <Navigation />
      <Container className="article">
        <h1>Imprint</h1>
        <h2>Contact</h2>
        <p>
          David Übelacker
          <br />
          Bläsiring 28
          <br />
          4057 Basel
          <br />
          Switzerland
        </p>
        <p>
          E-Mail: support@codecowboys.io
          <br />
          Webseite: codecowboys.io
        </p>
        <h2>Disclaimer</h2>
        <h3>Accountability for content</h3>
        <p>The contents of this pages have been created with the utmost care. </p>
        <p>Liability claims against the author for material or immaterial damage resulting from access to or use or non-use of the published information, misuse of the connection or technical faults are excluded.</p>
        <p>All offers are non-binding. The author expressly reserves the right to change, supplement or delete parts of the pages or the entire offer without separate announcement or to cease publication temporarily or permanently.</p>
        <h3>Accountability for links</h3>
        <p>
          Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to me at the time of linking.
          Should any legal infringement become known to us, i will remove the respective link immediately.
        </p>
        <h2>Copyright</h2>
        <p>The copyright and all other rights to content, images, photos or other files on the website belong exclusively to David Übelacker or the specifically named copyright holders.</p>
        <p>
          Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on my web pages requires the prior consent of the
          respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings.
          Unauthorized utilization of copyrighted works is punishable by the copyright law.
        </p>
      </Container>
    </Main>
  );
}

export default Imprint;
