import styles from "../../styles/modules/WatchSection.module.css";

function Video(params) {
    return (
        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src={params.link}
            key={params.idx}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
    )
}

export default Video;