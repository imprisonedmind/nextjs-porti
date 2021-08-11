import styles from '../styles/Home.module.scss'
import Cover from '../pages/Cover/Cover.js'
import Work from '../pages/Work/Work.js'
import BlogBlock from './Cover/BlogBlock.js'
import Footer from '../pages/footer/footer.js'

export default function Home() {
  return (
    <div className={styles.mainCon}>
      <Cover></Cover>
      <Work></Work>
      <BlogBlock></BlogBlock>
      <Footer></Footer>
    </div>
  )
}
