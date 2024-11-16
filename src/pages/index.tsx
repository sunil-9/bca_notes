import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

interface Feature {
  title: string;
  description: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
}

function HomepageHeader(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__description">
          Your comprehensive resource for BCA studies at Pokhara University. Access important questions, course content, and study materials all in one place.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/">
            Start Learning 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

const FeatureList: Feature[] = [
  {
    title: 'Easy Downloads',
    Svg: require('@site/static/img/easy-download.svg').default,
    description:
      'Download study materials with a single click. Access notes, PDFs, and resources offline anytime, anywhere.',
  },
  {
    title: 'Chapter-wise Notes',
    Svg: require('@site/static/img/chapter-notes.svg').default,
    description:
      'Well-organized notes divided by chapters and units. Find exactly what you need with our structured content layout.',
  },
  {
    title: 'Important Questions',
    Svg: require('@site/static/img/important-questions.svg').default,
    description:
      'Curated collection of important questions from past exams and expert recommendations to help you prepare better.',
  },
  {
    title: 'Forever Free',
    Svg: require('@site/static/img/forever-free.svg').default,
    description:
      'All resources are completely free and will always remain free. No hidden charges, no subscriptions needed.',
  },
];

function Feature({title, Svg, description}: Feature) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeature(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageFooter(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <h3>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="/docs">Documentation</Link></li>
              <li><Link to="/docs/category/programming-languages-and-tools">PLT</Link></li>
              <li><Link to="/docs/category/mobile-application-development-technology">MADT</Link></li>
              <li><Link to="/docs/category/linux-and-networking">Linux</Link></li>
            </ul>
          </div>
          <div className="col col--4">
            <h3>Community</h3>
            <ul className={styles.footerLinks}>
              <li><a href="https://github.com/yourusername/bca-notes" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            </ul>
          </div>
          <div className="col col--4">
            <h3>More</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="https://github.com/yourusername/bca-notes" target="_blank" rel="noopener noreferrer">Contribute</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            Made with ❤️ by BCA Students | Copyright © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeature />
      </main>
      {/* <HomepageFooter /> */}
    </Layout>
  );
} 