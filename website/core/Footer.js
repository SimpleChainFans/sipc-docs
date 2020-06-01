/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>联系我们</h5>
            <a href="https://github.com/simplechain-org/go-simplechain/issues">产品技术反馈</a>
            <a href="http://xdrwj5ahy41m77hm.mikecrm.com/lHTqCbD">领取赏金任务</a>
            <a href="https://simplechainfans.github.io/sipc-docs/docs/docs_51">技术支持</a>
          </div>
          <div>
            <h5>社区</h5>
            {/* <a href={this.pageUrl('https://t.me/SimpleChainOfficial', this.props.language)}>
              Telegram
            </a> */}
            <a
              href="https://t.me/SimpleChainOfficial"
              target="_blank"
              rel="noreferrer noopener">
              Telegram
            </a>
            <a
              href="https://medium.com/@SimpleChain"
              target="_blank"
              rel="noreferrer noopener">
              Medium
            </a>
            <a href="https://twitter.com/SimpleChain">Twitter</a>
            <a
              href="https://www.linkedin.com/company/simplechain-foundation/"
              target="_blank"
              rel="noreferrer noopener">
              Linkedln
            </a>
          </div>
          <div>
            <h5>开发者资源</h5>
            <a href="https://www.simplechain.com">官网</a>
            <a href="https://explorer.simplechain.com/">浏览器</a>
            <a href="https://simpool.sipc.vip/">矿池</a>
            <a href="https://github.com/simplechain-org">Github</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>

        {/* <a
          href="https://bytom.io"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/1.png`}
            alt="bystack开源文档"
            width="170"
            height="45"
          />
        </a> */}
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
