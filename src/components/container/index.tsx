import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
export function App() {
  return (
    <>
      <Container>
        <section>Logo</section>
      </Container>

      <Container>
        <section>Menu</section>
      </Container>

      <Container>
        <section>Logo</section>
      </Container>

      <Container>
        <section>Logo</section>
      </Container>
    </>
  );
}
