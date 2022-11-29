function IFrame({project}) {
    return (
        <div>
            <iframe src={project.video.embed_code} style={{height: '60vh', width: '50vw'}}></iframe>
        </div>
    )
}

export default IFrame;