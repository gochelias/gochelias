import type { NextPage } from 'next';

import styles from 'styles/Home.module.css';
import { Layout } from 'components/Layout';
import { ScrollAnimation } from 'components/ScrollAnimation';

const Home: NextPage = () => (
	<Layout title="Home">
		<header className={styles.hero}>header</header>
		<ScrollAnimation />
		<main className={styles.main}>main</main>
	</Layout>
);

export default Home;
