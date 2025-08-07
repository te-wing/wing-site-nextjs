import styles from './formbox.module.scss';

export default function FormBox() {
  return(
    <div className={styles.formBox}>
      <iframe className={styles.formIframe} src='https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__SvF4cxUQVRaVkQ2VjlTN0NSMlRCNUY5U0o0WEpFMi4u&rcdb8ad6525a34d37b55f1212ddb877b9=%22wing.osaka%22'></iframe>
    </div>
  )
}