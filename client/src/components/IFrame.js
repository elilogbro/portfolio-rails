function IFrame({project}) {
    return (
        <div>
            <iframe src={project.video.embed_code}></iframe>
        </div>
    )
}

export default IFrame;