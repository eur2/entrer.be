import React from 'react';
import Scroll from 'react-scroll';
import Inventaire from '../components/Inventaire';
import wba from '../assets/WBA.png';
import wbi from '../assets/WBI.png';
import fwb from '../assets/FWB.png';

let Link = Scroll.Link;
let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

class Index extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      //console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      //console.log("end", arguments);
    });
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    //console.log(to);
  }
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark;
    return (
      <div>
        <header>
          <Link
            to="entrer"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <h1>entrer&thinsp;:</h1>
          </Link>
        </header>
        <nav>
          <div className="menu">
            <Link
              activeClass="active"
              to="exposition"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              exposition
            </Link>
            <Link
              activeClass="active"
              to="catalogue"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              catalogue
            </Link>
            <Link
              activeClass="active"
              to="projets"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              projets
            </Link>
            <Link
              activeClass="active"
              to="saison"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              saison
            </Link>
            <Link
              activeClass="active"
              to="equipe"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              équipe
            </Link>
            <Link
              activeClass="active"
              to="infos"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              infos
            </Link>
            <Link
              activeClass="active"
              to="presse"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              presse
            </Link>
          </div>
        </nav>
        <main>
          <Element className="element" name="entrer" id="entrer">
            <h2>
              cinq architectures<br />en belgique
            </h2>
            <h6>
              <a
                href="http://www.centrededesign.com/entrer-en-interference/"
                target="_blank"
                rel="noopener"
              >
                Exposition présentée du 4 octobre au 9 décembre 2018<br />au
                Centre du Design, Montréal, dans une forme augmentée<br /> et
                sous le titre entrer: en interférence
              </a>
              <br />
              Une initiative de &nbsp;<a
                href="http://www.wbarchitectures.be"
                target="_blank"
                rel="noopener"
              >
                Wallonie-Bruxelles Architectures
              </a>
              <br />
              <a
                href="http://www.wbarchitectures.be"
                target="_blank"
                rel="noopener"
              >
                <img src={wba} alt="WBA" />
              </a>
              <a
                href="http://www.federation-wallonie-bruxelles.be"
                target="_blank"
                rel="noopener"
              >
                <img id="fwb" src={fwb} alt="FWB" />
              </a>
              <a href="http://www.wbi.be" target="_blank" rel="noopener">
                <img src={wbi} alt="WBI" />
              </a>
            </h6>
          </Element>
          {posts
            .filter(post => post.node.frontmatter.lang === 'fr')
            .map(({ node: post }) => {
              return (
                <Element
                  className="element"
                  key={post.id}
                  name={post.frontmatter.path.slice(1, -1)}
                  id={post.frontmatter.path.slice(1, -1)}
                >
                  <h2>{post.frontmatter.title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.html
                    }}
                  />
                </Element>
              );
            })}
        </main>
        <footer>
          <h6>inventaire</h6>
          <Inventaire />
        </footer>
      </div>
    );
  }
}
export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___number] }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
            number
            lang
          }
        }
      }
    }
  }
`;
