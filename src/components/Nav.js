import React from 'react';

const Nav = () => {
    return (
        <nav class="navbar is-transparent green">
        <div class="navbar-brand">
          <a class="navbar-item" href="http://bulma.io">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
          </a>
      
          <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
            <span class="icon" >
              <i class="fa fa-lg fa-github"></i>
            </span>
          </a>
      
          <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
            <span class="icon" >
              <i class="fa fa-lg fa-twitter"></i>
            </span>
          </a>
      
          <div class="navbar-burger burger" data-target="navMenuTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div id="navMenuTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link  is-active" href="/documentation/overview/start/">
                Docs
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item " href="/documentation/overview/start/">
                  Overview
                </a>
                <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
                  Modifiers
                </a>
                <a class="navbar-item " href="http://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a class="navbar-item " href="http://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a class="navbar-item " href="http://bulma.io/documentation/form/general/">
                  Form
                </a>
                <a class="navbar-item " href="http://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                
                  <a class="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
                    Components
                  </a>
                
                <hr class="navbar-divider"/>
                <div class="navbar-item">
                  <div>
                    <p class="is-size-6-desktop">
                      <strong class="has-text-info">0.5.3</strong>
                    </p>
                    
                      <small>
                        <a class="bd-view-all-versions" href="/versions">View all versions</a>
                      </small>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link " href="http://bulma.io/blog/">
                Blog
              </a>
              <div  class="navbar-dropdown is-boxed" >
                
                  <a class="navbar-item" href="/2017/08/03/list-of-tags/">
                    <div class="navbar-content">
                      <p>
                        <small class="has-text-info">03 Aug 2017</small>
                      </p>
                      <p>New feature: list of tags</p>
                    </div>
                  </a>
                
                  <a class="navbar-item" href="/2017/08/01/bulma-bootstrap-comparison/">
                    <div class="navbar-content">
                      <p>
                        <small class="has-text-info">01 Aug 2017</small>
                      </p>
                      <p>Bulma / Bootstrap comparison</p>
                    </div>
                  </a>
                
                  <a class="navbar-item" href="/2017/07/24/access-previous-bulma-versions/">
                    <div class="navbar-content">
                      <p>
                        <small class="has-text-info">24 Jul 2017</small>
                      </p>
                      <p>Access previous Bulma versions</p>
                    </div>
                  </a>
                
                <a class="navbar-item" href="http://bulma.io/blog/">
                  More posts
                </a>
                <hr class="navbar-divider"/>
                <div class="navbar-item">
                  <div class="navbar-content">
                    <div class="level is-mobile">
                      <div class="level-left">
                        <div class="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div class="level-right">
                        <div class="level-item">
                          <a class="button bd-is-rss is-small" href="http://bulma.io/atom.xml">
                            <span class="icon is-small">
                              <i class="fa fa-rss"></i>
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <div class="navbar-link">
                More
              </div>
              <div id="moreDropdown" class="navbar-dropdown is-boxed">
                <a class="navbar-item " href="http://bulma.io/extensions/">
                  <div class="level is-mobile">
                    <div class="level-left">
                      <div class="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br/>
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                    <div class="level-right">
                      <div class="level-item">
                        <span class="icon has-text-info">
                          <i class="fa fa-plug"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <a class="navbar-item " href="http://bulma.io/expo/">
              <span class="bd-emoji">⭐️</span>
              Expo
            </a>
            <a class="navbar-item " href="http://bulma.io/love/">
              <span class="bd-emoji">❤️</span>
              Love
            </a>
                <div className="navbar-item">
                    <input type="text" />
                </div>
            </div>
      
          <div class="navbar-end">
            <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
              <span class="icon" >
                <i class="fa fa-lg fa-github"></i>
              </span>
            </a>
            <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
              <span class="icon" >
                <i class="fa fa-lg fa-twitter"></i>
              </span>
            </a>
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button"
        data-social-network="Twitter"
        data-social-action="tweet"
        data-social-target="http://bulma.io"
        target="_blank"
        href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
        <span class="icon">
          <i class="fa fa-twitter"></i>
        </span>
        <span>
          Tweet
        </span>
      </a>
      
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.3.zip">
                    <span class="icon">
                      <i class="fa fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Nav;