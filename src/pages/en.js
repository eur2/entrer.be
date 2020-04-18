import React from 'react';
import Scroll from 'react-scroll';
import Helmet from 'react-helmet';
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
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="entrer: five architectures in belgium"
          meta={[
            {
              name: 'description',
              content:
                'entrer: is an invitation to take a stroll through the traces of five committed architecture projects that have recently left their mark on the Belgian landscape. There is a former chapel that houses the reserve collections of the museums of the city of Mons (by Atelier Gigogne + L’Escaut), a sports centre that has redrawn a landscape in Spa (by Baukunst), an industrial conversion that reinforced the centre of Dison (by Baumans-Deffet), a footbridge that transformed a public space in Brussels (by MSA + Ney & Partners), and a garden pavilion in Renaix that articulates a professional kitchen and an art collection (par Vers.A).'
            },
            { name: 'robots', content: 'index,follow' },
            {
              property: 'og:title',
              content: 'entrer: five architectures in belgium'
            },
            {
              property: 'og:description',
              content:
                'entrer: is an invitation to take a stroll through the traces of five committed architecture projects that have recently left their mark on the Belgian landscape. There is a former chapel that houses the reserve collections of the museums of the city of Mons (by Atelier Gigogne + L’Escaut), a sports centre that has redrawn a landscape in Spa (by Baukunst), an industrial conversion that reinforced the centre of Dison (by Baumans-Deffet), a footbridge that transformed a public space in Brussels (by MSA + Ney & Partners), and a garden pavilion in Renaix that articulates a professional kitchen and an art collection (par Vers.A).'
            },
            { property: 'og:url', content: 'https://entrer.be/en' }
          ]}
        />
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
              to="exhibition"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              exhibition
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
              to="projects"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              projects
            </Link>
            <Link
              activeClass="active"
              to="events"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              events
            </Link>
            <Link
              activeClass="active"
              to="team"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              team
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
              to="press"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              press
            </Link>
          </div>
        </nav>
        <main>
          <Element className="element" name="entrer" id="entrer">
            <h2>
              five architectures<br />in belgium
            </h2>
            <h6>
              <a
                href="http://www.centrededesign.com/entrer-en-interference/"
                target="_blank"
                rel="noopener"
              >
                Exhibition from October 3rd until December 9th<br />at Design
                Center, Montréal
              </a>
              <br />
              An initiative of &nbsp;<a
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
            .filter(post => post.node.frontmatter.lang === 'en')
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
          <h6>inventory</h6>
          <Inventaire />
        </footer>
      </div>
    );
  }
}
export default Index;

export const pageQuery = graphql`
  query IndexQueryEn {
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
